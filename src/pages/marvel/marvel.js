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
    const [Search, setSearch] = useState('p')
    const [offset, setOffset] = useState('offset=0')
    const [offsetNum, setOffsetNum] = useState(0)
    const [Limit, setLimit] = useState('limit=20')
    const [LimitNum, setLimitNum] = useState(20)
    const [und, setUnd] = useState('')

    if (Search === '') {

        setSearch('l')
    }

    useEffect(() => {

        const FetchData = async () => {
            let response = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=d29133ecb4f4ad60054a59dda5ba8ae0&hash=b63257d6639546f32f66b9f03a0138ba&nameStartsWith=${Search}&${offset}&${Limit}`)
            let data = await response.json()

            setList(data.data.results)
            console.log(data.data.results)
            let urls = []
            setImageUrl(urls)
            ImageUrl.push(urls)

            for (let i = 0; i < data.data.results.length; i++) {

                const character = data.data.results[i]

                
                if (character.thumbnail != undefined && character.thumbnail.path != undefined && character.thumbnail.extension != undefined ) {
                    let imgurl = character.thumbnail.path
                    let extension = character.thumbnail.extension
                    urls.push(imgurl + '.' + extension)
                }
            }

        }
        FetchData()


    }, [Search, offset, Limit])

    const next = () => {
        const num = offsetNum + 20
        setOffsetNum(num)
        setOffset(`offset=${num}`)
    }

    const previous = () => {
        const num = offsetNum - 20
        setOffsetNum(num)
        setOffset(`offset=${num}`)
    }

    const Mais = () => {
        const num  = LimitNum + 10

        setLimitNum(num)

        setLimit(`limit=${num}`)
    }



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
                    <div className="textsConfig">

                    <h1>Personagens da MARVEL</h1>
                    <div className="desc">
                        <p>Lorem ipsum dolor sit amet, consectetura adipiscing elit. Ut elementum augue ut ligula malesuada blandit. Quisque tempor ex quis congue malesuada. Pellentesque est eros, aliquam non malesuada et, molestie ut purus.</p>
                        <div className="search-bar">
                            <img src={lupa} alt="" />
                            <input type="text" placeholder="Nome do personagem" onChange={e => setSearch(e.target.value)} />
                        </div>
                <div className="btnQuery" >
                    <button  style={{padding: 10, borderRadius: 40, border: 'none', margin: 10, height: 50, width: 50 }} onClick={Mais}> mais... </button>
                    <button style={{ padding: 10, borderRadius: 40, border: 'none', margin: 10 }} onClick={previous}> pagina anterior </button>
                    <button style={{ padding: 10, borderRadius: 40, border: 'none', margin: 10 }} onClick={next}> prox pagina </button>
                </div>
                    </div>
                    </div>
                </div>
                <div>

                </div>

                <div className="personagens">

                    {list.map((item, index) =>
                        <div key={index} className="card" >
                            <img src={ImageUrl[index]} alt="" />
                            <div className="descName">
                                <h3>{item.name}</h3>
                                <h5>
                                        {item.description}                               
                                </h5>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>


    )
}
