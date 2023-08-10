import axios from "axios"

function Marvel(){
    const [list, setList] = useState([])

    const FetchData = () =>{
        let response = axios.get(`http://gateway.marvel.com/v1/public/comics?ts=1691676754599&apikey=b70da0a0db6fc8245ffc412c858a0bf4&hash=98fc4770ee9c6fd0eede636857699907`)
    }

    return(<>


        </>)
}