import './App.css';

import Home from "./pages/Home";
import Footer from "./components/Footer";
import Letters from "./pages/Letters";
import LettersForm from "./pages/LettersForm";

function App() {
  return (
    <div className='backgroundTheme'>
      <Home/>
      <Letters/>
      <LettersForm/>
      <Footer/>
    </div>
  );
}

export default App;
