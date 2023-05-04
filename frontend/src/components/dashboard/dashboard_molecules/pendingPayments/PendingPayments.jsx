import './pendingpay.css'


import { Link } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs'
import { getPendingPayment } from '../../../../redux/actions/dates/getPendingPayments';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';



export const PendingPayments = () => {

  const dispatch = useDispatch();

  const { success, pendingPaymentData } = useSelector((state) => state.dates.pendingPayments);

  useEffect(() => {
    dispatch(getPendingPayment());
  }, [])

  return (
    <div className="col-lg-5">
      <div className="card">
        <div className="card-header pb-0 p-3">
          <h6 className="mb-0">Pendientes</h6>
        </div>
        <div className="card-body p-3">
          <ul className="list-group">

            {pendingPaymentData.map((element, index) => {

            })}

          </ul>
        </div>
      </div>
    </div>
  )
}




const PendingPayment = ({nombre= '',costo='',fecha = ''}) => {

  return (
    <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
      <div className="d-flex align-items-center">
        <div className="d-flex flex-column">
          <h6 className="mb-1 text-dark text-sm">{nombre}</h6>
          <span className="text-xs">{`Pago de ${costo}`} <span className="font-weight-bold"> {`Retrasado desde ${fecha}`}</span></span>
        </div>
      </div>
      <div className="d-flex">
        <Link to={''} className="btn-link"><BsArrowRightShort className="btn-link-icon" /></Link>
      </div>
    </li>
  )
}