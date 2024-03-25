import mongoose from 'mongoose';

const remainderSchema = new mongoose.Schema(
    {
        email: {
            type: String,
        },
        clientName: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },
        amountOwed: {
            type: Number,
        },
        dateDue: {
            type: Date,
        },
    },
    { timestamps: true }
);

const Remainder = mongoose.model('Remainder', remainderSchema);

export default Remainder;