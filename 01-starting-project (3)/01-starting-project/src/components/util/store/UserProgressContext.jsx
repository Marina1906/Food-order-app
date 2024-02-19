import { createContext } from "react";

const userProgressContext = createContext ({
    progress:'',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},

});

export default userProgressContext;