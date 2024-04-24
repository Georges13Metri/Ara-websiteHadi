import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static" color="default" className="bg-white ">
      <Toolbar>
        <Container maxWidth="md">
          <Typography variant="body1" color="inherit" className="text-gray-500">
            © 2024. All rights reserved.
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
