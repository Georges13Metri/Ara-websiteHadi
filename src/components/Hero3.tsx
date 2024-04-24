import React from "react";
import { useTranslation } from "react-i18next";
import { Typography, Container } from "@mui/material";

const Hero2 = () => {
  const { t } = useTranslation();
  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url("/bg-ara-3.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          className="text-white"
        >
          {t("hero3.hero3title")}
        </Typography>
      </Container>
    </div>
  );
};

export default Hero2;
