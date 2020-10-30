const express = require('express');
const path = require('path');
const fetch = require('node-fetch');


const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


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

// Put all API endpoints under '/api'
app.get('/api', (req, res) => {
 res.send("<h1>hii</h1>");
  
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`r listening on ${port}`);