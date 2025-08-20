import { useState } from "react";   

export function Login(){ 
    const [ Login , setLogin] = useState(null)
    const [ senha, setsenha] = useState(null)

    return (
        <>
        <form >
            <input type="text"  placeholder="Login"/>
            <input type="password"  name="senha"/>
            <button type="submit">Login</button>
        </form>
        </>
    )
}