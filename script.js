const form = document.getElementById("loginForm");
const message = document.getElementById("message");

// Checks the email has an @ and the password is long enough
function validateInput(email, password) {
  if (email === "" || password === "") {
    return "Please fill in both fields.";
  }
  if (!email.includes("@")) {
    return "Email must contain an @ symbol.";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters.";
  }
  return "";
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const error = validateInput(email, password);
  if (error !== "") {
    message.textContent = error;
    message.className = "message error";
    return;
  }

  // Front-end checks passed, now send it to the server for a second check
  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    message.textContent = result.message;
    message.className = response.ok ? "message success" : "message error";
  } catch (err) {
    message.textContent = "Could not reach the server.";
    message.className = "message error";
  }
});
