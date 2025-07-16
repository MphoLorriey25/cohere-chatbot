const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

function appendMessage(sender, text) {
  const message = document.createElement("div");
  message.className = `p-2 rounded ${sender === "user" ? "bg-blue-100 text-right" : "bg-gray-200 text-left"}`;
  message.innerText = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userInput = input.value.trim();
  if (!userInput) return;

  appendMessage("user", userInput);
  input.value = "";

  appendMessage("bot", "Typing...");

  try {
    const res = await fetch("/api/chat.js", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userInput }),
    });

    const data = await res.json();
    chatBox.lastChild.remove(); // remove "Typing..."
    appendMessage("bot", data.reply || "Sorry, I didn't get that.");
  } catch (err) {
    chatBox.lastChild.remove();
    appendMessage("bot", "Error: Unable to contact the server.");
    console.error(err);
  }
});
