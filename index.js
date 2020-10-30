const express = require('express');
const path = require('path');


const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

const news = {
  "status": "ok",
  "totalResults": 10,
  "articles": [
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Connie Loizos",
      "title": "AOL founder Steve Case, involved early in Section 230, says it's time to change it",
      "description": "AOL founder Steve Case was there in Dulles, Virginia, just outside of Washington, D.C., when in 1996 the Communications Decency Act was passed as part of a major overhaul of U.S. telecommunications laws that President Bill Clinton signed into law. Soon after,…",
      "url": "https://techcrunch.com/2020/10/29/aol-founder-steve-case-involved-early-in-section-230-says-its-time-to-change-it/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2017/05/tcdisrupt-ny17-8636.jpg?w=600",
      "publishedAt": "2020-10-30T06:12:06Z",
      "content": "AOL founder Steve Case was there in Dulles, Virginia, just outside of Washington, D.C., when in 1996 the Communications Decency Act was passed as part of a major overhaul of U.S. telecommunications l… [+3963 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Kirsten Korosec",
      "title": "Amazon pegs COVID-19 costs at an estimated $4 billion next quarter",
      "description": "Amazon expects to incur $4 billion in COVID-related costs next quarter, an estimate that provides a bellwether for other businesses, large and small, trying to stay operational and control expenses amid the pandemic. The upshot: Amazon is planning for COVID t…",
      "url": "https://techcrunch.com/2020/10/29/amazon-pegs-covid-19-costs-at-an-estimated-4-billion-next-quarter/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-1218046893.jpg?w=601",
      "publishedAt": "2020-10-30T02:16:50Z",
      "content": "Amazon expects to incur $4 billion in COVID-related costs next quarter, an estimate that provides a bellwether for other businesses, large and small, trying to stay operational and control expenses a… [+2398 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Manish Singh",
      "title": "WhatsApp is now delivering roughly 100 billion messages a day",
      "description": "WhatsApp, the popular instant messaging app owned by Facebook, is now delivering roughly 100 billion messages a day, company’s chief executive Mark Zuckerberg said at the company’s quarterly earnings call Thursday. For some perspective, users exchanged 100 bi…",
      "url": "https://techcrunch.com/2020/10/29/whatsapp-is-now-delivering-roughly-100-billion-messages-a-day/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/12/facebook-whatsapp-coins.png?w=711",
      "publishedAt": "2020-10-30T00:21:38Z",
      "content": "WhatsApp, the popular instant messaging app owned by Facebook, is now delivering roughly 100 billion messages a day, companys chief executive Mark Zuckerberg said at the companys quarterly earnings c… [+1519 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Jonathan Shieber",
      "title": "PORTL Hologram raises $3M to put a hologram machine in every home",
      "description": "What does a hologram-obsessed entrepreneur do for a second act after setting up a virtual Ronald Reagan in the Reagan Memorial Library, or beaming Jimmy Kimmel all the way from Hollywood to the Country Music Awards in Nashville? If that entrepreneur is David …",
      "url": "https://techcrunch.com/2020/10/29/portl-hologram-raises-3m-to-put-a-hologram-machine-in-every-home/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/10/image2.jpeg?w=711",
      "publishedAt": "2020-10-30T00:06:42Z",
      "content": "What does a hologram-obsessed entrepreneur do for a second act after setting up a virtual Ronald Reagan in the Reagan Memorial Library, or beaming Jimmy Kimmel all the way from Hollywood to the Count… [+3217 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Darrell Etherington",
      "title": "Tesla has increased the price of its \"Full Self-Driving\" option to $10,000",
      "description": "Tesla has made good on founder and CEO Elon Musk’s promise to boost the price of its “Full Self-Driving” (FSD) software upgrade option, increasing it to $10,000 following the start of the staged rollout of a beta version of the software update last week. This…",
      "url": "https://techcrunch.com/2020/10/29/tesla-has-increased-the-price-of-its-full-self-driving-option-to-10000/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/09/GettyImages-609781368.jpg?w=600",
      "publishedAt": "2020-10-29T23:24:02Z",
      "content": "Tesla has made good on founder and CEO Elon Musk’s promise to boost the price of its “Full Self-Driving” (FSD) software upgrade option, increasing it to $10,000 following the start of the staged roll… [+1890 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Kirsten Korosec",
      "title": "Polestar recalls its newest EV for the second time this month",
      "description": "Polestar, the electric vehicle brand that was spun out of Volvo Car Group, has issued another recall for its newest electric vehicle. The company is voluntarily recalling nearly 4,600 vehicles over what has been described as a faulty inverters, Reuters report…",
      "url": "https://techcrunch.com/2020/10/29/polestar-recalls-its-newest-ev-for-the-second-time-this-month/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/03/Screen-Shot-2020-03-24-at-11.46.15-AM.jpg?w=658",
      "publishedAt": "2020-10-29T22:40:32Z",
      "content": "Polestar, the electric vehicle brand that was spun out of Volvo Car Group, has issued another recall for its newest electric vehicle.\r\nThe company is voluntarily recalling nearly 4,600 vehicles over … [+2119 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Brian Heater",
      "title": "Corsair acquires EpocCam, a webcam app for iPhone",
      "description": "Corsair Gaming today announced that it has acquired EpocCam, the software developer behind the iOS software of the same name. It’s easy to see why the gaming company would be interested in such an acquisition in 2020. The COVID-19 pandemic has lead to a world…",
      "url": "https://techcrunch.com/2020/10/29/corsair-acquires-epoccam-a-webcam-app-for-iphone/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/10/epoccam.jpg?w=764",
      "publishedAt": "2020-10-29T22:18:41Z",
      "content": "Corsair Gaming today announced that it has acquired EpocCam, the software developer behind the iOS software of the same name. Its easy to see why the gaming company would be interested in such an acq… [+1263 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Anthony Ha",
      "title": "Daily Crunch: Google had a good quarter",
      "description": "Google releases its latest earnings report, Spotify is getting ready to raise prices and Excel gets friendlier to custom data types. This is your Daily Crunch for October 29, 2020. The big story: Google had a good quarter Google’s parent company Alphabet rele…",
      "url": "https://techcrunch.com/2020/10/29/daily-crunch-google-earnings/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/01/GettyImages-1192414131.jpg?w=601",
      "publishedAt": "2020-10-29T22:10:41Z",
      "content": "Google releases its latest earnings report, Spotify is getting ready to raise prices and Excel gets friendlier to custom data types. This is your Daily Crunch for October 29, 2020.\r\nThe big story: Go… [+3177 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Manish Singh",
      "title": "PUBG Mobile to terminate access for users in India on October 30 following ban order",
      "description": "PUBG Mobile, the sleeper hit mobile game, will terminate all service and access for users in India on October 30, two months after New Delhi banned the game in the world’s second largest internet market over cybersecurity concerns. India banned PUBG Mobile No…",
      "url": "https://techcrunch.com/2020/10/29/pubg-mobile-to-terminate-access-for-users-in-india-on-october-30-following-ban-order/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/10/GettyImages-1228305250.jpg?w=601",
      "publishedAt": "2020-10-29T21:29:20Z",
      "content": "PUBG Mobile, the sleeper hit mobile game, will terminate all service and access for users in India on October 30, two months after New Delhi banned the game in the worlds second largest internet mark… [+2379 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Lucas Matney",
      "title": "Apple One services subscription bundles start launching tomorrow",
      "description": "Apple is launching its Apple One services bundle tomorrow, though the company’s workout service Fitness+ isn’t quite ready yet. On an earnings call, CEO Tim Cook revealed tomorrow’s rollout and called the service the “easiest way for users to enjoy Apple serv…",
      "url": "https://techcrunch.com/2020/10/29/apple-one-services-subscription-bundles-start-launching-tomorrow/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/09/apple-one-2.jpg?w=711",
      "publishedAt": "2020-10-29T21:28:34Z",
      "content": "Apple is launching its Apple One services bundle tomorrow, though the company’s workout service Fitness+ isn’t quite ready yet.\r\nOn an earnings call, CEO Tim Cook revealed tomorrow’s rollout and call… [+1074 chars]"
    }
  ]
};

app.get('/api2',(req,res)=>{

  res.send(news);

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