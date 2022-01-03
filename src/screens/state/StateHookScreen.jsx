import { GenericScreen } from '../generic/GenericScreen'
import { useState } from 'react'
import { Button } from '../../components'
import './StateHookScreen.style.css'

export function StateHookScreen() {

    const [ counter, setCounter ] = useState(0)
    const [ inputText, setInputText ] = useState('')

    const incrementaValor = () => {
        setCounter(counter + 1)
    } 

    const atualizaInput = (event) => {
        setInputText(event.target.value)
    }

    return (
        <GenericScreen>
            <div className="state-screen-main-container">
                <div className="text-input-container">
                    <div className="usable-input-container">
                        <label htmlFor="text-input-state" className="text-input-label">Digite algo aqui</label>
                        <input id="text-input-state" type="text" className="text-input"  onChange={atualizaInput}/>
                    </div>
                    <div className="disabled-input-container">
                        <span className="text-input-label">Você digtou</span>
                        <input className="disabled-input-text" disabled="true"/>
                    </div>
                </div>
                <div className="counter-container">
                    <div className="display-counter-number">{counter}</div>
                    <Button handleButton={incrementaValor}>Incrementar</Button>
                </div>
            </div>
        </GenericScreen>
    )
}