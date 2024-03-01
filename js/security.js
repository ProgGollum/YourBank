// Questions
const btnShow = document.querySelector('#button-show');

const hiddenContent = document.querySelector('#hidden-questions');
const darkerContent = document.querySelector('#darker-questions');

btnShow.addEventListener('click', function() {
  darkerContent.classList.remove('question__list-item--down');
  btnShow.classList.add('hidden');
  hiddenContent.classList.remove('hidden');
});