import React from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("/bg-ara.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <div className="text-right md:text-left ml-auto md:ml-auto md:pr-10 max-w-xl">
        <Typography
          variant="h3"
          component="h1"
          className="text-gray-700 "
          sx={{ fontSize: "2rem" }}
        >
          {t("hero.STRATEGIC CONSULTING,")}
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          className="text-gray-700 "
          sx={{ fontSize: "2rem" }}
        >
          {t("hero.TREND ANALYSIS &")}
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          className="text-gray-700 "
          sx={{ fontSize: "2rem" }}
        >
          {t("hero.PRACTICAL SOLUTIONS")}
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          className="text-gray-700 "
          sx={{ fontSize: "2rem" }}
        >
          {t("hero.FOR TELECOMS INDUSTRY")}
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
