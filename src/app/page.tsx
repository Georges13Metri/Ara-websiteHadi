"use client";
import { useState, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import ContactUs from "@/components/ContactUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [languageDirection, setLanguageDirection] = useState(
    i18n.language === "ar" ? "rtl" : "ltr"
  );

  useEffect(() => {
    // Update language direction when language changes
    const updateLanguageDirection = () => {
      setLanguageDirection(i18n.language === "ar" ? "rtl" : "ltr");
    };
    updateLanguageDirection();

    // Subscribe to language change events
    i18n.on("languageChanged", updateLanguageDirection);

    // Cleanup subscription on unmount
    return () => {
      i18n.off("languageChanged", updateLanguageDirection);
    };
  }, []);

  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <div dir={languageDirection}>
          <Navbar />
          <Routes>
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Hero />
          <Hero2 />
          <Hero3 />
          <Footer />
        </div>
      </I18nextProvider>
    </BrowserRouter>
  );
};

export default App;
