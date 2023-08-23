import React, {useState, useEffect} from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from "react-router-dom";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons"; 
import icon from "../Imagenes/Crypto.png";

const Navbar = () => {
const [activeMenu, setActiveMenu] = useState(true);
const [screenSize, setScreenSize] = useState(null);

useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
}, []);

useEffect(() => {
    if(screenSize < 768) {
        setActiveMenu(false);
    } else {
        setActiveMenu(true);
    }
}, [screenSize])

  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="large" />
            <Typography.Title level={5} className="logo">  
                <Link to="/">Crypto X </Link>
            </Typography.Title>
            <Button className='menu-control-container' style={{marginRight: '10%'}} onClick={() => setActiveMenu(!activeMenu)}>
<MenuOutlined />
            </Button>
        </div>
        {activeMenu && (
               <Menu theme='dark'>
<Menu.Item icon={<HomeOutlined />}>
    <Link to="/">Inicio</Link>
</Menu.Item>
<Menu.Item icon={<FundOutlined />}>
    <Link to="/cryptocurrencies">Criptomonedas</Link>
</Menu.Item>
<Menu.Item icon={<MoneyCollectOutlined/>}>
    <Link to="/exchanges">Intercambios</Link>
</Menu.Item>
<Menu.Item icon={<BulbOutlined />}>
    <Link to="/news">Noticias</Link>
</Menu.Item>
        </Menu> 
        )}
    </div>
  );
};

export default Navbar 
