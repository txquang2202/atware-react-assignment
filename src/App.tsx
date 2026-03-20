import React from "react";
import FoodOrder from "./features/food-order/FoodOrder";
import { OrderProvider } from "./providers/order.provider";

const App: React.FC = () => {
  return (
    <main>
      <OrderProvider>
        <FoodOrder />
      </OrderProvider>
    </main>
  );
};

export default App;
