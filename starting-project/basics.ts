function add(n1: number, n2: number, showResults: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResults) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResults = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResults, resultPhrase);
