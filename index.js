const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/devops', { useNewUrlParser: true, useUnifiedTopology: true });

const Dev = mongoose.model('Dev', { name: String });

app.get('/', async (req, res) => {
  const devs = await Dev.find();
  const names = devs.map(d => `<li>${d.name}</li>`).join('');
  res.send(`<h1>I’m building pipelines like a pro!</h1><ul>${names}</ul>`);
});

console.log("Initializing app...");
app.listen(3000, '0.0.0.0', () => console.log('App successfully running on port 3000'));
console.log("Server setup completed.");
