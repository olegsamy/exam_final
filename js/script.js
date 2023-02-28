// проверка ввода пороля

const inputEl = document.querySelector('#password1');
const inputE2 = document.querySelector('#password2');

inputE2.addEventListener('input', function (e) {
    if (inputE2.value === inputEl.value) {
        inputE2.style.border = '1px solid green';
    } else {
        inputE2.style.border = '1px solid red';
    }
    e.preventDefault();
});

// рейтинг

let radioBtns = document.querySelectorAll("input[name='rating']");
let result = document.getElementById("result");
console.log(result);

let findSelected = () => {
    let selected = document.querySelector("input[name='rating']:checked").value;
    console.log(selected);
    result.textContent = `Value of selected: ${selected}`;
}

radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener('change', findSelected);
});
findSelected();







