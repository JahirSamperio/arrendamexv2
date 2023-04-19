import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {FormsPage} from './FormsPage'



const navigate = useNavigate();

const { loading, success, error, userData } = useSelector((state) => state.users.new);

const { user_id, names, email, password } = userData;


useEffect(() => {
    if (success && userData) {

    //   localStorage.setItem('user_id', user_id);
      localStorage.setItem('names', names);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('telefono', telefono);

      window.location.reload();
    }

  }, [success, userData])

  if (success && userData) {
    navigate('/Home');

  }

  return (
    <>
      <FormsPage/>
    </>
  );