import Header from "./components/Header";
import background from './assets/background.png'
import './App.css'

export default function App() {
  return (
    <div id="app">
      <Header/>
      <img className='background' src={background} alt="" />
    </div>
  )
}