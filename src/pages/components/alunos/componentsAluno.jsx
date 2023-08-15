import { useState } from 'react'
import './components.scss'

const AlunoPerfil = (props) =>{

    console.log(props.item.JogosPreferidos)

    return(
        <>
            <div className={props.item.tema}>
                    <button onClick={props.excluir(props.item) } > (x) </button>
                <h4 style={{ backgroundColor: props.item.fundo }}>  
                {props.item.nomeAluno}
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
        </>
    )
}

export default AlunoPerfil