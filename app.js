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
      imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png",
      name: "chikorita"
  },
  { 
      imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
      name: "dragonite"
  },
  {
      imgSrc:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
      name: "eevee"
  },
  {
      imgSrc:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/383.png",
      name: "groudon"
  },
  {
      imgSrc:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
      name: "gyrados"
  },
  {
      imgSrc:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png",
      name: "lugia"
  },
  {
      imgSrc:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/376.png",
      name: "metagross"
  },
  {
      imgSrc:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/350.png",
      name: "milotic"
  }  
  ];

  res.set("Content-Type", "application/json");
  res.status(200).send(body);
});

app.listen(PORT , ()=>{
  console.log('STARTED LISTENING ON PORT ${PORT}')
});