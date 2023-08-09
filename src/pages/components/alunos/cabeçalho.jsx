import './components.scss'

export default function Cabecalho(props){

    return(
        <div className="mainCabecalho">
            <h1>Projeto {props.nomeProjeto}</h1>
        </div>
    )
}