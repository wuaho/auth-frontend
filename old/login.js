const signInform = document.getElementById("sign-in-form");

signInform.addEventListener("submit", onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  const email = data.get("email");
  const password = data.get("password");
  console.log(`email: ${email}, password: ${password}`);

  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("access_token", data.access_token);
      window.location.href = "profile.html";
      // aqui deberia de guardar el token y redirigir al usuario
    } else {
      alert(data.message || "Error doing the login");
    }
  } catch (error) {
    alert("Server or network error");
  }
}
