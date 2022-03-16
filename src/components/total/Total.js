
import "./Total.css"

export const Total = ({name,ventas}) => {
  const arrayTotalVentas = ventas.map(item => parseFloat(item.monto.totalMonto) );
  const totalVentas = arrayTotalVentas.reduce( (previousValue, currentValue) => previousValue + currentValue);
  return (
    <>
      <div className="card animate__animated animate__fadeInLeft">
        <header className="card-header total-header">
          <p className="card-header-title total-title">
            Total de ventas de {name}
            <span className="icon ml-6">
              <i className="fas fa-info-circle"></i>
            </span>
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            <h1 className="total-price has-text-centered">${totalVentas}</h1>
            <p className="small-text has-text-centered">{name}, 2020</p>
          </div>
        </div>
      </div>
    </>
  )
}
