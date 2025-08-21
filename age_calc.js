document.getElementById('age-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission reload

  const birthdateInput = document.getElementById('birthdate').value;
  const result = document.getElementById('result');

  if (!birthdateInput) {
    result.textContent = 'Please enter your birthdate.';
    result.style.color = 'red';
    return;
  }

  const today = new Date();
  const birthdate = new Date(birthdateInput);

  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDiff = today.getMonth() - birthdate.getMonth();
  const dayDiff = today.getDate() - birthdate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  if (age < 0) {
    result.textContent = 'You entered a birthdate in the future!';
    result.style.color = 'red';
  } else {
    result.textContent = `Your age is ${age} years.`;
    result.style.color = 'green';
  }
});
