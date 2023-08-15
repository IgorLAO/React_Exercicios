 import AlunoPerfil from '../components/alunos/componentsAluno'
import './index.scss'

 import { useState } from 'react'

 export default function ListaAluno(){
     const [nomeAluno, setNomeAluno] = useState('')
     const [idade, setIdade] = useState('')
     const [nomeJogo, setNomeJogo] = useState('')
     const [jogosPreferidos, setJogosPreferidos] = useState([])
     const [newCard, setNewCard] = useState([])

     const [cor, setColor] = useState('')
     const [colors, setColors] = useState([])
     const [hide, setHide] = useState(false)

     const jogos = (e) =>{
         if(e != ''){

             if(e.key === 'Enter'){
                 setJogosPreferidos([...jogosPreferidos, nomeJogo])
                 setNomeJogo('')
             }
         }
     }

     const NovoPerfil = () =>{
        setColors([...colors, cor]) 
        
         const novo = {
             nomeAluno: nomeAluno,
             idade: idade,
             jogosPreferidos: jogosPreferidos,
             fundo: cor
         }
       
         setNewCard([...newCard, novo])
         console.log(novo)

         setNomeAluno('')
         setIdade(0)
         setColor('')
         setNomeJogo('')
         setJogosPreferidos([])
     }

     const HideReveal = () =>{
         setHide(!hide)

        
     }
    

     function excluir(itemExluir) {
        let novosItem = newCard.filter(item => item.nomeAluno != itemExluir.nomeAluno)

        setNewCard([...novosItem])
    }

     return(
         <>

         <button onClick={HideReveal} className='optionsBTN'> {hide ? '-' : '+'} </button>

         {hide &&(
             <div className='newPerfil'>
             <label htmlFor="">
                 Nome
         <input type='text' placeholder='digite o nome do aluno' value={nomeAluno} onChange={(e) => setNomeAluno(e.target.value)} />
             </label>

             <label htmlFor=""  >
             Idade
         <input type='number' placeholder='idade' value={idade} onChange={(e) => setIdade(e.target.value)} />
             </label>

                 <label htmlFor="" className='jogos'>
                     Jogos
                     <span onKeyDown={jogos}>
         <input type='text' placeholder='aperte enter para adcionar' value={nomeJogo} onChange={(e) => setNomeJogo(e.target.value)}/>
                     </span>
             <button onClick={jogos}>adcionar jogo</button>
         <ul>
             {jogosPreferidos.map((item)=> <>
                 <li>
                     {item}    
                 </li>    
             </> )}
         </ul>

                 </label>
                 <label htmlFor="">
                     cor
         <input type="color" value={cor} onChange={(e) => setColor(e.target.value) }/>
                 </label>


         <button onClick={NovoPerfil}>novo Card</button>
         </div>
 )}

             {cor} 
         <div className='cardsAlunos'>
            
         {newCard.map((item) => (
             <>
             <AlunoPerfil
                item={item}
                excluir={excluir}
             />

        </>

 ))}

         </div>
         </>
     )
 }