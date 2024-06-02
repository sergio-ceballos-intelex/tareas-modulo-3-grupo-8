
// task 2

let name = prompt("type your first-name");
let age = parseInt(prompt("type your age"));
let average = parseInt(prompt("write your average qualifications"));
let isStable = prompt("are you register as a stable?('yes' or 'no')");
let quantityApproveSubject = parseInt(prompt("quantity of approve subjects"));
let scholarship = prompt("do you have scholarshipe?('yes' or 'no')")

if (age < 18){
    document.write("you are underage, you can not register")
}else if(age > 17 && average < 6){
    document.write("you don't accomplish with minimum required average")
}else if (age > 17 && average >= 6 && isStable === "no"){
    document.write("You should be register as a 'stable'")
}else if (age > 17 && average >= 6 && isStable === "yes" && scholarship === "no"){
    document.write("you can request a scholarship")
}else if (age > 17 && average >= 6 && isStable === "yes" && scholarship === "yes"){
    document.write("you accomplish with all requirements")
}else {
    document.write("<br>error: write your information again")
}