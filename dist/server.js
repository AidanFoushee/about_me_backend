"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const { Client } = require('pg');
const port = 5001;
// PostgresSQL client object
const client = new Client({
    user: 'postgres',
    password: 'Lacenter(47)',
    host: 'localhost',
    port: 5432,
    database: 'api',
});
client.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    // error catcher
    .catch((err) => console.error('Connection error', err.stack));
// Enable CORS
app.use((0, cors_1.default)());
// API Endpoint
app.get('/awesome/applicant', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Query the database for applicant info
        const result = yield client.query('SELECT * FROM about_me;');
        const applicant = result.rows[0];
        res.json(applicant);
    }
    catch (error) {
        console.error('Error querying database:', error);
        res.status(500).send('Internal Server Error');
    }
}));
// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/awesome/applicant`);
});
