"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BookSchema = new mongoose_1.Schema({
    title: { type: String },
    author: { type: String },
    isbn: { type: String }
}, {
    timestamps: true
});
exports.default = mongoose_1.model('Book', BookSchema);
