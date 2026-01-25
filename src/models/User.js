import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    affiliation: { type: String, trim: true, maxlength: 200 },
    expertise: {
        type: [String],
        trim: true,
        maxlength: 100, // Per item
        validate: [arrayLimit, "Expertise array too long (max 10 items)"],
    },
    qualification: { type: String, trim: true, maxlength: 150 },
    experienceYears: {
        type: Number,
        min: 0,
        max: 100,
        default: 0,
    },
});

const SecuritySchema = new mongoose.Schema({
    twoFactorEnabled: { type: Boolean, default: false },
    twoFactorMethod: {
        type: String,
        enum: ["EMAIL"],
        default: null,
    },
    twoFactorVerifiedAt: { type: Date, select: false }, 
});

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String, required: true, trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
            index: true,
        },
        passwordHash: { type: String, required: true, select: false }, 
        roles: {
            type: [String],
            enum: ["AUTHOR", "REVIEWER", "EDITOR", "ADMIN"],
            default: ["AUTHOR"],
            index: true, 
        },
        isActive: { type: Boolean, default: true, index: true }, 
        isEmailVerified: { type: Boolean, default: false },
        security: { type: SecuritySchema, default: {} },
        profile: { type: ProfileSchema, default: {} },
        lastLoginAt: { type: Date },
    },
    {
        timestamps: true,
        strict: "throw", 
    }
);

// Custom validator for expertise array
function arrayLimit(val) {
    return val.length <= 10;
}

// Virtual for full name (computed, no storage)
UserSchema.virtual("fullName").get(function () {
    return `${this.name.first} ${this.name.last}`.trim();
});

// Transform toJSON to hide sensitive fields in API responses
UserSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.passwordHash;
    delete obj.security.twoFactorVerifiedAt; // If still needed, access via populate
    return obj;
};

// Compound index example: active users by role (add more as needed)
UserSchema.index({ isActive: 1, roles: 1 });

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
