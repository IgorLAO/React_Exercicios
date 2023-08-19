import { useState } from 'react'
import pikachuIcon from '../assets/images/poke Assets/logoPokedex 1.png'

import './pokedex.scss'
import { useEffect } from 'react'
import PokeCard from '../components/PokeCards/pokeCards'
import axios from 'axios'

export default function Pokedex() {
    const [list, setList] = useState([])
    const [Pokemons, setPokemons] = useState([])
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')



    useEffect(() =>{

        async function FetchData() {
            let url = ('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')

        let response = await fetch(url)
        let data = await response.json()

        const listarPokemons = [];

        console.log(Pokemons)
        for (let item of data.results) {
            let pokeResponse = await axios.get(item.url);

            let sprite = pokeResponse.data.sprites.other['official-artwork'].front_default;

            let tipo1 = pokeResponse.data.types[0].type.name;
            let tipo2 = '';

            if (pokeResponse.data.types.length > 1) {
                tipo2 = pokeResponse.data.types[1].type.name;
            }

            listarPokemons.push({
                nome: item.name,
                imagem: sprite,
                tipos: {
                    tipo1,
                    tipo2
                }
            })
        }
        setPokemons(listarPokemons)
    }
})
    
    
    return <>
        <div className="MainPoke">
            <button onClick={FetchData}> caregar</button>
            <div className='Pikachu'>
                <img src={pikachuIcon} />
                <input type='text' placeholder='Encontrar pokemon' />
            </div>
            <div className='pokemonsGridCards'>
                    {Pokemons.map((item) => <>
                        <div className='card'>
                            <img src={item.imagem} />
                            <h1> {item.nome} </h1>
                            <span> {item.tipos} •  </span>
                        </div>
                    </>)}

            </div>
        </div>
    </>
}