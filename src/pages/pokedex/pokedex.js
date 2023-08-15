import { useState } from 'react'
import pikachuIcon from '../assets/images/poke Assets/logoPokedex 1.png'

import './pokedex.scss'
import { useEffect } from 'react'
import PokeCard from '../components/PokeCards/pokeCards'

export default function Pokedex() {
    const [list, setList] = useState([])
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')

    useEffect(() =>{
        async function FetchData(){
            
            let response  = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            let data = await response.json()

            setList(data.results)
        }
        FetchData()

    })

    return<>
        <div className="MainPoke">
            <div className='Pikachu'>
                <img src={pikachuIcon} />
                <input type='text' placeholder='Encontrar pokemon' />
            </div>    
            <div className='pokemonsGridCards'>
               {list.map((item, index) =>  
                // <div key={index} className='card'>
                //     <img src='a' />
                //     <h1> {item.name} </h1>
                //     <p> descrição </p>
                // </div>
               <PokeCard
               url={url}/>
               )}
               
            </div>            
        </div>
    </>
}