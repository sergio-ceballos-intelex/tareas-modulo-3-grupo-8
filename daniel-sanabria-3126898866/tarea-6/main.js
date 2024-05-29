const input = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let pressButton = btn.textContent;

        if (btn.id === "C") {
            input.value = "0";
            return;
        }

        if (btn.id === "D") {
            if (input.value.length === 1) {
                input.value = "0"
            } else {
                input.value = input.value.slice(0, -1);
            }
            return;
        }

        if(btn.id === "="){
            input.value = eval(input.value);
            return;
        }

        if (input.value === "0") {
            input.value = pressButton;
        } else {
            input.value += pressButton;
        }
    });
});

// task 2

let name = prompt("type your first-name");
let age = parseInt(prompt("type your age"));
let average = parseInt(prompt("write your average qualifications"));
let isStable = prompt("are you register as a stable?('yes' or 'no')");
let quantityApproveSubject = parseInt(prompt("quantity of approve subjects"));
let scholarship = prompt("do you have scholarshipe?('yes' or 'no')")



