
const express = require('express');
const axios = require('axios');
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(cors());

const apiKey = process.env.OPENAI_API_KEY;

app.get('/quote/:word', async (req, res) => {
  try {
    const { word } = req.params;

    const prompt = `Generate a inspirational or motivational quotes about "${word}"`;
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-003/completions',
      {
        prompt,
        max_tokens: 50, 
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const quote = response.data.choices[0].text.trim();
    console.log(quote)
    res.json({ quote });
  } catch (error) {
    console.error('Error generating quote:', error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
