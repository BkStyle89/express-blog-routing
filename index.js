const express = require('express');
const app = express();
const PORT = 3000;

// Serve static assets
app.use('/images', express.static('public/images'));

// Base route
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});



// Array of posts
const posts = [
  {
    id: 1,
    title: 'Post 1',
    content: 'Content of post 1',
    image: '/images/post1.jpg',
    tags: ['tag1', 'tag2']
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'Content of post 2',
    image: '/images/post2.jpg',
    tags: ['tag3', 'tag4']
  },
  {
    id: 3,
    title: 'Post 3',
    content: 'Content of post 3',
    image: '/images/post3.jpg',
    tags: ['tag5', 'tag6']
  },
  {
    id: 4,
    title: 'Post 4',
    content: 'Content of post 4',
    image: '/images/post4.jpg',
    tags: ['tag7', 'tag8']
  },
  {
    id: 5,
    title: 'Post 5',
    content: 'Content of post 5',
    image: '/images/post5.jpg',
    tags: ['tag9', 'tag10']
  }
];

// Route to return posts
app.get('/bacheca', (req, res) => {
  res.json(posts);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/posts", (req,res)=>{
  res.send("lista dei post");
});

app.get ("/posts/:id", (req,res)=>{
  res.send (`dettagli sui blog${req.params.id}`);
});

app.post ("/posts",(req,res)=>{
  res.send("creazione nuovo post");
});

app.put("/posts/:id",(req,res)=>{
  res.send(`modifica del post${req.params.id}`);
});

app.patch("/posts/:id",(req,res)=>{
  res.send(`modifica parziale del post ${req.params.id}`);
});

app.delete("/posts/:id",(req,res)=>{
res.send(`elimina un post${req.params.id}`);
});