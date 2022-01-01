import { GenericScreen } from '../generic/GenericScreen'
import './HomeScreen.style.css'

export function HomeScreen() {
    return (
        <GenericScreen pageTitle="Home">
            <h1 className="homepage-title">Exemplos Práticos Hooks</h1>
            <div className="homepage-body">
                <p>
                    Esta é uma aplicação com o propósito de estudar os hooks do react, bem como o uso de routers e demais funcionalidades da Lib.
                </p>
                <img src={ require('../../assets/diovani.png')} />
            </div>
        </GenericScreen>
    )
}