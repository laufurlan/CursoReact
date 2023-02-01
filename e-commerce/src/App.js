import './App.css';
import "./styles/styles_components/main.css"
import NavBar from "./components/header/NavBar";
import Footer from './components/footer/Footer';
import ProductCard from './components/main/ProductCard';
import Img2 from "./components/img/Img2.png"
import Img1 from "./components/img/Img1.jpg"


function App() {
  return (
    <div>
   <NavBar/>
   <Footer/>
   <div>
      <h1 className='title'>Productos Recomendados</h1>
    </div>
    <div className='flex-container'>
       <ProductCard
          title="Body Chain"
          img={Img2}
          price={2000}
        />
             <ProductCard
          title="Body Chain"
          img={Img2}
          price={2000}
        />
             <ProductCard
          title="Body Chain"
          img={Img2}
          price={2000}
        />
             <ProductCard
          title="Body Chain"
          img={Img2}
          price={2000}
        />

    </div>
  </div>
    
  );
}

export default App;
