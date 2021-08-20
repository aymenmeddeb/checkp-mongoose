var express = require('express');
var router = express.Router();
const Person=require('../Model/person');

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('index', { title: 'Express' });
});
// Créez une personne avec ce prototype
router.post('/insert',(req,res,next)=>{
 
  const person = new Person ({
    Name:req.body.name,
    Age:req.body.age,
    favoriteFoods:req.body.food
    });
// Créer et enregistrer un enregistrement d'un modèle  
person.save((error,resultat)=>{
  if(error)
  {console.log(error)
    res.redirect('/')
  return;}
  console.log(resultat)
  res.redirect('/')
})

// Créer plusieurs enregistrements avec model.create()
Person.create([{Name:'ahmed',Age:'33',favoriteFoods:'sandwitch'},{Name:'amir',Age:'43',favoriteFoods:'panini'},{Name:'yasser',Age:'13',favoriteFoods:'pizza'}],(err,data)=>{

 if(err){console.log(error)}
 {console.log(data)} 
});
})
// Use model.find() to Search Your Database
router.get('/data',(req,res,next)=>{

  Person.find({},(err,data)=>{
    if(err){console.log(error)
    res.redirect('/')}
    {res.send(data)}
  })
})
module.exports = router;
