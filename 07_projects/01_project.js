const Buttons = document.querySelectorAll('.button');
const Body = document.querySelector('body');

Buttons.forEach(function (button) {
  button.addEventListener('click', (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case 'grey':
        Body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        Body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        Body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        Body.style.backgroundColor = e.target.id;
        break;
    }
  });
});
