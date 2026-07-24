import { Routes, Route} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Pizza from "./pages/pizza.jsx";
import Home from "./pages/home.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pizza" element={<Pizza />} />
            </Routes>

            <Analytics />
        </>
    )
}

export default App