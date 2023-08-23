import React, { useEffect, useState } from 'react';
import millify from 'millify';
import  { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from '../services/cryptoApi';
import  Loader  from "./Loader";


const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');



useEffect(() => { 
  setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader/>;

  return (
    <>
    {!simplified && (
     <div className="search-crypto">
<Input 
placeholder='Buscar Criptomoneda' 
onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} 
style={{  marginBottom: "10px", width: '350px' }}  
/>
    </div> 
    )}
  <Row gutters={[32, 32]} className='crypto-card-container' >
      {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card "
            key={currency.uuid}
            style={{ marginBottom: "10px" }}
          >
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl} style={{ maxWidth: '35px' }} />}
                hoverable
              >
                <p>Precio: {millify(currency.price)}</p>
                <p>Capitalización bursátil: {millify(currency.marketCap)}</p>
                <p>Cambios diarios: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
      ))}
    </Row>
  </>
);
};

export default Cryptocurrencies;
