import { useContext } from "react";
import { OrderContext } from "../contexts/order.context";

export const useOrder = () => {
  const orderContext = useContext(OrderContext);
  if (!orderContext) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return orderContext;
};
