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
                    <label htmlFor="text-input-state" className="text-input-label">Digite algo aqui</label>
                    <input id="text-input-state" type="text" className="text-input"  onChange={atualizaInput}/>
                    <input disabled="true"/>
                </div>
                <div className="counter-container">
                    <div className="display-counter-number">{counter}</div>
                    <Button handleButton={incrementaValor}>Incrementar</Button>
                </div>
            </div>
        </GenericScreen>
    )
}