import { useNavigate } from "react-router-dom";
import { Contact } from "../../ui";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogin = () => {
    login("Juan Corso");
    navigate("/", {
      replace: true,
    });
  };
  return (
    <>
      <Contact />
      <div className="container m-5">
        <h1>Login</h1>
        <hr />
        <button className="btn btn-primary" onClick={onLogin}>
          Login
        </button>
      </div>
    </>
  );
};
