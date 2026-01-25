import User from "@/models/User";
import TwoFactorToken from "@/models/TwoFactorToken";
import { comparePassword, generateOTP } from "@/utils/security";
import { generateJWT } from "@/utils/jwt";
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/mongoDb";

export default async function handler(req, res) {
    await connectDB(); // Ensure DB connection

    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method Not Allowed",
        });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required",
        });
    }

    try {
        // Find user and include password hash
        const user = await User.findOne({ email }).select("+passwordHash");

        if (!user || !user.isActive) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        if (!user.passwordHash) {
            return res.status(500).json({
                success: false,
                message: "User password is not set. Contact support.",
            });
        }

        // Verify password
        const isValidPassword = await comparePassword(password, user.passwordHash);
        if (!isValidPassword) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        // Check if 2FA is required for the user's roles
        const rolesRequiring2FA = ["REVIEWER", "EDITOR", "ADMIN"];
        const mustVerify2FA = user.roles.some(role => rolesRequiring2FA.includes(role));

        if (mustVerify2FA && !user.security.twoFactorEnabled) {
            return res.status(403).json({
                success: false,
                message: "Two-factor authentication must be enabled for your role.",
            });
        }

        // Handle 2FA if enabled
        if (user.security.twoFactorEnabled) {
            const otp = generateOTP();
            const otpHash = await bcrypt.hash(otp, 10);

            await TwoFactorToken.create({
                userId: user._id,
                otpHash,
                expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 min
            });

            // TODO: Replace console.log with actual email/SMS sending
            console.log(`OTP for ${user.email}: ${otp}`);

            return res.status(200).json({
                success: true,
                step: "OTP_REQUIRED",
                message: "Two-factor authentication is required. Please enter the OTP sent to your email.",
            });
        }

        // Generate JWT token
        const token = generateJWT(user);

        // Update last login
        user.lastLoginAt = new Date();
        await user.save();

        res.status(200).json({
            success: true,
            message: "Login successful",
            data: {
                token,
                user: {
                    id: user._id,
                    email: user.email,
                    roles: user.roles,
                    lastLoginAt: user.lastLoginAt,
                },
            },
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}
