import type { OrderData } from "../types/order.type";

export const useValidateStep1 = () => {
  const validate: (formData: Pick<OrderData, "meal" | "people">) => {
    valid: boolean;
    error: string;
  } = (data) => {
    if (!data.meal) {
      return { valid: false, error: "Meal selection is required." };
    }
    if (data.people < 1 || data.people > 10) {
      return { valid: false, error: "At least 1 person is required." };
    }

    return { valid: true, error: "" };
  };

  return { validate };
};

export const useValidateStep2 = () => {
  const validate: (formData: Pick<OrderData, "restaurant">) => {
    valid: boolean;
    error: string;
  } = (data) => {
    if (!data.restaurant) {
      return { valid: false, error: "Restaurant selection is required." };
    }

    return { valid: true, error: "" };
  };

  return { validate };
};

export const useValidateStep3 = () => {
  const validate: (formData: Pick<OrderData, "dishes" | "people">) => {
    valid: boolean;
    error: string;
  } = (data) => {
    if (data.dishes.length === 0) {
      return { valid: false, error: "At least one dish must be selected." };
    }

    const totalServings = data.dishes.reduce(
      (sum, dish) => sum + dish.servings,
      0,
    );

    if (totalServings > 10) {
      return { valid: false, error: "Total servings cannot exceed 10." };
    }

    if (totalServings < data.people) {
      return {
        valid: false,
        error: "Total servings cannot be less than the number of people.",
      };
    }

    const dishSet = new Set(data.dishes.map((d) => d.name));

    if (dishSet.size !== data.dishes.length) {
      return { valid: false, error: "Duplicate dishes are not allowed." };
    }

    return { valid: true, error: "" };
  };

  return { validate };
};
