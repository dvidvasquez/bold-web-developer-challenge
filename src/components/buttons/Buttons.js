import { useState } from "react";
import "./Buttons.css";

export const Buttons = ({setDataName}) => {
  const [btnActive, setBtnActive] = useState('septiembre');
  const handleClick = (e) => {
    const id = e.target.id;
    setBtnActive(id);
    setDataName(id);
  }
  return (
    <>
      <div className="columns btn-content mt-1 animate__animated animate__fadeInRight">
        <div className="column has-text-centered">
          <button className={ ` btn-custom-style ${btnActive === 'hoy' && "btn-active" } ` } id="hoy" onClick={handleClick}>Hoy</button>
        </div>
        <div className="column has-text-centered">
          <button className={ ` btn-custom-style ${btnActive === 'semana' && "btn-active" } ` } id="semana" onClick={handleClick}>Esta semana</button>
        </div>
        <div className="column has-text-centered">
          <button className={ ` btn-custom-style ${btnActive === 'septiembre' && "btn-active" } ` } id="septiembre" onClick={handleClick}>Septiembre</button>
        </div>
      </div>
    </>
  )
}
