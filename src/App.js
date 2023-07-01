import React from "react";
import "./style.css";

export default function App() {
  const calculateSumOfEvenSquares = (numbers) => {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        sum += numbers[i] ** 2;
      }
    }

    return sum;
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sumOfEvenSquares = calculateSumOfEvenSquares(numbers);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Sum of Squares of Even Numbers:</p>
      <p>{sumOfEvenSquares}</p>
    </div>
  );
}
