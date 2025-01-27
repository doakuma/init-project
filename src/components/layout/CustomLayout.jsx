"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider, Container, createTheme } from "@mui/material";

import useTheme from "@/assets/theme";
import CustomHeader from "./CustomHeader";
import CustomMenu from "../navigation/CustomMenu";

const CustomLayout = (props) => {
  const { children, maxWidth = "xl" } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();
  const menuItem = menuinfo?.find((menu) => menu.path === pathname);
  const label = menuItem?.label;

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters className="da-wrapper">
        <CustomHeader title={label} handleMenuClick={() => setMenuOpen(true)} />
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
    label: "pageList",
    path: "/pageList",
  },
  {
    label: "componentguide",
    path: "/componentGuide",
  },
  {
    label: "Drafts",
    path: "/",
  },
];
