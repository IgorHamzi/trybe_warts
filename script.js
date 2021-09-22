function checkLogin() {
  let email = document.querySelector('[name = email]');
  let password = document.querySelector('[name = password]');

  if (email.value === "tryber@teste.com" && password.value == 123456) {
    alert('Olá, Tryber!');
  } else {
    alert("Email ou senha inválidos.")
  }
}
