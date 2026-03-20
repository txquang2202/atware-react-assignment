export interface Dish {
  id: number;
  name: string;
  servings: number;
}

export interface OrderData {
  meal: string;
  people: number;
  restaurant: string;
  dishes: Dish[];
}

export interface OrderContextType {
  formData: OrderData;
  updateData: (newData: Partial<OrderData>) => void;
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  resetForm: (category: string) => void;
}
