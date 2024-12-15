import express from 'express';
import open from 'open';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send(`
    <h1>¡Hello world, this is a JavaScript program :D!</h1>
    <h1>CD Deployment of DevOps Actions 🚀</h1>
    <p>111This is a Node.js program that demonstrates how to automate a continuous integration and deployment with docker</p>
    <h1>Hola Mundo desde $(hostname -f)</h1>

  `);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
