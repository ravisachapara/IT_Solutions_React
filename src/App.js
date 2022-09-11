import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import '../src/Components/Styled/Style.css'
import { useEffect } from 'react';
import MainRouter from './Components/Layout/MainRouter';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <MainRouter />
    </div>
  );
}

export default App;
