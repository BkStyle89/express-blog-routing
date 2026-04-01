const express = require ('express')
const router = express.Router();


router.get("/", (req,res)=>{
  res.send("lista dei post");
});

router.get ("/:id", (req,res)=>{
  res.send (`dettagli sui blog${req.params.id}`);
});

router.post ("/",(req,res)=>{
  res.send("creazione nuovo post");
});

router.put("/:id",(req,res)=>{
  res.send(`modifica del post${req.params.id}`);
});

router.patch("/:id",(req,res)=>{
  res.send(`modifica parziale del post ${req.params.id}`);
});

router.delete("/:id",(req,res)=>{
res.send(`elimina un post${req.params.id}`);
});


module.exports =router;