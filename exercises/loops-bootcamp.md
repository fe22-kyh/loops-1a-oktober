# Loops

## for loops

1. Skapa en for loop som skriver ut alla tal från 1-19 i konsolen
2. Skapa en for loop som skriver ut varje jämna tal från 1-19 [2, 4, 6, ... , 18]
3. Skapa en for loop som skriver ut varje tal jämnt delbart på 4 mellan 1-19 [4, 8, 12, 16]
4. Gör för övning 1-3 så att loopen går från 5 till 19.
   1. Ex. i övning 3 blir det då [8, 12, 16]
5. Skapa tre for loopar som skriver ut övning 1-3 baklänges


## while loops

1. Skapa en while loop som skriver ut alla heltal upp till värdet 10
2. Skapa en while loop som skriver ut alla ojämna tal upp till värdet 10 [1, 3, 5, 7, 9]
3. Skapa en while loop som slår en tärning (använd Math.random(), exempel nedanför) tills att tärning slår högre än 5, skriv ut varje iteration.
   1. Ex.
   Tärningen slog 2..
   Tärningen slog 3.. 
   Tärningen slog 1..
   Tärningen slog 5!

En tärning går att skapa genom en enkel slumpfunktion
```js
let diceValue = (Math.random() * 6) + 1;   // Värdet av Math.random är från 0 till 0.99999... (1 exkluderat)

//Då värdet är ett decimaltal så kan vi ta bort decimalerna med Math.floor
diceValue = Math.floor(diceValue);
```

## Nested loops

Nästalade loopar inebär att du har en faktor som återupprepas med samma mönster för flera dimensioner, exempelvis en multiplikationstabell. Exempelvis, en beskrivning för att plotta multiplikationstabellerna 2 till 5 med multiplikationen 1 till 10 kan skrivas med följande algoritm.

for every number between 2 to 5
  plot number + "'s multiplication tabel"

  for every multi between 1 to 10
    plot multi * number

1. Översätt algoritmen till javascriptkod
2. Gör så att programmet skriver ut resultatet operationen plus resultatet med följande format
    2 * 1 = 2
    2 * 2 = 4
    2 * 3 = 6
    ...
    5 * 9 = 45
    5 * 10 = 50

3. Gör så att programmet skriver ut varje multiplikation för 1-15.