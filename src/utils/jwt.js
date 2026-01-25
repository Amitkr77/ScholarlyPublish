import jwt from "jsonwebtoken";

export const generateJWT = (user) => {
    return jwt.sign(
        {
            userId: user._id,
            roles: user.roles,
            twoFactorVerified: true
        },
        process.env.JWT_SECRET,
        { expiresIn: "15m" }
    );
};
