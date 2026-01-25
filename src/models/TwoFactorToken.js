import mongoose from "mongoose";

const TwoFactorTokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true
    },

    otpHash: {
        type: String,
        required: true
    },

    expiresAt: {
        type: Date,
        required: true,
        index: { expires: 0 }
    },

    used: {
        type: Boolean,
        default: false
    }
});

const TwoFactorToken = mongoose.models.TwoFactorToken || mongoose.model("TwoFactorToken", TwoFactorTokenSchema);

export default TwoFactorToken;