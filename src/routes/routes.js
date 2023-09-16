import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../home/home";
import { Team } from "../pages/team";

export const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/our-team" Component={Team} />
      </Routes>
    </Router>
  );
};
