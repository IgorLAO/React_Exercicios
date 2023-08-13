import { useState, useEffect } from 'react'
import './netflix.scss'
import axios from 'axios'

import logo from '../assets/images/logo.png'
import buscar from '../assets/images/icon-buscar.png'
import sino from '../assets/images/Vector.png'
import perfil from '../assets/images/image 5.png'
import arrow from '../assets/images/bxs_up-arrow.png'

function Netflix(){
    const [list, setList] = useState([])
    const [list2, setList2] = useState([])
    const [filme, setFilme] = useState('batman')
    const [ProxPagina, setProxPagina] = useState('page=2')
    const [ProxPagina2, setProxPagina2] = useState('page=2')
    const [nrPag, setNrPag] = useState(1)

    async function search() {
      let response = await axios.get(`https://www.omdbapi.com/?s=${filme}&apikey=83113263&${ProxPagina}`)
      .then((response => setList(response.data.Search)))
      
    } 
    
    const Mais = async () =>{
        let response2 = await axios.get(`https://www.omdbapi.com/?s=${filme}&apikey=83113263&${ProxPagina2}`)
           .then((response2 => setList2(response2.data.Search)))


        const nvPag = nrPag + 2
        setNrPag(nvPag)
        
        let movies = [];
        for (let i = 0; i < 30; i++) {
            if (list[i]) {
                movies.push(list[i]);
            }
        }

        setList2([...list2, movies]);
        
    }

    const proxPag = () =>{
        const nvPag = nrPag + 1
        setNrPag(nvPag)
        
    }


    useEffect(() =>{
        setProxPagina(`page=` + nrPag)
        search()
    }, [nrPag])


    
    return(
    <div className='Principal'>
        <div className='principalS2'>

        <div className='menu'>
            <div className='links'>
            <img src={logo} alt="" />
            <h2> <b> Portifolio.Me </b> </h2>

            <h5>Inicio</h5>
            <h5>Séries</h5>
            <h5>Filmes</h5>
            <h5>Bombando</h5>
            <h5>Minha Lista</h5>
            </div>
            
            <div className='inputsImg'>
                <div className='pesquisa'>
                    <input type="text" placeholder='Pesquisar pelo titulo' onChange={e => setFilme(e.target.value)} />
                    <img src={buscar} alt="" onClick={search} />
                </div>
                <h4>Bruno</h4>
                <img src={sino} alt="" className='sino' />
                <img src={perfil} alt=""  className='perfil'/>
                <img src={arrow} alt="" className='seta' />
            </div>

        </div>

        <div className='InfosS3'>
            <div>
                <h1>Friends</h1>
                <h4>Seis jovens são unidos por laços familiares, românticos e, principalmente, de amizade, enquanto tentam vingar em Nova York.</h4>
                <a href="">Assistir</a>
            </div>

        </div>

            <h5 style={{marginBottom:30,marginTop: -15,marginLeft:15,fontSize: 20, fontWeight: 600}}>
            Resultados da Busca
            </h5>
        <div className='resultados'>
           
            

            {list?.map((item) => <>
            <img src={item.Poster} alt="" />

                
            </>  )}
        {list2.map((item) => <>
                {item.map((item2) => <>
                <img src={item2.Poster} />
                </> )}
        </>)}   

        </div>
                <div className='botaoMaisEproxPag'>

        <button onClick={Mais}  >mais</button>
        ou
        <button onClick={proxPag}  >Proxima pagina > {nrPag + 1}</button>
                </div>
    </div>
</div>
    )
}

export default Netflix