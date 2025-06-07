document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    window.location.href = "index.html";
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Unauthorized");
    }

    const user = await response.json();

    document.getElementById("profile-welcome").textContent =
      `Welcome, ${user.username} !` || "";
    document.getElementById("profile-username-detail").textContent =
      user.username || "";
    document.getElementById("profile-email").textContent = user.email || "";
    document.getElementById("profile-id").textContent = user.id || "";

    document.getElementById("logout-btn").addEventListener("click", () => {
      localStorage.removeItem("user");
      window.location.href = "index.html";
    });
  } catch (error) {
    alert(error);
    localStorage.removeItem("access_token");
    window.location.href = "index.html";
  }

  document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.removeItem("access_token");
    window.location.href = "index.html";
  });
});
