// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./components/LandingPage";
// import Login from "./components/Login";

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<LandingPage />} />
//                 <Route path="/login" element={<Login />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Placeholder title="Register Page" />} />

        {/* Placeholder Pages - These will show simple messages */}
        <Route path="/security" element={<Placeholder title="Security Page" />} />
        <Route path="/how-it-works" element={<Placeholder title="How It Works?" />} />
        <Route path="/elections" element={<Placeholder title="Elections" />} />
        <Route path="/contact" element={<Placeholder title="Contact Us" />} />
      </Routes>
    </Router>
  );
}

// Placeholder component for missing pages
const Placeholder = ({ title }) => (
  <div style={styles.container}>
    <h1>{title}</h1>
    <p>This page is under construction.</p>
  </div>
);

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    color: "white",
    backgroundColor: "#14192D",
    minHeight: "100vh",
  },
};

export default App;
