import { useState } from 'react'

import carro from '../assets/images/carro 2.png'
import './calc.scss'


export default function Calc(){
    const [valorTotal, setValorTotal] = useState(0)
    const [parcelas, setParcelas] = useState(0)
    const [jurosMensais, setJurosMensais] = useState(0)

    const [valorTotalResult, setValorTotalResult] = useState(0)
    const [parcelaResult, setParcelaResult] = useState(0)


    const Calcular = () =>{
        let taxa = jurosMensais / 100;
  let juros = valorTotal * taxa * parcelas;
  let montante = valorTotal + juros;

  setParcelaResult((montante / parcelas).toFixed(2));
  setValorTotalResult(montante);
        

    }


    return (
        <div className='main1'>
        <div className='mainCalc'>
            <div className='carro'>
            <img src={carro} />
            </div>

            <div className='tela'>

            <label>
            <b> Valor Total </b>
            <input type="number" onChange={e => setValorTotal(e.target.value)} id='input1' />
            </label>

            <div className='s2'>
            <label> 
            <b> Parcelas </b>
            <input type='number' onChange={e => setParcelas(e.target.value)} />
            </label>

            <label> 
            <b> juros Mensais </b>
            <input type='number' onChange={e => setJurosMensais(e.target.value)} />
            </label>
            </div>
                <button onClick={Calcular}>
                    Calcular
                </button>
            <div>
            Parcela: {parcelaResult}
            </div>
            valor total: {valorTotalResult}  
        </div>
            </div>
    </div>
        ) 
}