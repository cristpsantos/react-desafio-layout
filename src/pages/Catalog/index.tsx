import "./styles.css";
import CarCard from "../../components/CarCard";

const Catalog = () => {
  return (
    <>
      <div className="container align-item-center">
        <div className="card-search">
          <div className="form-custom">
            <input
              className="input-search"
              type="search"
              placeholder="Digite sua busca"
              aria-label="Search"
            />
            <button className="btn btn-search-custom" type="submit">
              Buscar
            </button>
          </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4"><CarCard /></div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4"><CarCard /></div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4"><CarCard /></div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4"><CarCard /></div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4"><CarCard /></div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4"><CarCard /></div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4"><CarCard /></div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4"><CarCard /></div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4"><CarCard /></div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
