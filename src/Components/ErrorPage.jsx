import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "blue",
};

const ErrorPage = () => {
  return (
    <section className="errorpage-container">
      <h1>404 Error!</h1>
      <p>There's nothing here. </p>
      <p>
        <Link style={linkStyle} className="errorpage-link" to="/">
          GO HOME
        </Link>
      </p>
    </section>
  );
};

export default ErrorPage;
