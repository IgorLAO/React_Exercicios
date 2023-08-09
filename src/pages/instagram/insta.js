import pesquisa from '../assets/images/pesquisa.png'
import criar from '../assets/images/criar.png'
import paginaInicial from '../assets/images/home.png'
import mensagens from '../assets/images/mensagens.png'
import reels from '../assets/images/reels.png'
import curtidasNotificacoes from '../assets/images/curtidasNotificacoes.png'
import carlinhos from '../assets/images/carlinhos.png'

import './insta.scss'
import { useState } from 'react'
import Post from '../components/instaComponents/insta'

export default function Instagram(){
    const [hidePostConfigs, setHidePostConfigs] = useState(false)
    
    const [usuario, setUsuario] = useState('')
    const [tempo, setTempo] = useState('')
    const [avatar, setAvatar] = useState('')
    const [desc, setDesc] = useState('')
    const [post, setPost] = useState('')
    const [curtidas, setCurtidas] = useState(0)
    const [poostagens, setPostagens] = useState([])


    const newPost = () =>{
        const newPostagem ={
            avatar: avatar,
            usuario: usuario,
            tempo: tempo,
            postImg: post,
            curtidas: curtidas,
            desc: desc
        }
        setPostagens([...poostagens, newPostagem])
    }

    const hideReview = () =>{
        setHidePostConfigs(true)
        if(hidePostConfigs){
            setHidePostConfigs(false)
        }
    }

    return(
        <div className="mainInsta">
            <div className="menu">
                <div className="">
                    <img src={paginaInicial} />
                    <h4 className='inicio'>Pagina inicial</h4>
                </div>
                <div className="">
                    <img src={pesquisa} />
                    <h4>Pesquisa</h4>
                </div>
                <div className="">
                    <img src={reels} />
                    <h4>Reels</h4>
                </div>
                <div className="">
                    <img src={mensagens} />
                    <h4>Mensagens</h4>
                </div>
                <div className="">
                    <img src={curtidasNotificacoes} />
                    <h4>Notificações</h4>
                </div>
                <div className="">
                    <img src={criar} onClick={hideReview}  />
                    <h4  >Criar</h4>
                    <h6
            style={{ backgroundColor: '#ff0303' }}> ---aperte aqui para aparecer os inputs</h6>
                </div>
            </div>

                <div className="mainPage">
                <div className="storys">
                    <div>
                        <img src={carlinhos} />

                    </div>
                    <div>
                        <img src={carlinhos} /> 
                    </div>
                    <div>
                        <img src={carlinhos} /> 
                    </div>
                    <div>
                        <img src={carlinhos} /> 
                    </div>
                    <div>
                        <img src={carlinhos} /> 
                    </div>
                    <div>
                        <img src={carlinhos} /> 
                    </div>
                    <div>
                        <img src={carlinhos} /> 
                    </div>
                </div>
                {/* <button onClick={hideReview}> + </button> */}
                    <div className="feed">
                    {hidePostConfigs &&
                <>
                        <div className='post'>
                            <div className='usuarioTempo'>
                            <label>
                                <h5>usuario</h5>
                            <input type='text' value={usuario} onChange={e => setUsuario(e.target.value)} />
                            </label>

                            <label>
                                <h5>tempo</h5>
                            <input type='text' value={tempo} onChange={e => setTempo(e.target.value)} />
                            </label>

                            </div>
                            <label>
                                <h5>Avatar:</h5>
                            <input type='text' id='avatar' value={avatar} onChange={e => setAvatar(e.target.value)} />
                            </label>

                            <label>
                            <h5>Descrição:</h5>
                            <textarea value={desc} onChange={e => setDesc(e.target.value)} />
                            </label>

                            <div className='usuarioTempo'>
                            <label>
                                <h5>Post:</h5>
                            <input type='text' value={post} onChange={e => setPost(e.target.value)} />
                            </label>

                            <label>
                                Curtidas:
                            <input type='text' value={curtidas} onChange={e => setCurtidas(Number(e.target.value)) } />
                            </label>
                            </div>
                            <button className='enviarBtn' onClick={newPost}> Postar </button>
                        </div>
                            </>
                    }
                    </div>
                        {poostagens.map((item) => <>
                        <Post 
                        avatar={item.avatar}
                        usuario={item.usuario}
                        tempo={item.tempo}
                        post={item.postImg}
                        desc={item.desc}
                        curtidas={item.curtidas}
                        />
                    </> )}


            </div>


        </div>
    )
}