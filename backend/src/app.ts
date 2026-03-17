import express,{Application, urlencoded} from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import { Response, Request } from 'express';

const app: Application = express();

const allowedOrigins = [
  'http://localhost:5173',      // Local React/Vite dev server 
];
const corsOption = {
    origin: (origin: any,callback: any)=>{
        if( !origin || allowedOrigins.includes(origin)){
            callback(null,true);
        }else{
            callback(new Error("Not Allowed By cors"));
        }
    },
    Credential: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200
}

app.use(cors(corsOption));


app.use(express.json({ limit:'20kb'}));
app.use(urlencoded({ extended: true, limit: '20kb'}));
app.use(express.static('public'));
app.use(cookieParser())


export default app;