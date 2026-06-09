"use client";

import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
} from "react";

interface CartState {
  count: number;
  items: string[];
}

type CartAction =
  | {
      type: "ADD_ITEM";
      payload: string;
    }
  | { type: "REMOVE_ITEM" };

const initialState: CartState = {
  count: 0,
  items: [],
};

function cartReducer(
  state: CartState,
  action: CartAction
): CartState {
  switch (action.type) {
case "ADD_ITEM":
  return {
    ...state,
    count: state.count + 1,
    items: [
      ...state.items,
      action.payload,
    ],
  };

    case "REMOVE_ITEM":
      return {
        ...state,
        count: Math.max(0, state.count - 1),
      };

    default:
      return state;
  }
}

interface CartContextType {
  count: number;
  items: string[];
  addItem: (item: string) => void;
  removeItem: () => void;
}

const CartContext =
  createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState
  );

const addItem = (item: string) =>
  dispatch({
    type: "ADD_ITEM",
    payload: item,
  });

  const removeItem = () =>
    dispatch({ type: "REMOVE_ITEM" });

  return (
    <CartContext.Provider
      value={{
        count: state.count,
        items: state.items,
        addItem,
        removeItem,
        }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}