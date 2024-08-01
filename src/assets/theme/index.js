import { createTheme } from "@mui/material";

const useTheme = () => {
  const initTheme = createTheme();

  return {
    theme: initTheme,
  };
};

export default useTheme;
