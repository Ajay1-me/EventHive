import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express()

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const uri = "mongodb+srv://ajay12:<password>@cluster0.q2vksxv.mongodb.net/?";
const PORT = process.env.PORT || 5000;



//prevents warning in the console
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	.catch((error) => console.log(`${error} did not connect`));
	
mongoose.set('useFindAndModify', false);