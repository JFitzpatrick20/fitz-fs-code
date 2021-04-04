const BASE_URL = `https://strangers-things.herokuapp.com/api/2101-lsu-rm-web-pt`;

$("form").on("submit", async (e) => {
  e.preventDefault();
  const usernameInput = $("#usernameInput").val();
  const passwordInput = $("#passwordInput").val();

  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
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
    localStorage.setItem("Authorization", JSON.stringify(token));
    window.location.replace("./index.html");
  } catch (error) {
    $("body").append(
      `<h2 class="error">Try another username that one is taken.</h2>`
    );
    console.error(error);
  }
});
