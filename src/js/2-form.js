const form = document.querySelector('form');
const formData = { email: '', message: '' };

const localStorageKey = 'feedback-form-state';
const localStorageData = JSON.parse(localStorage.getItem(localStorageKey));

if (localStorageData) {
  form.elements.email.value = localStorageData.email;
  form.elements.message.value = localStorageData.message;
  formData.email = localStorageData.email;
  formData.message = localStorageData.message;
}

form.addEventListener('input', event => {
  switch (event.target.nodeName) {
    case 'INPUT':
      formData.email = event.target.value;
      localStorage.setItem(localStorageKey, JSON.stringify(formData));
      break;

    case 'TEXTAREA':
      formData.message = event.target.value;
      localStorage.setItem(localStorageKey, JSON.stringify(formData));
      break;

    default:
      break;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (form.elements.message.value && form.elements.email.value) {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
    formData.email = '';
    formData.message = '';
  } else {
    alert('Fill please all fields');
  }
});
