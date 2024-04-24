import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import {
  ArrowDropDown as ArrowDropDownIcon,
  ArrowDropUp as ArrowDropUpIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface NavbarItemProps {
  label: string;
  href?: string;
  menuItems?: { label: string; href: string }[];
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  label,
  href,
  menuItems = [],
}) => {
  const { t } = useTranslation();
  const hasMenuItems = menuItems && menuItems.length > 0;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {hasMenuItems ? (
        <Button
          className="text-black"
          onClick={handleMenuOpen}
          endIcon={
            menuOpen ? (
              <ArrowDropUpIcon style={{ transition: "transform 0.2s" }} />
            ) : (
              <ArrowDropDownIcon style={{ transition: "transform 0.2s" }} />
            )
          }
          color="inherit"
          style={{ width: "auto", padding: "0 16px" }}
        >
          {t(label)}
        </Button>
      ) : (
        <Button
          className="text-black"
          component={href ? Link : "button"}
          to={href}
          color="inherit"
          style={{ width: "auto", padding: "0 16px" }}
        >
          {t(label)}
        </Button>
      )}
      {hasMenuItems && (
        <Menu
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }} // Set anchor origin to bottom left
          transformOrigin={{ vertical: "top", horizontal: "left" }} // Set transform origin to top left
          className="mt-2"
        >
          {menuItems.map((item, index) => (
            <MenuItem key={index} className="w-full ">
              <Link
                to={item.href}
                className="flex items-center"
                style={{ whiteSpace: "nowrap" }}
              >
                {t(item.label)}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

export default NavbarItem;
