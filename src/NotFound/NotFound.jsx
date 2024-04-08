import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found-body">
            <h2>Página no encontrada.</h2>
            <Link to="/">Volver a inicio.</Link>
        </div>
    );
};

export default NotFound;