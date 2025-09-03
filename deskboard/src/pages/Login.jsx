import { useState } from "react";   
import { useNavigate } from "react-router-dom";
import { loginAndGetUser } from "../../auth";
import { api } from "../../api";

export function Login(){ 
    const [email, setEmail] = useState("");  
    const [senha, setSenha] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate(); 

    async function handleSubmit (e) {
        e.preventDefault(); 

        if (!email.trim() || !senha.trim()){ 
            setError("Preencha todos os campos");
            return;
        }
        setError(null); 
        setLoading(true);

        try {
            const user = await loginAndGetUser({ email, password: senha });
            console.log("Usuário logado:", user);
            navigate("/deshboard"); 
        } catch (err) { 
            const apiMsg = err?.response?.data || err?.message || "Falha no login";
            console.log("Erro no login:", apiMsg); 
            setError(typeof apiMsg === "string" ? apiMsg : "Falha no login");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
          <div className="container">
            <div className="esquerda">
              <img src="logo.jpg" alt="Logo" className="logo" />
              <h1 className="titulo"><b>Sign in to</b></h1>
              <h2 className="subtitulo">Lorem ipsum is simply</h2>
              <p className="descricao">
                If you don’t have an account register<br />
                You can <a href="/register">Register here</a>!
              </p>
            </div>
        
            <div className="direita">
              <img src="boneco.png" alt="Ilustração" className="ilustracao" />
              <div>
                <form onSubmit={handleSubmit}>
                  <h2 className="sing">BEM VINDOS A ASESPAG</h2>
                  <input 
                    type="text" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="form_input"
                  />
                  <input 
                    type="password"  
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  <h3 className="SENHA">Esqueceu sua senha?</h3>

                  {error && <p className="error">{error}</p>}

                  <button 
                    type="submit"
                    disabled={loading}
                    className="buttonlogin"
                  >
                    {loading ? "Entrando..." : "Login"}
                  </button>

                  <h3 className="opcao">Or continue with</h3>
                  <div className="opcao">
                    <img src="facebook.png" alt="Facebook" className="iconlog"/>
                    <img src="apple.png" alt="Apple" className="iconlog"/>
                    <img src="google.png" alt="Google" className="iconlog" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
}
