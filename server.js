const express = require('express');
const app = express();
const agent = require('./ai-agent');
const path = require('path');
require('./db');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.post('/ask', async (req, res) => {
  const { question } = req.body;
  const result = await agent.processQuestion(question);
  res.json(result);
});

app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));
