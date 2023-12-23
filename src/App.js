import "./App.css";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch } from "@mui/material"
import styled from "styled-components";
import {
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox,
} from "react-instantsearch-dom";
import { searchClient } from "./typesenseAdapter";
import MoviesHits from "./components/moviesHits";
import "instantsearch.css/themes/satellite.css";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
  position: relative;
`;


const ToggleDarkModeContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CustomH2 = styled.h2`
  margin-top: 30px;
  margin-bottom: 0;
`;

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light', 
      primary: {
        main: '#484848',
      },
      secondary: {
        main: '#f48fb1',
      },
    },
  });
  return (
    <AppContainer>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ToggleDarkModeContainer>
        <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
        <h6 style={{ margin: 0 }}>Toggle Dark mode</h6>
        </ToggleDarkModeContainer>
        <CustomH2>QuickView</CustomH2>
        <h3 style={{ margin: 0 }}>Using React/Typesense InstantSearch</h3>
        <InstantSearch indexName="movies" searchClient={searchClient}>
          <h4>Search Movies</h4>
          <SearchBox />
          <RefinementList attribute="genres" />
          <MoviesHits />
          <Pagination totalPages={10} />
        </InstantSearch>
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;