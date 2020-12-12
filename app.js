const form = document.querySelector('#signupForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const inputs = [firstName, lastName, email, password];

function errors() {
  for(let input of inputs) {
    if(input.value === '') {
      input.classList.add('error');
    }
  }
  for(let input of inputs) {
    if(input.classList.contains('error')) {
      return true;
    }
  }
  return false;
}



function submit(e) {
  e.preventDefault();
  errors();
  console.log(errors());
  if(errors() === true) {
    for(let input of inputs) {
      input.addEventListener('keydown', () => {
        input.classList.remove('error');
      })
    }
  } else if(errors() === false) {
    for(let input of inputs) {
      input.value = '';
    }
  }
  
}

form.addEventListener('submit', submit);

