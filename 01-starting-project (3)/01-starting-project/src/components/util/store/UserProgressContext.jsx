import { createContext } from "react";

const UserProgressContext = createContext ({
    progress:'',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},

});

export function UserProgressContextProvider ({children}) {
 const [userProgress, setUserProgress] = useState ('');
    function showCart () {
        setUserProgress('cart');
    }
    return (<UserProgressContext.Provider>{children}</UserProgressContext.Provider>
    );
}

export default userProgressContext;