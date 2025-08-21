import { useState } from "react";   

export function Login(){ 
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // evita reload da página
        console.log("Login:", login, "Senha:", senha);
        // aqui você pode chamar sua API de login
    };

    return (
        <div >
           
            <form onSubmit={handleSubmit}>
                <h2 className="sing">sing in </h2>
                <input 
                    type="text" 
                    placeholder="Login" 
                    value={login} 
                    onChange={(e) => setLogin(e.target.value)}
                />
                <input 
                    type="password"  
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <h3 className="SENHA" >Esqueceu sua senha?</h3>
                <button type="submit" className="buttonlogin">Login</button>
                <h2>  </h2>
                <h3 className="opcao"> or continue with</h3>
            </form>
        </div>
    )
}