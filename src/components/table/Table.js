import './Table.css'
export const Table = ({name,ventas}) => {
  return (
    <>
      <div className="card animate__animated animate__zoomIn">
        <header className="card-header table-header">
          <p className="card-header-title total-title">
            Total de ventas de {name}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            <table className="table">
              <thead>
                <tr>
                  <th>Transacción</th>
                  <th>Fecha y hora</th>
                  <th>Metodo de pago</th>
                  <th>ID Transacción Bold</th>
                  <th>Monto</th>
                </tr>
              </thead>
              <tbody>
                {
                  ventas.map((item)=>{
                    const {transaccion, tiempo, metodoPago, idTransaccion,monto} = item;
                    const {totalMonto,deduccion,montoDeduccion} = monto;
                    return <tr key={idTransaccion}>
                      <td className='color-azul'>{transaccion}</td>
                      <td className='color-gris-claro'>{tiempo}</td>
                      <td className='color-gris-claro'>
                        <span className="icon">
                          <i className="fab fa-cc-mastercard"></i>
                        </span>
                        {metodoPago}
                      </td>
                      <td className='color-gris-claro'>{idTransaccion}</td>
                      <td>
                        <span className='color-azul'>
                          ${totalMonto}
                        </span>
                        {
                          deduccion && 
                            <>
                              <span className='is-size-7 color-gris-claro is-block'>Deducción Bold</span>
                              <span className='is-size-7 monto-deduccion color-rojo is-block'>-${montoDeduccion}</span>
                            </>

                        } 
                      </td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
