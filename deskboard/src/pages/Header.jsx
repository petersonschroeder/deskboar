import { useEffect, useState } from "react";
import "../styles/Header.scss";
 

export  function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const savedUser = JSON.parse(localStorage.getItem("user") || "{}");
      setUser(savedUser);
    }
  }, []);

  return (
    <header className="header">
      <div className="header__logo">
        <img src="/logo.jpg" alt="Logo" className="header__logo-img" />
        <span className="header__logo-text">MeuGestor</span>
      </div>

      <div className="header__user">
        <img src="boneco.png" alt="Avatar" className="header__avatar" />
        <span>Olá, {user?.name || "Usuário"}</span>
      </div>

      <div className="header__search">
        <input type="text" placeholder="Search" />
      </div>

      <div className="header__right">
        <div className="header__company">
          <img src="apple.png" alt="Empresa" className="header__company-img" />
          <span>Delicious Burger</span>
        </div>
        <button className="header__notifications">
          <span className="material-icons">notifications</span>
          <span className="header__badge">3</span>
        </button>
      </div>
    </header>
  );
}
