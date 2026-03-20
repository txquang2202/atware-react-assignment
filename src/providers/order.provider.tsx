import { useState } from "react";
import type { OrderData } from "../types/order.type";
import { OrderContext } from "../contexts/order.context";

const initialOrderData = {
  meal: "",
  people: 1,
  restaurant: "",
  dishes: [],
};

//react.node
export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<OrderData>(initialOrderData);
  const [step, setStep] = useState(1);

  const updateData = (newData: Partial<OrderData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const resetForm = (category: string) => {
    if (category === "meal") {
      setFormData((prev) => ({
        ...prev,
        restaurant: "",
        dishes: [],
      }));
    } else if (category === "restaurant") {
      setFormData((prev) => ({
        ...prev,
        dishes: [],
      }));
    } else {
      setFormData(initialOrderData);
      setStep(1);
    }
  };

  const value: {
    formData: OrderData;
    updateData: (newData: Partial<OrderData>) => void;
    step: number;
    nextStep: () => void;
    prevStep: () => void;
    resetForm: (category: string) => void;
  } = {
    formData,
    updateData,
    step,
    nextStep,
    prevStep,
    resetForm,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};
