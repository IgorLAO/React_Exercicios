    import { useEffect, useState } from "react"
    import './App.scss'


const Pokemons = ({PropsData }) =>{
    const [details, setDetails] = useState(null)
    const [pokeName, setPokeName] = useState()
    const [hide, setHide] = useState(true)
    const [reveal, setReveal] = useState(false)

  useEffect(() =>{

      const FetchData = async () =>{
          const response = await fetch(PropsData.url)
          const data = await response.json()

          setDetails(data)
          console.log(data)
      }

      FetchData()
      
  },[])

  if(details=== null){
      return <>
          <div> <b>CARREGANDO...</b> </div>
      </>
  }


  const hideMoreDetails = () =>{
    setHide(false)
    if(hide === false){
      setHide(true)
    }

  }
  const revealMoreDetails = () =>{
    setHide(true)
  }
  
  
  return <>
    <div className=''>


          <div className='cardsDetails'>

          <div className='id'>
          <b>
            #{details.id}
         </b>

        </div>
        <div className="imgContainer">

        <img src={details.sprites.front_default} alt="" />
        </div>
      {hide && (
        <div className="nameContainer">
          <b>{details.name}</b>
         
          <div>
          <a onClick={hideMoreDetails}>mais detalhes</a>
          </div>
        </div>
      )}

      {!hide && (
        <>
        <div className="details_style">
          <div className="detailsNames">
          <h5>EXP - {details.base_experience}</h5>
          <h5>PESO - {details.weight}KG</h5>
          <h5>HABILIDADES - {details.abilities[0].ability.name}</h5>

          </div>
          
        </div>
        <div className="voltar">
        <a onClick={revealMoreDetails}>voltar</a>

        </div>
        </>
      )}
      </div>

    </div>
  </>



}

export default Pokemons