"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 5001;
// Enable CORS
app.use((0, cors_1.default)());
// API Endpoint
app.get('/awesome/applicant', (req, res) => {
    res.json({
        name: 'Hi! My name is Aidan Foushee',
        favoriteFood: 'I absolutely love burritos',
        hobby: 'Playing chess is a fun way I like to pass the time and challenge myself',
        favoriteQuote: 'Code is like humor. When you have to explain it, it’s bad.',
    });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
