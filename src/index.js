// require('dotenv').config({path: './env'});

import dotenv from 'dotenv';
import connectDB from './db/index.js';
dotenv.config({path: './.env'});
//const app = express();

// ;(async ()=>{
//     try {
//         await mongoose.connect(`process.env.MONGO_URI/${db}`)
//         console.log("Db connected");
//         app.on("error", (error) => {
//             console.error("Server error", error);
//         });
//         app.listen(process.env.PORT, () => {
//             console.log(`Server running on port ${process.env.PORT}`);
//         }); 
//     } catch (error) {
//         console.error("Db connection error", error);
//     }
// })()

connectDB();
