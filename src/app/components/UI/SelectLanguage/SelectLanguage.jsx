import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Controller } from "react-hook-form";

import {
  createTheme,
  FormControl,
  MenuItem,
  Select,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          background: "#FFFFFF",
          height: "50px",
          "& .MuiSelect-select": {
            fontFamily: "Raleway",
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "26px",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FFECA0",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            boxShadow: "0px 2px 4px #FFECA0",
            borderColor: "#FFECA0",
            color: "#363636",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #FFECA0",
            color: "#363636",
          },
          "& .MuiSelect-icon": {
            top: "auto",
            width: "15px",
            height: "15px",
            position: "absolute",
            right: "19px",
            pointerEvents: "none",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          border: "1px solid #FFECA0",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "Raleway",
          fontWeight: 300,
          fontSize: "16px",
          lineHeight: "26px",
          "&:hover": {
            backgroundColor: "rgba(255, 236, 160, 0.8)",
          },
          "&.Mui-selected": {
            backgroundColor: "rgba(255, 236, 160, 0.8)",
            "&:hover": {
              backgroundColor: "rgba(255, 236, 160, 0.8)",
            },
          },
        },
      },
    },
  },
});

const SelectLanguage = (props) => {
  const iconComponent = (props) => {
    return <ExpandMoreIcon className={props.className} />;
  };
  const handleChange = (e) => {

    console.log(e.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <FormControl fullWidth>
        <Controller
          {...props}
          render={( props ) => {
            return (
              <Select
                onChange={handleChange}
                labelId="select-language-id"
                IconComponent={iconComponent}
                {...props.field}
              >
                <MenuItem value="Английский">Английский</MenuItem>
                <MenuItem value="Немецкий">Немецкий</MenuItem>
                <MenuItem value="Французский">Французский</MenuItem>
                <MenuItem value="Испанский">Испанский</MenuItem>
              </Select>
            );
          }}
        ></Controller>
      </FormControl>
    </ThemeProvider>
  );
};

export default SelectLanguage;
