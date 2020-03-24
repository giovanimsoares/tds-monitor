import * as React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
//import { useMediaQuery } from "@material-ui/core";
import { indigo, lightBlue, red } from "@material-ui/core/colors";

//https://material-ui.com/pt/customization/default-theme/?expand-path=$.palette

let darkTheme = createMuiTheme({
  overrides: {
    MuiDivider: {},
    MuiPaper: {},
    MuiGrid: {},
    MuiStepper: {
      root: {
        backgroundColor: indigo[100],
        left: 0,
        right: 0,
        marginBottom: '2em'
      }
    },
    MuiBottomNavigation: {
      root: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: indigo[100]
      }
    },
    MuiFormControl: {
      root: {
        marginLeft: "2em",

      }
    },
    MuiInputBase: {
      formControl: {
      },
    },
    MuiTextField: {
      root: {
        require: {
          color: red[100]
        },

      }
    }
  },
  palette: {
    //  type: "dark",
    primary: indigo,
    secondary: lightBlue
  },
  typography: {
    subtitle1: {
      color: indigo[700]
    }
  },
  props: {
    MuiInputBase: {},
    MuiTextField: { variant: "outlined" }
  }
});

let lightTheme = createMuiTheme({
  palette: {
    //   type: "light",
    primary: lightBlue
  }
});

interface IMonitorThemeProps {
  children: any;
}

export default function MonitorTheme(props: IMonitorThemeProps) {
  const prefersDarkMode = true; //useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
      {props.children}
    </ThemeProvider>
  );
}
