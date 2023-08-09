import './components.scss'

const Aluno = (props) =>{



    return(
        <>
            <div className={props.tema}>

                <h4 style={{ backgroundColor: props.fundo }}>
                {props.nomeAluno}
                </h4>
                     idade: {props.idade} anos
                <div className='cabeca'  >
                    <ul >
                         <h5>
                        jogos Preferidos:
                        </h5>
                    {props.JogosPreferidos.map((item) => <>
                        <li> {item} </li>
                    </> )}

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Aluno