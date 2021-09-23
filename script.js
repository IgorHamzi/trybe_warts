function checkLogin() {
  const email = document.querySelector('[name = email]');
  const password = document.querySelector('[name = password]');

  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const button = document.querySelector('.button');
button.addEventListener('click', checkLogin);

function enviar() {
  const submit = document.querySelector('#submit-btn');
  submit.removeAttribute('disabled');
}

const agreement = document.querySelector('#agreement');
agreement.addEventListener('click', enviar);
