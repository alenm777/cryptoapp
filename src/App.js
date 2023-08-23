import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar, Exchanges, HomePage, Cryptocurrencies, News, CryptoDetails } from "./componentes";
import "./App.css"

const App = () => {
    return (
   <div classname="app">
    <div className="navbar">
<Navbar />
    </div>
    <div className="main">
<Layout>
    <div className="routes">
    <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route  path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route exact  path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="news" element={<News />} />
            </Routes>      
    </div>
</Layout>
    </div>
    <div className="footer">
    <Typography.Title level={5} style={{color: "white", textAlign: "center" }}>
        Crypto X <br />
        Todos los derechos reservados
    </Typography.Title>
    <Space>
        <Link to="/">Inicio</Link>
        <Link to="/exchanges">Intercambios</Link>
        <Link to="/news">Noticias</Link>
    </Space>
    </div>
    </div>
 );
};

export default App