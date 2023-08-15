import { useState } from 'react'
import './components.scss'

const AlunoPerfil = (props) =>{


    return(
            <div className='dark'  >
                    
                <h4 style={{ backgroundColor: props.item.fundo }}>  
                {props.item.nomeAluno}
                    <i className='fa-brands fa-x-twitter botaoX' onClick={() => props.excluir(props.item)}></i>
                </h4>
                     idade: {props.item.idade} anos
                <div className='cabeca'>
                    <ul >
                         <h5>
                        jogos Preferidos:
                        </h5>
                    {props.item.jogosPreferidos.map((item) => <>
                        <li> {item} </li>
                    </> )}



                    </ul>
                </div>
            </div>
    )
}

export default AlunoPerfil