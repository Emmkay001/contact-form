const form = document.getElementById('contact-form');
const success = document.getElementById('successful');
const submit = document.querySelector('.submit-form');
const alerts = document.querySelectorAll('.form-alert');

function alertDisplayBlock(i) {
  alerts[i].style.display = 'block';
}

function alertDisplayNone(i) {
  alerts[i].style.display = 'none';
}

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const query = document.querySelector('input[name="query-type"]:checked');
  const message = document.getElementById('message').value.trim();
  const consent = document.getElementById('consent').checked;

 

  if (firstName === "") {
    alertDisplayBlock(0);
  } else {
    alertDisplayNone(0);
  }

  if (lastName === "") {
    alertDisplayBlock(1);
  } else {
    alertDisplayNone(1);
  }

  if (email === "") {
    alertDisplayBlock(2);
  } else {
    alertDisplayNone(2);
  }

  if (!query) {
    alertDisplayBlock(3);
  } else {
    alertDisplayNone(3);
  }

  if (message === "") {
    alertDisplayBlock(4);
  } else {
    alertDisplayNone(4);
  }

  if (!consent) {
    alertDisplayBlock(5);
  } else {
    alertDisplayNone(5);
  }
});

