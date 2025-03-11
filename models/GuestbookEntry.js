const mongoose = require('mongoose');

const GuestbookEntrySchema = new mongoose.Schema({
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // if logged in
    guestName: { type: String }, // if not logged in
}, { timestamps: true });

module.exports = mongoose.model('GuestbookEntry', GuestbookEntrySchema);
