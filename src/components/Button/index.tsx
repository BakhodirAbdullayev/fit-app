import React from "react";
import { BtnProps } from "./Button.types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ButtonT from "@mui/material/Button";
import { BtnWrapper } from "./Button.styles";
import { lightLime } from "../../styles/variables";

const theme = createTheme({
  palette: {
    primary: {
      main: lightLime, // O'zingizning istagan rangni kiritishingiz mumkin
    },
  },
});

const Button = ({ textColor, children, ...all }: BtnProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonT {...all}>
        <BtnWrapper textColor={textColor}>{children}</BtnWrapper>
      </ButtonT>
    </ThemeProvider>
  );
};

export default Button;
