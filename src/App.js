import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="top">
        <div className="logo">
          <img src="baixados-removebg-preview.png" alt="Login do Gmail 100% Original" />
          <p className="txtor">Cópia não autorizada do Login da Google</p>
        </div>
        <nav>
          <ul className="listc">
            <li><a href="https://olhardigital.com.br/2022/07/29/seguranca/hackers-imitam-paginas-do-google-para-aplicar-golpes/">Alerta sobre falsificadores!</a></li>
            <li><a href="https://gmail.com">Gmail 100% Original</a></li>
          </ul>
        </nav>
      </header>

      <div className="quadrado">
        <img className="glogo" src="baixados-removebg-preview.png" alt="Google" />
        <div className="info">
          <h1 className="flog">Fazer Login</h1>
          <h4 className="ir">Ir para o Gmail</h4>
          <button className="esq">Esqueceu seu e-mail?</button>
          <h4 className="priv">Não está no seu computador? Use uma janela de <br /> navegação privada para fazer login. <span className="saib">Saiba mais</span></h4>
          <button className="criar">Criar Conta</button>
          <form>
            <input type="text" id="email" name="email" placeholder="E-mail ou telefone" className="email" />
            <input className="ent" type="submit" value="Avançar" />
          </form>
        </div>
      </div>
      

      <footer>
        <button className="lang">Português (Brasil)</button>
        <img src="baixados__3_-removebg-preview (1).png" className="set" />
        <a className="aj" href="https://support.google.com/accounts?hl=pt-BR&visit_id=638322342642544734-2518945507&rd=2&p=account_iph#topic=3382296" target="_blank">Ajuda</a>
        <a className="daid" href="https://policies.google.com/privacy?gl=BR&hl=pt-BR" target="_blank">Privacidade</a>
        <a className="ter" href="https://policies.google.com/terms?gl=BR&hl=pt-BR" target="_blank">Termos</a>
      </footer>
    </div>
  );
}

export default App;
