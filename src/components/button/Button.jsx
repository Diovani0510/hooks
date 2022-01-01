import './Button.style.css'

export function Button(props) {
    return <button className="button-component" onClick={props.handleButton}>{props.children}</button>
}