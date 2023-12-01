document.querySelectorAll('.js-prideti').forEach((button) => {
  button.addEventListener('click', () => {
    if (document.querySelector('.js-result').innerHTML >= 20000) {
      document.querySelector('.js-result').innerHTML = 20000
    }
  })
});