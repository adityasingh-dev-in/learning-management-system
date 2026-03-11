import express,{Application, urlencoded} from 'express'
import cookieParser from 'cookie-parser';

const app: Application = express();


app.use(express.json({ limit:'20kb'}));
app.use(urlencoded({ extended: true, limit: '20kb'}));
app.use(express.static('public'));
app.use(cookieParser())

export default app;