import { Routes, Route} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Pizza from "./pages/pizza.jsx";
import Home from "./pages/home.jsx";
import CountDown from "./pages/countdown.jsx";
import NotFound from "./pages/notfound.jsx";
import Project from "./pages/project.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/pizza" element={<Pizza />} />
                <Route path="/Project" element={<Project />} />
                <Route path="/countdown" element={<CountDown />} />
            </Routes>

            <Analytics />
            <SpeedInsights />
        </>
    )
}

export default App