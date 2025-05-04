import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import QuestionsPage from "./pages/QuestionsPage";
import ContactPage from "./pages/ContactPage";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faq" element={<QuestionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
