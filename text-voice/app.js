let text = document.getElementById('text');
let speakBtn = document.getElementById('speakBtn');

speakBtn.addEventListener("click", () => {
    

// Create a SpeechSynthesisUtterance Object
  const utterance = new SpeechSynthesisUtterance(text.value);

  // Select a voice
    const voices = speechSynthesis.getVoices();

  // Speak the text
  speechSynthesis.speak(utterance);
})
