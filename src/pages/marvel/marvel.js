import axios from "axios"
import { useEffect, useState } from "react"

import LogoMarvel from '../assets/images/marvel Assets/image 14.png'
import perfilImage from '../assets/images/marvel Assets/Rectangle 68.png'
import lupa from '../assets/images/marvel Assets/Union.png'

import './marvel.scss'

export default function Marvel() {
    const [list, setList] = useState([])

   useEffect(() =>{

       const FetchData = async () =>{
           let response = await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1691676754599&apikey=b70da0a0db6fc8245ffc412c858a0bf4&hash=98fc4770ee9c6fd0eede636857699907&nameStartsWith=a`)
           console.log(response)

           setList(response.data.data.results)
       }
       FetchData()
   })

    return (

        <div className="mainMarvel">

          
            <div className="cabecalho">
                <img src={LogoMarvel} />

                <div className="menu">
                    <h5>Home</h5>
                    <h5>Personagens</h5>
                    <h5>Quadrinhos</h5>
                    <h5>Eventos</h5>
                    <h5>Contatos</h5>
                    <img src={perfilImage} />
                </div>

            </div>

            <div className="content">
                <div className="texts">
                        <h1>Personagens da MARVEL</h1>
                    <div className="desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum augue ut ligula malesuada blandit. Quisque tempor ex quis congue malesuada. Pellentesque est eros, aliquam non malesuada et, molestie ut purus.</p>
                        <div className="search-bar">
                            <img src={lupa} alt="" />
                            <input type="text" placeholder="Nome do personagem" />
                        </div>
                    </div>
                </div> 

                <div className="personagens">
                    <div className="card">      
                        <img src="https://static.vakinha.com.br/uploads/vakinha/image/526381/xX1jtvH.jpg?ims=700x410" alt=""/>
                        <h3>Miranha</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum augue ut ligula malesuada blandit. Quisque tempor ex quis congue malesuada.</p>
                    </div>

                    <div className="card">      
                        <img src="https://static.vakinha.com.br/uploads/vakinha/image/526381/xX1jtvH.jpg?ims=700x410" alt=""/>
                        <h3>Miranha</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum augue ut ligula malesuada blandit. Quisque tempor ex quis congue malesuada.</p>
                    </div>

                    <div className="card">      
                        <img src="https://static.vakinha.com.br/uploads/vakinha/image/526381/xX1jtvH.jpg?ims=700x410" alt=""/>
                        <h3>Miranha</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum augue ut ligula malesuada blandit. Quisque tempor ex quis congue malesuada.</p>
                    </div>
                       {list.map((item) => <>
                        <div className="card">      
                        <img src="https://static.vakinha.com.br/uploads/vakinha/image/526381/xX1jtvH.jpg?ims=700x410" alt=""/>
                        <h3>{item.name}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum augue ut ligula malesuada blandit. Quisque tempor ex quis congue malesuada.</p>
                    </div>
        </> )}
                </div>
            </div>
        </div>


    )
}
