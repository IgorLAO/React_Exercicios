import { useState } from 'react'
import './pokeCard.scss'
import { useEffect } from 'react'
import axios from 'axios'


const PokeCard = (props) => {
    const [lista, setLista] = useState([])

    useEffect(() =>{

        const fetchData = async () =>{
            let response2 = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
            
            setLista(response2.data.results)
            console.log(response2.data.results)
        }
        fetchData()
        
    })
    return<>
        <div>
            {lista.map((item) => 
            <div>
                {item.name}
            </div>
            )}
            
        </div>

    </>
}

export default PokeCard