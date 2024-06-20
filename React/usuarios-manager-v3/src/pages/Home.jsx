import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Botao from '../components/Botao.jsx'
import Titulo from '../components/Titulo.jsx'
import { useTheme } from '../contexts/ThemeContext';

function Home() {
  const [usuarios, setUsuarios] = useState([])
  const [erro, setErro] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [nome, setNome] = useState("")
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if(nome != "" && nome.length > 3 && !isLoading){
      setUsuarios(usuarios.filter(usuario => usuario.nome.toLowerCase().includes(nome.toLowerCase())))
    }else if(isLoading || nome.length == 0){
      axios.get(`http://localhost:3000/usuarios`)
        .then(res => {
          setUsuarios(res.data)
          setIsLoading(false)
        })
        .catch(res => {
          console.log(res.data)
          setErro("Não foi possível carregar a lista de usuários.")
        })
    }
  }, [isLoading, nome])

  function mascararEmail(email){
    let emailMascarado = email[0]
    let mostrarCaracter = false

    for(let i = 1; i < email.length; i++){
      if(email[i] == '@'){
        mostrarCaracter = true
      }

      if(!mostrarCaracter){
        emailMascarado += '*'
      }else{
        emailMascarado += email[i]
      }
    }


    return emailMascarado
  }

  function inativarUsuario(id){
    // PATCH
    axios.patch(`http://localhost:3000/usuarios/${id}`, { ativo: 0 })
      .then(res => {
        console.log(res.data)
        setIsLoading(true)
      })
      .catch(res => {
        console.log(res.data)
        setErro("Não foi possível atualizar os dados do usuário.")
      })
  }

  function ativarUsuario(id){
    // PATCH
    axios.patch(`http://localhost:3000/usuarios/${id}`, { ativo: 1 })
      .then(res => {
        console.log(res.data)
        setUsuarios([]) 
      })
      .catch(res => {
        console.log(res.data)
        setErro("Não foi possível atualizar os dados do usuário.")
      })
  }

  function atualizaNome(event){
    setNome(event.target.value)
  }

  if(isLoading){
    return (
      <h1>Carregando</h1>
    )
  }else{
    return (
      <div data-bs-theme={theme} className={`bg-${theme} text-${theme == 'dark' ? 'white' : 'black'}`}> 
        <div className='row'>
            <div className='col-3'>
                <label htmlFor="_nome">Nome</label>
                <input type="text" id="_nome" placeholder="Digite para pesquisar" className='form-control' onChange={atualizaNome} value={nome} />
            </div>
            <div className='col'>
                <div className='d-flex align-items-end justify-content-end'>
                    <Link to={"/cadastro"} className="btn btn-primary">Novo registro</Link>
                    <div className="form-check form-switch mx-2">
                      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onInput={toggleTheme}/>
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{theme}</label>
                  </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <Titulo>Usuários Cadastrados</Titulo>
                { erro && <div className='alert alert-danger'>{erro}</div> }
                <table className='table table-striped'>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Usuário GH</th>
                    <th>E-mail</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                    usuarios.map(usuario => {
                        return (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nome}</td>
                            <td>{usuario.login}</td>
                            <td>{mascararEmail(usuario.email)}</td>
                            <td>
                            {
                                usuario.ativo == 1 && <Botao tipo="danger" acao={() => inativarUsuario(usuario.id)}>Desativar</Botao>
                            }
                            {
                                usuario.ativo == 0 && <Botao tipo="success" acao={() => ativarUsuario(usuario.id)}>Ativar</Botao>
                            }
                            </td>
                        </tr>
                        )
                    })
                    }
                </tbody>
                </table>
            </div>
        </div>
      </div>
    )
  }
  
  
}

export default Home
