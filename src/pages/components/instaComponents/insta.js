import curtidasNotificacoes from '../../assets/images/curtidasNotificacoes.png'
import mensagens from '../../assets/images/mensagens.png'
import coracaoVermelho from '../../assets/images/coracao1.png'

import './insta.scss'
import { useState } from 'react'

export default function Post(props){
    const [hidePostConfigs, setHidePostConfigs] = useState(false)
    const [curtidas2, setCurtidas2] = useState(props.curtidas)


    const hideReview = () =>{
        let curtir = 1
        setHidePostConfigs(true)
        if(hidePostConfigs){
            setHidePostConfigs(false)
            setCurtidas2(props.curtidas - curtir)
        }
        setCurtidas2(props.curtidas + curtir)
        console.log(curtidas2)
    }

    return<>
    <div className='postagem'>
                        <div className='headerPost'>
                            <img src={props.avatar} />
                            <span>

                            <a> <b>{props.usuario}</b> </a>
                            <span className='data'>• {props.tempo}</span>
                            </span>
                        </div>
                        <div className='imgPost'>
                            <img src={props.post}/>
                        </div>
                        <div className='cutidasComentarios'>
                            <div className='iconsbtn'>
                            {!hidePostConfigs &&
                            <img src={curtidasNotificacoes}  onClick={hideReview} />
                            }
                            {hidePostConfigs &&
                            <img src={coracaoVermelho} onClick={hideReview} className='verm' />
                           
                            }
                            <img src={mensagens} onClick={hideReview}/>
                            </div>
                            <a> {curtidas2} Curtidas </a>
                        </div>
                        <div className='descPost'>
                            <a> <b>{props.usuario}</b> {props.desc}</a>
                        </div>
                        <hr/>

                    </div>
    </>
}