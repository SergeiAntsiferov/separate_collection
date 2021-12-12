import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './Components/AppRouter/AppRouter';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="app">
          <AppRouter/>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
