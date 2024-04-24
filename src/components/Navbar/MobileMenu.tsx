import React from "react";
import {
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon,
} from "@mui/material";
import {
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from "@mui/icons-material";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";

const MobileMenu = ({ menuItems, menuOpen, setMenuOpen, t }: any) => {
  const [openSubmenu, setOpenSubmenu] = React.useState<number | null>(null);

  const handleSubmenuToggle = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <Dialog fullScreen open={menuOpen} onClose={() => setMenuOpen(false)}>
      <DialogTitle>
        <div className="flex justify-center items-center">
          <IconButton onClick={() => setMenuOpen(false)}>
            <HighlightOffSharpIcon className="text-black" />
          </IconButton>
        </div>
      </DialogTitle>
      <div className="flex flex-col items-center justify-center h-full ">
        <List className=" w-full flex flex-col">
          {menuItems.map((item: any, index: number) => (
            <React.Fragment key={index}>
              <ListItem
                button
                onClick={() => handleSubmenuToggle(index)}
                className="py-2 px-4 transition-colors duration-300"
              >
                <div className="flex justify-center items-center mx-auto">
                  <ListItemText
                    primary={t(item.label)}
                    className={
                      openSubmenu === index ? "text-gray-600" : "text-black"
                    }
                  />
                  {item.menuItems && (
                    <ListItemIcon>
                      {openSubmenu === index ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </ListItemIcon>
                  )}
                </div>
              </ListItem>
              <Collapse in={openSubmenu === index} timeout="auto" unmountOnExit>
                <List component="div" disablePadding className="bg-gray-200">
                  {item.menuItems &&
                    item.menuItems.map((subItem: any, subIndex: number) => (
                      <ListItem
                        key={subIndex}
                        onClick={() => setMenuOpen(false)}
                        className="py-2 px-4"
                      >
                        <ListItemText primary={t(subItem.label)} />
                      </ListItem>
                    ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </div>
    </Dialog>
  );
};

export default MobileMenu;
