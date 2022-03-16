import { useState } from "react"
import './Filter.css'
export const Filter = () => {
  const [showFilter, setShowFilter] = useState(false)
  const handleClick = (e)=>{
    showFilter ? setShowFilter(false) : setShowFilter(true);
  }

  if(showFilter) {
    return (
    <>
      <div className="columns">
        <div className="column is-5 is-offset-7">
          <div className="card animate__animated animate__zoomIn">
          <header className="card-header filter-header">
            <p className="card-header-title is-justify-content-center color-azul">
              FILTRAR
            </p>
            <span className="icon mt-3 mr-2 color-azul filter-close" onClick={handleClick}>
                <i className="fas fa-times"></i>
              </span>
          </header>
          <div className="card-content no-padding-top">
            <div className="content">
              <div className="control">
                <label className="radio color-azul">
                  <input type="radio" name="filter" />
                  Cobro con datafono
                </label>
                <label className="radio color-azul">
                  <input type="radio" name="filter" />
                  Cobros con link de pago
                </label>
                <label className="radio color-azul">
                  <input type="radio" name="filter" />
                  Ver todos
                </label>
              </div>
              <button className="filter-btn mt-3">Aplicar</button>
            </div>
          </div>
          </div>
        </div>
      </div>
      </>
      )
    }else{
      return (<> 
      <div className="columns">
        <div className="column has-text-right">
          <button className="button color-azul animate__animated animate__fadeIn" onClick={handleClick}>
            Filtrar 
            <span className="icon ml-6">
              <i className="fas fa-filter"></i>
            </span>
          </button>
        </div>
      </div>
      </>)
    }
}
