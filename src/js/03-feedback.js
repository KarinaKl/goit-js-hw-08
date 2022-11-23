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

populateForm();

function onFormSumbit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(e) {
  const email = refs.mail.value;
  const notification = refs.textarea.value;
  formData = { email, notification };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const form = JSON.parse(savedMessage);
  if (savedMessage) {
    refs.textarea.value = form.message || '';
    refs.mail.value = form.email || '';
  }
}
