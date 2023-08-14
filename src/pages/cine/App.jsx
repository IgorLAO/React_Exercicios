import { useState, useEffect } from 'react'
import './App.scss'
import buscar from '../assets/images/icon-buscar.png'
import axios from 'axios'
import CineComponent from '../components/cineComponents/cineComponent'
import logo from '../assets/images/logo.png'

// INSTALAR
// npm install react-image-zooom --force
// ****************************************************************

function Cinema() {
  const [list, setList] = useState([])
  const [filme, setFilme] = useState('batman')
  const [pagina, setPagina] = useState('page=1')
  const [paginaNum, setPaginaNum] = useState(1)

  async function search() {
    let response = await axios.get(`https://www.omdbapi.com/?s=${filme}&apikey=83113263&${pagina}`)
    .then((response => setList(response.data.Search)))
    console.log(list)
    
  }  
  const previous = () => {
    const novaPaginaNum = paginaNum - 1;
    
    setPaginaNum(novaPaginaNum);
    
    
  }
 
  const next = () => {
    const novaPaginaNum = paginaNum + 1;
    
    setPaginaNum(novaPaginaNum);
    
    
  }

  useEffect(() =>{

    setPagina(`page=${paginaNum}`);
       
    search();

  } )
  

  return (
    <>
        <div className='cabeçalho' style={{backgroundColor: '#0D0D0D',
          color: "#fff",
          display: 'flex',
          alignItems: 'center',
          fontSize: 15,
          padding: 8
        }}>
          <img src={logo} alt="" style={{marginRight: 10}} />
          Portifolio.Me
        </div>
      <div className='mainCine'>
        <div className='tela'>
          <div className='banner'>
            <span>
              <h1>

              IMDB
              </h1>
            </span>
          </div>

          <h3>Consulta de filmes</h3>

          <div className='search'>
            <div className='inputPesq'>
              <h6>Nome</h6>
              <div className='pesqImg'>

                <input type="text" onChange={e => setFilme(e.target.value)} />
                <button onClick={search} >
                  <img src={buscar} alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className='tabela'>

            <div className='nameColumns'>
              <h5 className='id'>Codigo</h5>
              <h5 className='nome'>Titulo</h5>
              <h5>Ano</h5>
            </div>

            {list?.map((item) => <>
              <CineComponent
              imdbID={item.imdbID}
              Title={item.Title}
              Year={item.Year}
              Poster={item.Poster}
              />
            </>)}
          </div>
              <div className='paginas'>

              <button onClick={previous} className='PagBtn' style={{marginRight: 15 }}> <b>{paginaNum - 1}</b> - pagina  </button>
              <button onClick={next} className='PagBtn'> pagina - <b>{paginaNum}</b> </button>
              </div>
        </div>

      </div>
    </>
  )
}


export default Cinema
