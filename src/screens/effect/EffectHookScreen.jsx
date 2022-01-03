import { GenericScreen } from "../generic/GenericScreen"
import { useEffect } from "react"
import './EffectHookScreen.style.css'

export function EffectHookScreen() {

    // executa em cada render
    useEffect(() => {
        document.title = "Seta"
        console.log("salve")
    })


    // executa somento no primeiro render
    /*
    useEffect(() => {
        loadDataOnlyOnce()
    }, [])
    */

    return (
        <GenericScreen pageTitle="batatao">
            Exemplo simples de uso de useEffect. Olhe o console e o page title.
        </GenericScreen>
    )
}