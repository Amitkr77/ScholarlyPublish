import User from "@/models/User";
import { hashPassword } from "@/utils/security";
import { connectDB } from "@/lib/mongoDb"

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            status: "error",
            message: `Method ${req.method} not allowed. Use POST.`,
        });
    }

    try {

        await connectDB();

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                status: "error",
                message: "Missing required fields: name, email, and password are required.",
            });
        }

        const exist = await User.findOne({ email });
        if (exist) {
            return res.status(400).json({
                status: "error",
                message: `User with email "${email}" already exists.`,
            });
        }

        const hashedPassword = await hashPassword(password);

        const user = await User.create({
            name,
            email,
            passwordHash: hashedPassword,
        });

        return res.status(201).json({
            status: "success",
            message: "User registered successfully! Please verify your email.",
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                isActive: user.isActive,
                createdAt: user.createdAt,
            },
        });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal server error while creating user.",
        });
    }
}
