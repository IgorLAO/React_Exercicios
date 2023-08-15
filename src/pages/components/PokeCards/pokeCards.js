import { useState } from 'react'
import './pokeCard.scss'
import { useEffect } from 'react'
import axios from 'axios'


const PokeCard = (props) => {
    const [lista, setLista] = useState([])

    useEffect(() =>{

        const fetchData = async () =>{
            let response2 = await axios.get(props.url)
            
            setLista(response2.data.results)
            console.log(response2.data.results)
        }
        fetchData()
        
    })
    return<>
        <div>
          
            <div>
                {props.name}
            </div>
            
        </div>

    </>
}

export default PokeCard