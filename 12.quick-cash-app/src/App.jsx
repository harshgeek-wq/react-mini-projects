import QuickCash from './components/QuickCash'
import './App.css'

const denominationsList = [
  { id: 1, value: 50 },
  { id: 2, value: 100 },
  { id: 3, value: 200 },
  { id: 4, value: 500 },
]

const App = () => {
  return (
    <div className="app-container">
      <QuickCash denominationsList={denominationsList} />
    </div>
  )
}

export default App
