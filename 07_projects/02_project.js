const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    // results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      results.innerHTML = `<span> <u> ${bmi} </u>.Your BMI Weight is Less than 18.6, so You are Under Weight.</span>`;
    } else if (bmi > 24.9) {
      results.innerHTML = `<span> <u> ${bmi} </u>.Your BMI Weight is more than 24.9, so You are over Weight.</span>`;
    } else {
      results.innerHTML = `<span> <u> ${bmi} </u>.Your BMI Weight is in normal range ( 18.6-24.9 ), So Your are Feet.</span>`;
    }
    // switch (bmi) {
    //   case bmi < 18.6:
    //     results.innerHTML = `<span>Your BMI Weight is Less than <u> ${bmi} </u>, so You are Under Weight. </span>`;
    //     break;
    // }
  }
});
