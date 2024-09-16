import { useEffect } from "react";
import authServices from "../services/authServices";
import { useNavigate } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        // perform the logout
        authServices.logout()
            .then(response => {
                alert(response.data.message);

                // redirect to the login page
                setTimeout(() => {
                    navigate('/login');
                }, 500);
            })
            .catch(error => {
                alert(error.response.data.message);

                // redirect to the login page
                setTimeout(() => {
                    navigate('/login');
                }, 500);
            })
    }, []);

  return (
    <div>Logging out...</div>
  )
}

export default Logout;