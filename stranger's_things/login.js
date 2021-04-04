const BASE_URL = `https://strangers-things.herokuapp.com/api/2101-lsu-rm-web-pt`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVhOTc2NjY2ODEzYzAwMTdmNTc0MmEiLCJ1c2VybmFtZSI6ImFiYzEyM2NiYSIsImlhdCI6MTYxNjU0OTczNH0.MqPMeMuoG1jp9qVE5QJlHLwxovDxseSXiFPhWs7KQQw`;

$("form").on("submit", async (e) => {
  e.preventDefault();
  const usernameInput = $("#usernameInput").val();
  const passwordInput = $("#passwordInput").val();
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${usernameInput}`,
          password: `${passwordInput}`,
        },
      }),
    });

    const data = await response.json();
    const token = data.data.token;
    localStorage.setItem("username", usernameInput);
    localStorage.setItem("Authorization", token);
    window.location.replace("./index.html");
  } catch (error) {
    $("body").append(
      `<h2 class="error">Try another username and Password</h2>`
    );
    console.error(error);
  }
});

$(".register").click(function () {
  window.location.replace("./register.html");
});
