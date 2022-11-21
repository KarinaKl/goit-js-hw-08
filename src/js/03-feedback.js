import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  mail: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSumbit);
refs.form.addEventListener('input', throttle(onInput, 500));

const STORAGE_KEY = 'formData';
let formData = {};

populateTextarea();
populateMail();

function onFormSumbit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  const savedMessage = localStorage.getItem('formData');
  const message = JSON.parse(savedMessage);
  if (savedMessage) {
    refs.textarea.value = message.message;
  }
}

function populateMail() {
  const savedMail = localStorage.getItem('formData');
  const mail = JSON.parse(savedMail);
  if (savedMail) {
    refs.mail.value = mail.email;
  }
}
