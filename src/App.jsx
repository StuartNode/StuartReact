import { Routes, Route} from "react-router-dom";
import Pizza from "./pages/pizza.jsx";
import Home from "./pages/home.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza" element={<Pizza />} />
        </Routes>
    )
}

export default App