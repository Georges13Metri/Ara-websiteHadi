"use client";
import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from "@mui/material";
import {
  Menu as MenuIcon,
  Language as LanguageIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import NavbarItem from "./NavbarItem";
import enTranslations from "../../language/EN.json";
import arTranslations from "../../language/AR.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import MobileMenu from "./MobileMenu";
import { menuItems } from "../../components/Navbar/menuItems";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    ar: { translation: arTranslations },
  },
  lng: Cookies.get("language") || "en",
  interpolation: { escapeValue: false },
});

const Navbar = () => {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(
    Cookies.get("language") || "en"
  );
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 50);
  }, []);

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLanguageMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
    Cookies.set("language", language);
    handleLanguageMenuClose();
  };

  return (
    <div>
      <AppBar position="fixed" color="default" className="top-0 z-80 h-20">
        <Toolbar className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo-ara.png" alt="Logo-ara" className="h-16 mr-2" />
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              className="hover:transition-all hover:duration-500 hover:-scale-x-100 cursor-pointer text-2xl md:hidden"
              onClick={handleMenuToggle}
              sx={{ display: { sm: "inline-flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div className="flex-grow hidden md:flex space-x-4">
            {menuItems.map((item, index) => (
              <NavbarItem
                key={index}
                href={item.href}
                label={t(item.label)}
                menuItems={item.menuItems}
              />
            ))}
          </div>
          <div>
            <IconButton
              aria-controls="language-menu"
              aria-haspopup="true"
              onClick={handleLanguageMenuOpen}
              color="inherit"
            >
              <LanguageIcon />
              <span className="text-s">
                {currentLanguage === "en" ? "English" : "عربي"}
              </span>
            </IconButton>

            <Menu
              id="language-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleLanguageMenuClose}
            >
              <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
              <MenuItem onClick={() => changeLanguage("ar")}>عربي</MenuItem>
            </Menu>
          </div>
          <MobileMenu
            menuItems={menuItems}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            t={t}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
