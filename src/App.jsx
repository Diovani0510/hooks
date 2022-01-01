import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ErrorScreen, HomeScreen, StateHookScreen } from './screens'

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <HomeScreen /> } />
                <Route path="/state" element={ <StateHookScreen /> } />
                <Route path="*" element={ <ErrorScreen />} />
            </Routes>
        </Router>
    )
}