import { GenericScreen } from '../generic/GenericScreen'
import { Button } from '../../components'
import { useNavigate } from 'react-router-dom'
import './ErrorScreen.style.css'

export function ErrorScreen() {

    const navigate = useNavigate()

    const voltaNavegacao = () => {
        navigate('/')
    }

    return (
        <GenericScreen pageTitle="Erro">
            <div className="error-screen-body-container">
                <h1 className="error-screen-message">Ops! A página que você está procurando não existe!</h1>
                <div className="error-screen-button"><Button handleButton={voltaNavegacao}>Voltar</Button></div>
            </div>
        </GenericScreen>
    )
}