 import { useState } from "react"
 import './index.scss'

 export default function Compras(){
     const [compra, setCompra] = useState('')
     const [listaCompras, setListaCompras] = useState([])
     const [qtd, setQtd] = useState([])
    
     const AdCompra = () =>{
         if(compra != ''){
             setListaCompras([...listaCompras, compra])
             setQtd([...qtd, 1])
             setCompra('')
         }
     }

     const Maior = (index) => {
         const newQtd = [...qtd]
         newQtd[index] += 1
         setQtd(newQtd)
     }
    
     const Menor = (index) =>{
         if (qtd[index] > 0) {
             const newQtd = [...qtd]
             newQtd[index] -= 1
             setQtd(newQtd)
         }
        
     }

     const apagar = () =>{
         setListaCompras([])
     }

     function excluir(itemExcluir){
        let novosItens = listaCompras.filter(item => item != itemExcluir)
        setListaCompras([...novosItens]);
     }

     return(
         <>
         <div className="mainCompras">
             <main>
                 <div className="listaa">
                 <h3>Lista de Compras</h3>


         <div className="lista">
            <input type="text" value={compra} onChange={e => setCompra(e.target.value)}/> 
             <button onClick={AdCompra}>Adcionar</button>
             <button onClick={apagar}>limpar lista </button>
            
         </div>
         <hr />
         <ul>

         {listaCompras.map((item, index) =>
         <>
             <li key={index}>
                 <div className="nome">
             <h5>
             {item} 
             </h5>
                 </div>
                 <div className="botoesQTd">
                     <button onClick={() => Menor(index)}>-</button>
                         {qtd[index]}
                     <button onClick={()=> Maior(index)}>+</button>
                     <button onClick={() => excluir(item)}>Excluir</button>
                 </div>
             </li>
             <hr />
         </>
             )}
             </ul>
                 </div>
                
             </main>
         </div>
     </>
     )
 }