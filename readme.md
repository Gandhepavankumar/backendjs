chai aur backend series
 this is video series on backend
USE ASYNC AWAIT TRY CATCH FOR ENTIRE PROJECT 
 step 1: 
 -->Preparing SetUp in terminal npm init and starting point is index.js
 -->Now understand the package.json
 -->Add an empty folder public/temp file for it 
 -->For security purpose while deploying in colud or internet use .env file like create one more file called .gitignore add file name .env for that the git can igonre the env file 

 --> create files called app.js for express, constants.js for making some constants where i can use at multiple times at diff files while updating it's var makes eassy index.js is entry point 
 --> create a src folder add multiple folder like 
   src/controller
   src/db
   src/middleware
   src/models
   src/routes
   src/utils

Step 2: Install nodemon dev dependce for server restart when updating the files or folders which are tracked by git 
    install prettier for tab or some corrections over the semicolon type issue


    "dependencies": {
    "cookieparser": "^0.1.0",--> Some permissions for user
    "cors": "^2.8.5",--> Accesses over the mutiple ips or sites 
    "dotenv": "^17.2.1",--> when server is started as soon as possible the env var should avilable to entire project
    "express": "^5.1.0",--> to start server or req, res, api endpoints
    "mongoose": "^8.18.0"--> models and connection over db and ODM 
  }

  step 3: 

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

