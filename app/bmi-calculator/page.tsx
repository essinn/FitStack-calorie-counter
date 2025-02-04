"use client";
import React, { useState } from "react";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState<number | null>(null);

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;
    const bmiValue = weightInKg / (heightInM * heightInM);
    setBMI(Number(bmiValue.toFixed(1)));
  };
  return (
    <div>
      <h1>BMI Calculator</h1>
      <input
        type="number"
        value={weight}
        onChange={e => setWeight(e.target.value)}
        placeholder="Weight (kg)"
      />
      <input
        type="number"
        value={height}
        onChange={e => setHeight(e.target.value)}
        placeholder="Height (cm)"
      />
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && <p>Your BMI is {bmi}</p>}
    </div>
  );
}
