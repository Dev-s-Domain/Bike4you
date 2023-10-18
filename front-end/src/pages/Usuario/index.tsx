import { MeuEstilo } from "./styles";
import { useState } from 'react'
import { Usuario } from "../../components/Usuario";
import Cadastro from "../Cadastro";
import { useAuth } from "../../hooks/auth";

function Gerenciar() {
  const user = useAuth()
  console.log(user)

  const [menu, setMenu] = useState(0)


  return (
    <MeuEstilo>
      <h1 id="gerenciarText">Gerenciar conta</h1>
      <div className="container">


        <div className="menu">
          <button className="botao" id="botao1" onClick={() => setMenu(1)}>Editar Usuário</button>
          <button className="botao" id="botao2" onClick={() => setMenu(2)}>Cadastrar Bike</button>
        </div>

        {menu === 2 ? <Cadastro />
          :  <Usuario />
          }
      </div>
    </MeuEstilo >
  );

};


export default Gerenciar;