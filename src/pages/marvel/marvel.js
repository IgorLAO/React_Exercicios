import axios from "axios"
import { useEffect, useState } from "react"

import LogoMarvel from '../assets/images/marvel Assets/image 14.png'
import perfilImage from '../assets/images/marvel Assets/Rectangle 68.png'
import lupa from '../assets/images/marvel Assets/Union.png'

import './marvel.scss'

export default function Marvel() {
    const [list, setList] = useState([])
    const [extension, setExtension] = useState('')
    const [ImageUrl, setImageUrl] = useState([])

      const FetchData = async () =>{
          let response = await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=78359d4e2fda4f50a5bd494fee4c26ac&hash=a7e860741264a8afe685883df49e6217&nameStartsWith=iron`)

          setList(response.data.data.results)

          let urls = []
          setImageUrl(urls)
          ImageUrl.push(urls)

          console.log(ImageUrl)
          for(let i = 0; i < list.length; i++ ){
              let imgurl = response.data.data.results[i].thumbnail.path 
              let extension = response.data.data.results[i].thumbnail.extension 
              urls.push(imgurl + '.' +extension)
            }

       
            
      }
       

    return (

        <div className="mainMarvel">

          <button onClick={FetchData}> aaaaaaa </button>
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
                 
                    {list.map((item, index) => 
                    <div key={index} className="card" >
                        <img src={ImageUrl[index]} alt=""/>  
                            <div className="descName">
                            <h3>{item.name}</h3>
                            <p className="descide" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum augue ut ligula malesuada blandit. Quisque tempor ex quiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasds congue malesuaectetur adipiscing elit. Ut elementum augue ut ligula malesuada blandit. Quisque tempor ex quiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasds congue malesectetur adipiscing elit. Ut elementum augue ut ligula malesuada blandit. Quisque tempor ex quiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasds congue malesectetur adipiscing elit. Ut elementum augue ut ligula malesuada blandit. Quisque tempor ex quiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasds congue malesda.</p>
                            
                            </div>
                    </div>
                            )}
                </div>
            </div>
        </div>


    )
}
