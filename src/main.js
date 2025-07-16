const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = `p-2 rounded text-sm whitespace-pre-wrap ${
    sender === "user"
      ? "bg-blue-100 text-right"
      : "bg-gray-200 text-left"
  }`;
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const message = input.value.trim();
  if (!message) return;

  appendMessage("user", message);
  input.value = "";
  appendMessage("bot", "Typing...");

  try {
    const response = await fetch("/api/chat.js", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const text = await response.text();
    let data;

    try {
      data = JSON.parse(text);
    } catch (e) {
      chatBox.lastChild.remove(); // remove "Typing..."
      appendMessage("bot", "❌ Could not parse server response:");
      appendMessage("bot", text);
      return;
    }

    chatBox.lastChild.remove(); // remove "Typing..."
    appendMessage("bot", data.reply || "❌ No reply received.");
  } catch (err) {
    chatBox.lastChild.remove(); // remove "Typing..."
    appendMessage("bot", "❌ Network or server error:");
    appendMessage("bot", err.message);
  }
});
