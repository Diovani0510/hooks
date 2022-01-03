import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ErrorScreen, HomeScreen, StateHookScreen, ReducerHookScreen, EffectHookScreen, RefHookScreen } from './screens'

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <HomeScreen /> } />
                <Route path="/state" element={ <StateHookScreen /> } />
                <Route path="/reducer" element={ <ReducerHookScreen /> } />
                <Route path="/effect" element={ <EffectHookScreen /> } />
                <Route path="/ref" element={ <RefHookScreen /> } />
                <Route path="*" element={ <ErrorScreen />} />
            </Routes>
        </Router>
    )
}