import './pendingpay.css'


import {Link} from 'react-router-dom';
import {BsArrowRightShort} from 'react-icons/bs'



export const PendingPayments = () => {
  return (
    <div className="col-lg-5">
    <div className="card">
      <div className="card-header pb-0 p-3">
        <h6 className="mb-0">Pendientes</h6>
      </div>
      <div className="card-body p-3">
        <ul className="list-group">
          <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
            <div className="d-flex align-items-center">
              <div className="d-flex flex-column">
                <h6 className="mb-1 text-dark text-sm">Luis Javier</h6>
                <span className="text-xs">Pago de 1500 <span className="font-weight-bold"> Retrasado desde 15/02/2022</span></span>
              </div>
            </div>
            <div className="d-flex">
            <Link to={''} className="btn-link"><BsArrowRightShort className="btn-link-icon"/></Link>
            </div>
          </li>
          <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
            <div className="d-flex align-items-center">
              <div className="d-flex flex-column">
                <h6 className="mb-1 text-dark text-sm">Ana Marquez</h6>
                <span className="text-xs">Pago de 3000 <span className="font-weight-bold"> Retrasado desde 15/02/2022</span></span>
              </div>
            </div>
            <div className="d-flex">
            
            <Link to={''} className="btn-link"><BsArrowRightShort className="btn-link-icon"/></Link>
            </div>
          </li>
          <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
            <div className="d-flex align-items-center">
              <div className="d-flex flex-column">
                <h6 className="mb-1 text-dark text-sm">Maria Guzman</h6>
                <span className="text-xs">Pago de 2600 <span className="font-weight-bold"> Retrasado desde 15/02/2022</span></span>
              </div>
            </div>
            <div className="d-flex">
            <Link to={''} className="btn-link"><BsArrowRightShort className="btn-link-icon"/></Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}
