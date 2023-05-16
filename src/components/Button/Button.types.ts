import { ButtonProps } from "@mui/material";
import React from "react";

export interface BtnProps extends ButtonProps {
  children: React.ReactNode;
  textColor?: string;
}

export interface TextType {
  textColor?: string;
}
