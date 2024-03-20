
import Navbar from "./components/navbar";
import Routecontroller from "./routes/routecontroller";
import "./style/global.scss"
import Footer from "./components/footer";
function App() {
  return (
    <div className="container">
      <Navbar/>
      <Routecontroller/>
      <Footer/>
    </div>
  );
}

export default App;
