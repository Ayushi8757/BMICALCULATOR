const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.results');

    
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height: ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight: ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // result.innerHTML = `<span>${bmi}</span>`;

        if (bmi < 18.5) {
            result.innerHTML = `<span>Underweight: ${bmi}</span>`;
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result.innerHTML = `<span>Normal: ${bmi}</span>`;
        } else if (bmi >= 25 && bmi <= 29.9) {
            result.innerHTML = `<span>Overweight: ${bmi}</span>`;
        } else if (bmi >= 30 && bmi <= 34.9) {
            result.innerHTML = `<span>Obese: ${bmi}</span>`;
        } else {
            result.innerHTML = `<span>Extremely Obese: ${bmi}</span>`;
        }
    }
});






