import "./Loader.css"; 
import "../App.css";

const Loader = () => {
    return (
        <div className="loader-container flex flex-col items-center justify-center">
            <div className="loader-logo">
                <img src="Logo.png" alt="Logo" />
            </div>
            <div className="loader-progress">
                <div className="loader-progress-bar"></div>
            </div>
        </div>
    );
};

export default Loader;
