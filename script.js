const chatBox = document.getElementById("chatBox");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
  const input = document.getElementById("userInput");
  const provider = document.getElementById("provider").value;
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  addMessage("Sedang mengetik...", "bot");

  const response = await callAI(text, provider);

  chatBox.lastChild.remove();
  addMessage(response, "bot");
}

async function callAI(message, provider) {

  // ====== CONTOH MOCK RESPONSE ======
  // Ganti dengan API asli di bawah
  return `[${provider.toUpperCase()}] Jawaban untuk: "${message}"`;

}
