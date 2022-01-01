import { Header, Footer } from '../../components'
import { useEffect } from 'react'
import './GenericScreen.style.css'

export function GenericScreen(props) {

    useEffect(() => {
        const pageTitle = props.pageTitle || 'criada'
        document.title = `Página ${pageTitle === 'Erro' ? 'de ' : ''} ${pageTitle}`
    })

    return (
        <div className="generic-screen-body">
            <Header className="header-container" />
            <div className="main-container">
                { props.children }
            </div>
            <Footer className="footer-container" />
        </div>
    )
}