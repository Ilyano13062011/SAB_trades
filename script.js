function sendMessage() {
  const username = document.getElementById("username").value;
  const message = document.getElementById("messageInput").value;
  const image = document.getElementById("imageInput").value;
  const chatBox = document.getElementById("chatBox");

  if (!message && !image) return;

  let html = `<div class="message"><strong>${username}</strong>: ${message}`;

  if (image) {
    html += `<br><img src="${image}">`;
  }

  html += `</div>`;

  chatBox.innerHTML += html;
}
