import About from "./components/Home/About";
import Header from "./components/Header/Header";
import Banner from "./components/Home/Banner";
import Workout from "./components/Home/Workout";
import './scss/style.scss';
import Footer from "./components/Footer/Footer";


export default function App() {
  return (
    <div id="app">
      <Header/>
      <Banner />
      <About />
      <Workout/>
      <Footer/>
    </div>
  )
}