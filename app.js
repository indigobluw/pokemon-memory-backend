// app.js
const cors = require("cors")
const express = require("express")

const app = express()
const PORT = process.env.PORT || 3001

app.use('/healthcheck', require('./routes/healthcheck.routes'));
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get("/", (req ,res)=>{
  headers={"http_status":200, "cache-control": "no-cache"}
  body={"status": "available"}
  res.status(200).send(body)
})

app.get("/game", (req, res)=>{
  headers = { http_status: 200, "cache-control": "no-cache" };
  body = [
    {
      imgSrc: "sti-backend/image/chikorita.png",
      name: "chikorita"
  },
  { 
      imgSrc: "sti-backend/image/dragonite.png",
      name: "dragonite"
  },
  {
      imgSrc:"sti-backend/image/eevee.png",
      name: "eevee"
  },
  {
      imgSrc:"sti-backend/image/groudon.png",
      name: "groudon"
  },
  {
      imgSrc:"sti-backend/image/gyrados.png",
      name: "gyrados"
  },
  {
      imgSrc:"sti-backend/image/lugia.png",
      name: "lugia"
  },
  {
      imgSrc:"sti-backend/image/metagross.png",
      name: "metagross"
  },
  {
      imgSrc:"sti-backend/image/milotic.png",
      name: "milotic"
  }  
  ];

  res.set("Content-Type", "application/json");
  res.status(200).send(body);
});

app.listen(PORT , ()=>{
  console.log('STARTED LISTENING ON PORT ${PORT}')
});