import express from "express";
import fs from "fs";
import { format } from 'date-fns';

const app = express();
const PORT = 8000

app.get('/', (req, res) => {
    let current_date = format(new Date(), 'dd-MM-yyyy-HH-mm-ss', { timeZone: 'Asia/Kolkata' })
    const filepath = `Timestamp/current-date-time.txt`
    fs.writeFileSync(filepath, `${current_date}`, 'utf-8');
    res.status(200).send(`
          <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        padding: 20px;
                    }
                    .timestamp {
                        font-size: 24px;
                        color: #333;
                        margin-bottom: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="timestamp">Current Date and Time: ${current_date}</div>
            </body>
        </html>
    `)
})

app.get('/read', (req, res) => {
    const filepath = `Timestamp/current-date-time.txt`
    const readData = fs.readFileSync(filepath, 'utf-8');
    res.status(200).send(`<html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        padding: 20px;
                    }
                    .timestamp {
                        font-size: 24px;
                        color: #333;
                        margin-bottom: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="timestamp">Read Data: ${readData}</div>
            </body>
        </html>`)
})

app.listen(PORT, () => {
    console.log(`run port - ${PORT} `)
})