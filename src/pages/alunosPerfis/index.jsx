// import './index.scss'

// import Cabecalho from '../components/cabeçalho'
// import Aluno from '../components/componentsAluno'
// import { useState } from 'react'

// export default function ListaAluno(){
//     const [nomeAluno, setNomeAluno] = useState('')
//     const [idade, setIdade] = useState('')
//     const [nomeJogo, setNomeJogo] = useState('')
//     const [jogosPreferidos, setJogosPreferidos] = useState([])
//     const [newCard, setNewCard] = useState([])
//     const [cor, setColor] = useState('')
//     const [colors, setColors] = useState([])
//     const [hide, setHide] = useState(false)

//     const jogos = (e) =>{
//         if(e != ''){

//             if(e.key === 'Enter'){
//                 setJogosPreferidos([...jogosPreferidos, nomeJogo])
//                 setNomeJogo('')
//             }
//         }
//     }

//     const NovoPerfil = () =>{
//        setColors([...colors, cor]) 
        
//         const novo = {
//             nomeAluno: nomeAluno,
//             idade: idade,
//             jogosPreferidos: jogosPreferidos,
//             fundo: cor
//         }
       
//         setNewCard([...newCard, novo])
//         console.log(novo)

//         setNomeAluno('')
//         setIdade(0)
//         setColor('')
//         setNomeJogo('')
//         setJogosPreferidos([])
//     }

//     const HideReveal = () =>{
//         setHide(true)
//         if(hide){
//             setHide(false)
//         }
//     }
    
//     return(
//         <>
//         <Cabecalho/>

//         <button onClick={HideReveal} className='optionsBTN'>+</button>
//         {hide &&(

//             <div className='newPerfil'>
//             <label htmlFor="">
//                 Nome
//         <input type='text' placeholder='digite o nome do aluno' value={nomeAluno} onChange={(e) => setNomeAluno(e.target.value)} />
//             </label>

//             <label htmlFor="">
//             Idade
//         <input type='number' placeholder='idade' value={idade} onChange={(e) => setIdade(e.target.value)} />
//             </label>

//                 <label htmlFor="" className='jogos'>
//                     Jogos
//                     <span onKeyDown={jogos}>
//         <input type='text' placeholder='aperte enter para adcionar' value={nomeJogo} onChange={(e) => setNomeJogo(e.target.value)}/>
//                     </span>
//             <button onClick={jogos}>adcionar jogo</button>
//         <ul>
//             {jogosPreferidos.map((item)=> <>
//                 <li>
//                     {item}    
//                 </li>    
//             </> )}
//         </ul>

//                 </label>
//                 <label htmlFor="">
//                     cor
//         <input type="color" value={cor} onChange={(e) => setColor(e.target.value) }/>
//                 </label>


//         <button onClick={NovoPerfil}>novo Card</button>
//         </div>
// )}

//             {cor} 
//         <div className='cardsAlunos'>
//             <Aluno 
//             nomeAluno='Igor' 
//             idade='12' 
//             JogosPreferidos={[ 'Undertale', 'Fallout 76', 'God of War', 'Need for Speed', 'the Godfather' ]} 
//             tema='dark'/>
//             <Aluno 
//             nomeAluno='Elisa' 
//             idade='19' 
//             JogosPreferidos={[ 'The sims 4', 'Half-life alyx', 'God of War', 'Need for Speed 4', 'Jump King' ]} 
//             tema='dark'/>
//             <Aluno 
//             nomeAluno='Alice' 
//             idade='22' 
//             JogosPreferidos={[ 'Super Mario bros.', 'Reseident Evil 4', 'Bully', 'Sonic the hedHog' ]} 
//             tema='light'/>
            
//         {newCard.map((item, index) => (
//             <>
//             <Aluno 
//             nomeAluno={item.nomeAluno} 
//             idade={item.idade} 
//             JogosPreferidos={item.jogosPreferidos} 
//             fundo={item.fundo}  
            
//             tema='light'
//             />
//             </>

// ))}

//         </div>
//         </>
//     )
// }