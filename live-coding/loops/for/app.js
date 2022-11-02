
// i++ ---> i = i + 1 ---> i += 1


for (let i = 1; i < 20; i = i + 2) {
  //console.log(1 + ": hey batman");
}

// Gör så att den börjar på 20 och skriver ut:
//    20, 23, 26, 29, 32, 35, 38

for (let i = 20; i <= 38; i = i + 3) {
  //console.log(i); 
}

//Måste behålla for-syntax, men skapa samma utskrift som ovan!
//  22, 26, 30, 34, 38
for (let i = 0; i < 40; i++) {
  //console.log(i + ": " + (i % 3));

  let value = (i * 3) + 20;
  if (value < 40) {
    console.log(value);
  }

  /*if ((i >= 20) && (i % 4 == 1)) {
    console.log(i);
  }*/
}
