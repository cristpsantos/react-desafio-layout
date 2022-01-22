import './styles.css'
import CarCard from '../../assets/images/car-header.png';
import { Link } from 'react-router-dom';
const Home = () => {
    return(
        <>
            <div className="container">
               <div className="card-custom">
                   <div className="container-fluid">
                       <div className="row">
                           <div className="col-12 col-xl-6 order-xl-2">
                               <img className="car-home" src={CarCard} alt="Carro home" />
                           </div>
                           <div className="col-12 col-xl-6 order-xl-1 text-custom">
                               <p className="text-title">O carro perfeito para você</p>
                               <p className="text-description">Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="card-button-custom">
                   <div className="container">
                       <div className="row align-items-center">
                           <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                               <Link to="/catalog">
                                    <button className="btn button-custom">VER CATÁLOGOS</button>
                               </Link>
                           </div>
                           <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <p className="description-custom">Comece agora a navegar</p>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        </>
    );
}
export default Home;