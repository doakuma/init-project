"use client";
import React, { useState } from "react";
import { ThemeProvider, Container, createTheme } from "@mui/material";

import useTheme from "@/assets/theme";
import CustomHeader from "./CustomHeader";
import CustomMenu from "./CustomMenu";

const CustomLayout = (props) => {
  const { children, maxWidth = "xl" } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  console.debug("theme", theme);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters className="da-wrapper">
        <CustomHeader handleMenuClick={() => setMenuOpen(true)} />
        <CustomMenu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          menuInfo={menuinfo}
        />
        <>{children}</>
      </Container>
    </ThemeProvider>
  );
};

export default CustomLayout;

const menuinfo = [
  {
    label: "componentguide",
    path: "/componentGuide",
  },
  {
    label: "Starred",
    path: "/",
  },
  {
    label: "Drafts",
    path: "/",
  },
];
