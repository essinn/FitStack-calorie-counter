"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

export default function BMICalculator() {
  const { t } = useTranslation();
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState<number | null>(null);
  const [healthStatus, setHealthStatus] = useState<string>("");
  const [advice, setAdvice] = useState("");

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;
    const bmiValue = weightInKg / (heightInM * heightInM);
    setBMI(Number(bmiValue.toFixed(1)));

    let statusKey = "";
    let adviceKey = "";

    if (bmiValue < 18.5) {
      statusKey = "underweight";
      adviceKey = "underweight_advice";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      statusKey = "normal";
      adviceKey = "normal_advice";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      statusKey = "overweight";
      adviceKey = "overweight_advice";
    } else {
      statusKey = "obese";
      adviceKey = "obese_advice";
    }

    setHealthStatus(t(`bmi.status.${statusKey}`));
    setAdvice(t(`bmi.advice.${adviceKey}`));
  };

  return (
    <Card className="min-h-screen mx-4 my-20">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">
          {t('bmi.title')}
        </CardTitle>
        <CardDescription className="text-md">
          {t('bmi.subtitle')}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-5">
          <div className="space-y-2">
            <Label>{t('bmi.weight')}</Label>
            <Input
              type="number"
              value={weight}
              onChange={(e) => {
                const newWeight = parseFloat(e.target.value);
                if (newWeight > 0 || e.target.value === "") {
                  setWeight(e.target.value);
                }
              }}
              placeholder={t('bmi.weight')}
              className="w-full px-3"
            />
          </div>
          <div className="space-y-2">
            <Label>{t('bmi.height')}</Label>
            <Input
              type="number"
              value={height}
              onChange={(e) => {
                const newHeight = parseFloat(e.target.value);
                if (newHeight > 0 || e.target.value === "") {
                  setHeight(e.target.value);
                }
              }}
              placeholder={t('bmi.height')}
              className="w-full px-3"
            />
          </div>
          <Button
            onClick={calculateBMI}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
          >
            {t('bmi.calculate')}
          </Button>
          {bmi && (
            <CardHeader className="text-center">
              <CardDescription className="text-2xl font-bold">
                {t('bmi.result')}{" "}
                <span className="text-blue-600 dark:text-blue-400">{bmi}</span>
              </CardDescription>
              <CardDescription className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                {t('bmi.status.label')}:{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  {healthStatus}
                </span>
              </CardDescription>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-4 border-l-4 border-blue-600">
                <p className="text-gray-700 dark:text-gray-300 font-medium">{advice}</p>
              </div>
            </CardHeader>
          )}
        </div>
      </CardContent>
    </Card>
  );
}