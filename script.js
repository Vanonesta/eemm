function showQuestion() {
  document.getElementById('question').classList.remove('hidden');
}

function showMessage(answer) {
  const message = document.getElementById('message');
  const response = document.getElementById('response');

  if (answer === 'yes') {
    response.textContent = 'Yay! Aku sangat senang! 💖';
  } else {
    response.textContent = 'Tidak apa-apa, aku tetap menghargai kamu 😊';
  }

  message.classList.remove('hidden');
}
