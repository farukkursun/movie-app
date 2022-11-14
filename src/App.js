// import AuthContext from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContext from "./context/AuthContext";
import Router from "./router/Router";
function App() {
  return (
    <div>
      <AuthContext>
        <Router />
      </AuthContext>
    </div>
  );
}

export default App;
