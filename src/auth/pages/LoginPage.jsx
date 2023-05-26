import { useNavigate } from "react-router-dom";
import { Contact } from "../../ui";

export const LoginPage = () => {
  const navigate = useNavigate();
  const onLogin = () => {
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
