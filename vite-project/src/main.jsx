import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/custom/Header.jsx";
import Signin from "./auth/index.jsx";
import Dashboard from "./dashboard/index.jsx";
import Home from "./components/custom/home.jsx";
import Invalid404 from "./components/custom/Invalid404.jsx";
import EditResume from "./dashboard/resume/[resumeId]/edit/index.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth/sign-in" element={<Signin />}></Route>
        <Route path="*" element={<Invalid404/>}></Route>
        <Route element={<App />}>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="dashboard/resume/:resumeId/edit" element={<EditResume />}></Route>
        </Route>
      </Routes>
    </Router>
  </ClerkProvider>
);
