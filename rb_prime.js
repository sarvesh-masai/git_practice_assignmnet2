  let n = 11;
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      count++;
    }
  }
  if (count > 2) {                          //error //fixed by Rohit
    console.log('it is not a prime number');
  } else {
    console.log('it is a prime number');          //error //fixed by Rohit
  }
}