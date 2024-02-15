import { createContext } from "react";

const cartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

function CartContextProvider () {}