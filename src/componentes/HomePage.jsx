import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import  Cryptocurrencies  from './Cryptocurrencies';
import News from './News';
import  Loader  from "./Loader";

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;


  if (isFetching) return <Loader/>;

  return (
   <>
   <Title level={2} className='heading' style={{ marginLeft: '12%' }}> Estadísticas Mundiales de Criptomonedas</Title>
   <Row gutter={[32, 32]} style={{ marginLeft: '12%' }}>
   <Col span={12}><Statistic title="Criptomonedas Totales" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Intercambios Totales" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Capitalización Bursátil Total:" value={`$${millify(globalStats.totalMarketCap)}`} /></Col>
        <Col span={12}><Statistic title="Volumen Total 24hs" value={`$${millify(globalStats.total24hVolume)}`} /></Col>
        <Col span={12}><Statistic title="Criptomonedas Total " value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Mercado Total" value={millify(globalStats.totalMarkets)} /></Col>
   </Row>
   <div className='home-heading-container'>
<Title level={2} className='home-title' style={{ marginLeft: '12%' }}> Top 10 Criptomonedas en el Mundo</Title>
<Title level={3} className='show-more' style={{ marginLeft: '12%' }}><Link to="/cryptocurrencies">Ver más </Link></Title>
   </div>
   <Cryptocurrencies simplified />
   <div className='home-heading-container'>
<Title level={2} className='home-title' style={{ marginLeft: '12%' }}> Últimas noticias sobre Criptomonedas</Title>
<Title level={3} className='show-more'><Link to="/news">Ver más </Link></Title>
   </div>
   <News simplified />
   </>
  );
};

export default HomePage