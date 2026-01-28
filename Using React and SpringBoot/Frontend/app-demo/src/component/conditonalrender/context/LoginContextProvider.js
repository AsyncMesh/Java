import { loginContext } from "./LoginContext";

const LoginContextProvider=({children,...props})=> {
    const Context = loginContext
    return (
        <Context.Provider value={props}>
            {children}
        </Context.Provider>
    );
}

export default LoginContextProvider