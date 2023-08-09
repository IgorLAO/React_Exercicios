import { useState } from 'react'
import './sorv.scss'

export default function Sorveteria(){
    const [produto, setProduto] = useState('')
    const [preco, setPreco] = useState(0)
    const [produtos, setProdutos] = useState([])
    const adicionarProduto = (index) =>{
        const prod = {
            id:index,
            nmProduto: produto,
            preco: preco
        }
        setProdutos([...produtos, prod])

        setPreco(0)
        setProduto('')
 
    }
    
    const Total = () =>{
        let soma = 0
        for(let i  = 0; i < produtos.length; i++){
            soma  = soma + produtos[i].preco
        }

        return soma.toFixed(2)
    }
    
    
    return(
        <div className="mainSorv">
            <main>

            <div className='banner'>
                
                <span> Sorveteria </span>
            </div>

            <div className='tela'>
                <div className='entrada'>
            <input type="text" placeholder="Digite o nome do produto"  value={produto} onChange={e => setProduto(e.target.value) } />
            <div className='preco'>
            <span>R$</span>
            <input type="number" placeholder="digite o preco" value={preco} onChange={e => setPreco(Number(e.target.value))} />
            </div>
            <button onClick={adicionarProduto}><b>Adicionar</b></button>
            </div>
            <div className='listaTotal'>
                <h4> Lista de Compras </h4>
                <h5> Total: R$ {Total()} </h5>
            </div>
            <div>
               
                {produtos.map((item, index  ) => (
                    <div className='cards' key={index}>
                    <h5> {item.nmProduto} </h5>
                    <h5> R$ {item.preco.toFixed(2)}</h5>
                    </div>
                ))}


            </div>
                </div>
                </main>
        </div>
    )
}