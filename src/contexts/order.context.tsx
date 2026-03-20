import { createContext } from "react";
import type { OrderContextType } from "../types/order.type";

export const OrderContext = createContext<OrderContextType | undefined>(
  undefined,
);
