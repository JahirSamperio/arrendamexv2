import React, { useEffect } from 'react'
import './dashboardRow.css';

import { GiReceiveMoney } from 'react-icons/gi';
import { FaTasks } from 'react-icons/fa';
import { MdEmojiPeople } from 'react-icons/md';
import { TbCoins } from 'react-icons/tb';
import { BsArrowRightShort } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getTodayPayments } from '../../../../redux/actions/dates/getTodayPayments';
import { getPendings } from '../../../../redux/actions/dates/getPendings'
import { getPendingAppointment } from '../../../../redux/actions/appointments/getPendingAppointment';


export const CardOne = () => {

    // const dispatch = useDispatch();
    // const data = useSelector((state) => state.dates.todayPayment);


    // const { todayPaymentData } = data;
    // const total = todayPaymentData[0].total;


    // useEffect(() => {
    //     dispatch(getTodayPayments());
    // }, [data]);

    // useEffect(() => {
    //     console.log(total);
    // }, [])

    return (
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
                <div className="card-body p-3">
                    <div className="dashrow2">
                        <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Depósitos hoy</p>
                                <h5 className="font-weight-bolder">
                                    $ 5000
                                </h5>
                                <p className="mb-0">
                                    2023/05/04
                                </p>
                            </div>
                        </div>
                        <div className="col-4 text-end">
                            <div className="icon-shape background-gradient1">
                                <i className="ni" aria-hidden="true"><GiReceiveMoney /></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const CardTwo = () => {

    // const dispatch = useDispatch();
    // const data2 = useSelector((state) => state.dates.pending);


    // const { pendingData } = data2;
    // const total = pendingData[0].total;

    // useEffect(() => {
    //     dispatch(getPendings());
    // }, [data2]);

    // useEffect(() =>{
    // console.log(data);
    // },[])



    return (

        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
                <div className="card-body p-3">
                    <div className="dashrow2">
                        <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Pendientes</p>
                                <h5 className="font-weight-bolder">
                                    2
                                </h5>
                                <div className="mb-0">
                                    <div className="ptm">
                                        Ver más <Link to={''} className="btn-link"><BsArrowRightShort className="btn-link-icon" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 text-end">
                            <div className="icon-shape background-gradient2">
                                <i className="ni" aria-hidden="true"><FaTasks /></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const CardThree = () => {



    // const dispatch = useDispatch();

    // const {loanding,success,error,pendingAppointmentData} = useSelector((state) => state.appointments.pending);

    // useEffect(() =>{
    //     dispatch(getPendingAppointment());
    // },[]);


    // useEffect(() =>{
    //     console.log(pendingAppointmentData);
    // },[pendingAppointmentData]);

    // const {total} = pendingAppointmentData;


    return (
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
                <div className="card-body p-3">
                    <div className="dashrow2">
                        <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Citas solicitdas</p>
                                <h5 className="font-weight-bolder">
                                    2
                                </h5>
                                <p className="mb-0">
                                    Esta semana <a href="tables.html" className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto" ><i className="ni ni-bold-right" aria-hidden="true"></i></a>
                                </p>
                            </div>
                        </div>
                        <div className="col-4 text-end">
                            <div className="icon-shape background-gradient3">
                                <i className="ni" aria-hidden="true"><MdEmojiPeople /></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export const CardFour = () => {
    return (
        <div className="col-xl-3 col-sm-6">
            <div className="card">
                <div className="card-body p-3">
                    <div className="dashrow2">
                        <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Depósitos del mes</p>
                                <h5 className="font-weight-bolder">
                                    $ 15000
                                </h5>
                                <p className="mb-0">
                                    Mes
                                </p>
                            </div>
                        </div>
                        <div className="col-4 text-end">
                            <div className="icon-shape background-gradient4">
                                <i className="ni" aria-hidden="true"><TbCoins /></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const DashboardRow = () => {
    return (
        <div className="dashrow">
            <CardOne />
            <CardTwo />
            <CardThree />
            <CardFour />
        </div>


    )
}
