$('form').on("submit", (e) => {
    e.preventDefault()
    const username = $('#exampleInputUsername2').val()
    const password = $('#exampleInputPassword2').val()
    console.log(username, password)
})
try{
    const response = await fetch(`${BASE_URL}/user/login`,{
        method: "post",
        body: JSON.stringify(userinfo)
    });
    const
}