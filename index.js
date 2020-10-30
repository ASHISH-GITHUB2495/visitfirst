const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// Put all API endpoints under '/api'
app.get('/api1',(req,res)=>{
 

  async function fetchData() {
          const response = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3dc31574c05348d498ecf68edcf05115");
          response
            .json()
            .then((response) => {
             res.send(response);
     
          });
        }
        fetchData();
  });

app.get('/api2',(req,res)=>{
async function fetchData() {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=3dc31574c05348d498ecf68edcf05115");
        response
          .json()
          .then((response) => {
           res.send(response);
        });
      }
      fetchData();
});

app.get('/api', (req, res) => {
 res.send("<h1>Everything is running fine!!! Ashish</h1>");
  
});

app.get("/api3",(req,res) =>{


let country = req.query.country;
let word = req.query.word;
let category = req.query.category;
let pageCount = req.query.pageCount;


  async function fetchData() {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country="+country+"&q="+word+"&category="+category+"&pageSize="+pageCount+"&apiKey=3dc31574c05348d498ecf68edcf05115");
    response
      .json()
      .then((response) => {
       res.send(response);
    });
  }
  fetchData();
  
});

app.get("/api4",(req,res) =>{

  let word = req.query.word;
  let from = req.query.from;
  let to = req.query.to;
  let sort = req.query.sort;
  let pageCount = req.query.pageCount;
  
  
    async function fetchData() {
    
      const response = await fetch("https://newsapi.org/v2/everything?q="+word+"&from="+from+"&to="+to+"&sortBy="+sort+"&pageSize="+pageCount+"&apiKey=3dc31574c05348d498ecf68edcf05115");
      response
        .json()
        .then((response) => {
         res.send(response);
      });
    }
    fetchData();
    
  });

  app.get("/api5",(req,res) =>{

    let language = req.query.language;
    let country = req.query.country;
    let category= req.query.category;
    
      async function fetchData() {
      
        const response = await fetch("https://newsapi.org/v2/sources?language="+language+"&country="+country+"&category="+category+"&apiKey=3dc31574c05348d498ecf68edcf05115");
        response
          .json()
          .then((response) => {
           res.send(response);
        });
      }
      fetchData();
      
    });
  

    app.get("/api6",(req,res) =>{


        async function fetchData() {
        
          const response = await fetch("https://remotive.io/api/remote-jobs/categories");
          response
            .json()
            .then((response) => {
             res.send(response);
          });
        }
        fetchData();
        
      });
      app.get("/api7",(req,res) =>{

    let category = req.query.category;
        async function fetchData() {
          const response = await fetch("https://remotive.io/api/remote-jobs?category="+category+"&limit=15");
          response
            .json()
            .then((response) => {
             res.send(response);
          });
        }
        fetchData();
        
      });
    


































// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`r listening on ${port}`);