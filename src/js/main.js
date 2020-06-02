const firstName = "Tomasz";
const age = 33;

console.log(firstName);
console.log(age);
console.log(`Mam na imię ${firstName} i mam ${age} lata.`);

const article = document.querySelector(".notes__article--js");
console.log(article.innerHTML);

article.innerHTML = "<p>LEGIA MISTRZ</p>";
console.log(article.innerHTML);

function calculate(myNumber) {
  myNumber = myNumber + 3;
  console.log(myNumber);
  return myNumber * 7;
}

const myResult = calculate(2);
console.log(`Oto jest wynik funkcji calculate: ${myResult}`);

const calculate2 = (myNumber2) => {
  myNumber2 = myNumber2 + 3;
  console.log(myNumber2);
  return myNumber2 * 7;
};
const myResult2 = calculate2(3);
console.log(myResult2);

const calculate3 = (myNumber3) => (myNumber3 + 3) * 7;
const myResult3 = calculate3(4);
console.log(myResult3);

function hello(firstName, age) {
  console.log(
    `To jest drugie powitanie. Tym razem za pomocą function. Mam na imię ${firstName} i mam ${age} lata.`
  );
}

hello(firstName, age);

/*
function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent('.notes__title--js', 'Notatka zmieniona przez function JS');
createContent('.notes__article-text--js', 'Teskt wprowadzony również przez function JS') 

*/

const menu = document.querySelector('.menu--js');

menu.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open')
})