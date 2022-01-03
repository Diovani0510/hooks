import { GenericScreen } from '../generic/GenericScreen'
import { Button } from '../../components'
import { useReducer } from 'react'
import './ReducerHookScreen.style.css'

export function ReducerHookScreen() {

    const reducer = (state, action) => {
        switch(action.type) {
            case "increment": 
                return {count: state.count + 1, showText: state.showText}
            case "toggleShowText": 
                return {count: state.count, showText: !state.showText}
            default:
                return state
        }
    }

    const [ state, dispatch ] = useReducer(reducer, {count: 0, showText:true})

    return (
        <GenericScreen>
            <h1>{state.count}</h1>
            <Button handleButton={() => {
                dispatch({type: 'increment'})
                dispatch({type: 'toggleShowText'})
                }}>Click Here</Button>
            {state.showText && <p>This is a text</p>}
        </GenericScreen>
    )
}