// =========================================================
// * Aplicacion-óptica Dashboard
// =========================================================

// * Product Page: Sebastián Asunción y Francisco Triviño
// * Copyright 2025 DevSam y MINKA - Proyectos Colaborativos (https://www.devsam.es)
// * Official Repository: https://github.com/DEVSAM1966/aplicacion-optica
// * License: MIT License 

// * Designed and coded by https://devsam.es

// =========================================================

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

// core styles
import "./scss/volt.scss";

// vendor styles
import "react-datetime/css/react-datetime.css";

import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <HashRouter>
    <ScrollToTop />
    <HomePage />
  </HashRouter>,
  document.getElementById("root")
);
