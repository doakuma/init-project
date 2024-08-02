import { useRecoilState } from "recoil";
import { createTheme } from "@mui/material";
import { lightThemes, darkThemes } from "./palette";
import { settingsState } from "@/store/themeStore";

const themePalette = (mode) => {
  if (mode === "dark") {
    return { ...darkThemes };
  }
  return { ...lightThemes };
};

const useTheme = () => {
  const [settings] = useRecoilState(settingsState);

  const { theme, elFontSize } = settings;
  let initTheme = createTheme({
    palette: {
      ...themePalette(theme),
    },
    typography: {},
  });

  initTheme = createTheme({
    ...initTheme,
    components: {
      MuiDialog: {
        styleOverrides: {
          root: {
            fontFamily: "Pretendard",
          },
          paper: {
            margin: 0,
            maxHeight: "unset",
            maxWidth: "unset",
            backgroundColor: initTheme.palette.bg.base,
            borderRadius: 16,
          },
          paperWidthXs: {
            width: 300,
            minHeight: 200,
            "& .MuiDialogTitle-root": {
              background: initTheme.palette.bg.base,
              color: initTheme.palette.text.black,
            },
          },
          paperWidthSm: {
            width: 464,
            minHeight: 400,
          },
          paperWidthLg: {
            width: 940,
            minHeight: 400,
          },
          paperWidthXl: {
            width: 1248,
            height: 800,
          },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 0,
            paddingLeft: 24,
            background: initTheme.palette.components.Popup_bg,
            color: initTheme.palette.text.white,
            height: 62,
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            paddingInline: 24,
            paddingBlock: 20,
            "&.k-modal-alert-content": {
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              minHeight: 48,
              gap: 8,
              "&.k-modal-alert-center": {
                textAlign: "center",
              },
            },
            "& .k-modal-alert-detail": {
              wordBreak: "keep-all",
            },
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            // display: "block",
            padding: `0 ${24}px ${24}px`,
            backgroundColor: initTheme.palette.bg.base,
            alignItems: "stretch",
            "& .util-first": {
              marginRight: "auto",
            },
            "& .MuiButton-root": {
              minWidth: 80,
              height: 40,
              fontSize: 16,
              lineHeight: 1.5,
            },
            "&.k-modal-action-center": {
              justifyContent: "center",
            },
          },
        },
      },
    },
  });
  return {
    theme: initTheme,
  };
};

export default useTheme;
