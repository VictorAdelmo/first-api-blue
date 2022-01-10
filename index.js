const express = require('express');
const app = express();

app.use(express.json())
const characters = 
[
  { 
    id: 1,
    name: "Zenitsu",
    spacie: "Human",
    power: "Enhanced Hearing"
},
{
  id: 2,
  name: "Tanjiro",
  spacie: "Human",
  power: "Enhanced Strength"
},
{ 
  id: 3,
  name: "inosuke",
  spacie: "Human but maybe a boar",
  power: "Enhanced Strength"
},
];

//GET - READ
app.get('/', (req, res) => {
  res.send(characters.filter(Boolean));
});

 // POST - CREATE
 app.post("/create", (req, res) => {
  const character = req.body

  if(character != null){
  character.id = characters.length + 1;
  characters.push (character);
  res.send({message: "Personagem criado com sucesso!"});
  
} else {
    res.status(404).send({message: "Erro!"});
  }
 }),

app.put("/create/:id", (req,res) =>{
    const id = +req.params.id;
    const character = characters.find((c) => c.id === id);

    if(character != null){
        const newCharacter = req.body;
        
        character.name = newCharacter.name;
        character.spacie = newCharacter.spacie;
        character.power = newCharacter.power;

        res.send(character);
    }else{
      res.status(404).send({message: "Erro!"});

    }


})

 app.delete("/create/:id", (req,res) =>{
      const id = +req.params.id;
      const character = characters.find((c) => c.id === id);

      if(character != null){
          const index = characters.indexOf(character);
          delete characters[index];
        
          res.send({message: "Deletado"});
        }else{
          res.send({message:"Não Encontrado"});
      }
 })

app.listen(3000, () => {
 console.log("Servidor rodando em http://localhost:3000");
});
