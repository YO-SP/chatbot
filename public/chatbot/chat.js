const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage("🧑 Kamu", message);
  userInput.value = "";

  appendMessage("🤖 MentalCare AI", "...");
  const placeholder = chatBox.lastElementChild;

  try {
    const res = await fetch("/api/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: message }),
    });
    const data = await res.json();
    placeholder.textContent = `🤖 MentalCare AI: ${data.output}`;
  } catch (err) {
    placeholder.textContent = "🤖 MentalCare AI: Maaf, terjadi kesalahan.";
    console.error(err);
  }
});

function appendMessage(sender, text) {
  const msg = document.createElement("p");
  msg.textContent = `${sender}: ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
