/*
for loopar - utmärkta när man vet hur många gånger iterationen ska genomföras

while loop - upprepar tills det att något villkor är uppfyllt (dvs. obestämt antal gånger)
*/

let counter = 0;
let randomValue = 0;

while (counter < 20) {
  console.log(counter);

  randomValue = (Math.random() * 4); // Math.random ger ett tal mellan 0 upp till 1 (exkluderad 1:a)
  randomValue = Math.ceil(randomValue);
  counter = counter + randomValue;
}