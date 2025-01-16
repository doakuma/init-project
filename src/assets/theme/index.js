import { useRecoilState } from "recoil";
import { createTheme } from "@mui/material";
import { lightThemes, darkThemes } from "./palette";
import { settingsState } from "@/store/themeStore";
import "../style/variable.scss";

const themePalette = (mode) => {
  if (mode === "dark") {
    return { ...darkThemes };
  }
  return { ...lightThemes };
};

const ratio = 2;

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
      // Dialog
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
      // Tabs
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: initTheme.palette.bg.fill.primary,
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            // minWidth: 200,
            // textTransform: "none",
            // backgroundColor: initTheme.palette.components.Tab_bg,
            // borderColor: initTheme.palette.border.secondary,
            // borderWidth: 1,
            // borderBottomWidth: 0,
            // borderStyle: "solid",
            // borderTopLeftRadius: 6,
            // borderTopRightRadius: 6,
            fontSize: 14,
            paddingBlock: 8,
            minHeight: 40,
            fontWeight: 600,
            "&:hover": {
              // color: initTheme.palette.text.primary,
            },
            "&.Mui-selected": {
              // borderColor: initTheme.palette.bg.fill.primary,
              // backgroundColor: initTheme.palette.bg.fill.primary,
              color: initTheme.palette.element.brand.primary,
              "&.Mui-disabled": {
                backgroundColor: initTheme.palette.bg.disabled,
                borderColor: initTheme.palette.border.disabled,
              },
            },
            "&.Mui-disabled": {
              color: initTheme.palette.text.disabled,
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            minWidth: 150,
          },
        },
      },
      // Inputs
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: initTheme.palette.bg.base,
          },
          input: {
            padding: "8px 12px",
          },
        },
      },
      MuiDateCalendar: {
        styleOverrides: {
          root: {
            "&.da-scheduler": {
              width: "auto",
              height: "auto",
              maxHeight: 336 * ratio,
              ".MuiDayCalendar-header": {},
              ".MuiDayCalendar-weekDayLabel": {
                width: `calc(36px * ${ratio})`,
                height: `calc(40px * ${ratio})`,
                margin: 0,
                border: "1px solid #eaeaea",
                borderRightWidth: 0,
                borderBottomWidth: 0,
                "&:last-of-type": {
                  borderRightWidth: 1,
                },
              },
              ".MuiDayCalendar-slideTransition": {
                minHeight: 240 * ratio,
              },
              ".MuiDayCalendar-monthContainer": {
                display: "flex",
                flexDirection: "column",
              },
              ".MuiDayCalendar-weekContainer": {
                margin: 0,
                "&:last-of-type > div": {
                  borderBottomWidth: 1,
                },
              },
              ".MuiDayCalendar-weekContainer > div": {
                width: `calc(36px * ${ratio})`,
                height: `calc(36px * ${ratio})`,
                border: "1px solid #eaeaea",
                borderRightWidth: 0,
                borderBottomWidth: 0,
                "&:last-of-type": {
                  borderRightWidth: 1,
                },
              },
              ".MuiPickersDay-root": {
                width: "auto",
                height: "auto",
                borderRadius: "unset",
              },
              ".MuiButton-root": {
                display: "flex",
                flexDirection: "column-reverse",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                width: "100%",
                height: "100%",
                padding: 0,
              },
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
