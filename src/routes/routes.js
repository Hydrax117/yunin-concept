import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../home/home";
import { Team } from "../pages/team";
import { About } from "../pages/about";

export const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/our-team" Component={Team} />
        <Route path="/about" Component={About} />
      </Routes>
    </Router>
  );
};
