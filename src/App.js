// import AuthContext from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import AuthContext from "./context/AuthContext";
import Router from "./router/Router";
function App() {
  return (
    <div>
      <AuthContext>
        <Router />
        <ToastContainer/>
      </AuthContext>
    </div>
  );
}

export default App;
