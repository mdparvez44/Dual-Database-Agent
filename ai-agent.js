// ai-agent.js

const { OpenAI } = require('openai');
const dotenv = require('dotenv');
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function askAgent(question) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant that answers database-related queries based on MongoDB and MySQL datasets. Always respond in a clean format.`,
        },
        {
          role: 'user',
          content: question,
        },
      ],
      temperature: 0.3,
    });

    const answer = response.choices[0].message.content.trim();
    console.log("🤖 Agent response:\n", answer);
    return answer;
  } catch (error) {
    console.error('❌ Error querying OpenAI:', error.message);
  }
}

module.exports = { askAgent };
