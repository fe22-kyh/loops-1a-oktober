let base = 100;

let a = 101;
let b = 101;

// Alternativ 1
//let aDiff = Math.abs(a - base); // 40 - 100 = -60
//let bDiff = Math.abs(b - base); // 101 - 100 = 1

// Alternativ 2
/*let aDiff = a - base;
let bDiff = b - base;

if (aDiff < 0) {
  aDiff = aDiff * -1 // -10 * -1 = 10
}

if (bDiff < 0) {
  bDiff = bDiff * -1;
}*/

// Alternativ 2.1
let aDiff = a - base;
let bDiff = b - base;

aDiff = aDiff < 0 ? aDiff * -1 : aDiff;
bDiff = bDiff < 0 ? bDiff * -1 : bDiff;


// Alternativ 3
/*let aDiff, bDiff;

if (a > base) {
  aDiff = a - base; // 113 - 100 = 13
} else {
  aDiff = base - a; // 100 - 93 = 7
}

if (b > base) {
  bDiff = b - base;
} else {
  bDiff = base - b;
}*/

// Alternativ 3.1 (ternary operator ("ref = cond ? ifTrue : ifFalse))
//let aDiff = a > base ? a - base : base - a;
//let bDiff = b > base ? b - base : base - b;


console.log("A diff: " + aDiff);
console.log("B diff: " + bDiff);


// Alternativ A
/*if (aDiff < bDiff) {
  console.log("a is closest to " + base);
} else if (aDiff > bDiff) {
  console.log("b is closest to " + base);
} else {
  console.log("a and b is equally close to " + base);
}*/

// Alternativ B
aDiff < bDiff ? console.log("a is closest")
  : aDiff > bDiff ? console.log("b is closest")
    : console.log("a and b is equally close");