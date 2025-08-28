import express from express
import CookieParser from "cookieparser";
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

app.use(express.urlencoded({extended:true, limit:'16kb'}));


app.use(express.static('public'));

app.use(CookieParser());

app.get('/', (req, res) => {
    res.send('Hello World!');
});
export {app}