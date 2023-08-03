const generateBtn = document.getElementById("generateBtn")
generateBtn.addEventListener('click', async () => {
const wordInput = document.getElementById('wordInput');
const word = wordInput.value.trim();
if (word !== '') {
try {
  const response = await fetch(`https://quotegenerator-twqo.onrender.com/quote/${word}`);
  const data = await response.json();
  const quoteContainer = document.getElementById('quoteContainer');
  quoteContainer.innerHTML = `<blockquote>${data.quote}</blockquote>`;
} catch (error) {
  console.error('Error fetching quote:', error);
}
}else{
alert("Please Enter The Word!")
}
});
