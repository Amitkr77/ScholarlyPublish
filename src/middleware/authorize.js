export const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        const hasRole = req.user.roles.some(role =>
            allowedRoles.includes(role)
        );

        if (!hasRole) {
            return res.status(403).json({ message: "Access denied" });
        }

        next();
    };
};
