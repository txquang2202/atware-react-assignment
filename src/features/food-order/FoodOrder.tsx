import React from "react";
import dishData from "../../data/dishes.json";
import { useOrder } from "../../hooks/useOrder";
import Step1 from "./components/step-1";
import Step2 from "./components/step-2";
import Step3 from "./components/step-3";
import Step4 from "./components/step-4";

const FoodOrder: React.FC = () => {
  const { step, formData } = useOrder();

  const filteredRestaurants = Array.from(
    new Set(
      dishData.dishes
        .filter((d) => d.availableMeals.includes(formData.meal))
        .map((d) => d.restaurant),
    ),
  );

  const filteredDishes = dishData.dishes.filter(
    (d) => d.restaurant === formData.restaurant,
  );

  // const updateData = (newData: Partial<OrderData>) => {
  //   setFormData((prev) => ({ ...prev, ...newData }));
  // };

  // const handleNext = () => {
  //   setStep((prev) => prev + 1);
  // };

  // const handleBack = () => {
  //   setStep((prev) => prev - 1);
  // };

  return (
    <div className="border max-w-4xl mx-auto shadow-lg rounded-xl">
      {step === 1 && <Step1 />}

      {step === 2 && <Step2 restaurants={filteredRestaurants} />}
      {step === 3 && <Step3 availableDishes={filteredDishes} />}
      {step === 4 && <Step4 />}
    </div>
  );
};

export default FoodOrder;
