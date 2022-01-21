import './styles.css'
import CarCardImg from '../../assets/images/car-card.png';

const CarCard = () => {
    return(
        <>
        <div className="car-card">
            <img src={CarCardImg} alt="Imagem do carro"/>
            <p className="car-title">Audi Supra TT</p>
            <p className="car-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            <button className="btn button-custom">Comprar</button>
        </div>
        </>
    );
}

export default CarCard