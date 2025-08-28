import express from "express";
// filepath: c:\Users\gandh\OneDrive\Desktop\fullProject\src\app.js
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(cors(
    {
        origin:'process.env.CORS_ORIGIN',
        credentials:true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    }
    
));

app.use(express.json({
    limit:'16kb'
}))
app.use(cookieParser());

app.use(express.urlencoded({extended:true, limit:'16kb'}));


app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send('Hello World!');
});
export default app;