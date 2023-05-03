import './App.css';

import Home from "./pages/Home";
import Footer from "./components/Footer";
import Letters from "./pages/Letters";

function App() {
  return (
    <div className='backgroundTheme'>
      <Home/>
      <Letters/>
      <Footer/>
    </div>
  );
}

export default App;
