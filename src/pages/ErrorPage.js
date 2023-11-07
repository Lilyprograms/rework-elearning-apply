import "../assets/styles/ErrorPage.css";
import { Link } from "react-router-dom";
import ErrorImg from "../assets/images/error-img.svg";

export default function ErrorPage() {
  return (
    <div className="error__page">
      <div className="container error_page-container spaceTop">
        <div className="error_page-content">
          <img src={ErrorImg} alt="Error Page" />
          <h3>No Results Found</h3>
          <p></p>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    </div>
  );
}
