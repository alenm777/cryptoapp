import React, {useState, useEffect } from 'react';
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from '../services/cryptoApi';


const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
const [cryptos, setCryptos] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {
  if(cryptosList?.data?.coins) {
  const filteredData = cryptosList?.data?.coins.filter(
    (coin) => 
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  setCryptos(filteredData);
}
}, [cryptosList, searchTerm]);

if(isFetching) return "loading ...";

  return (
    <>
    {!simplified && (
     <div classname="search-crypto">
<Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)} style={{ marginLeft: '12%', marginBottom: "10px", width: '350px' }}  />
    </div> 
    )}
    <Row gutters={[32, 32]} className='crypto-card-container' style={{ marginLeft: '12%',  }}>
{cryptos?.map((currency) => (
  <Col xs={24} sm={12} lg={6} classname="crypto-card " key={currency.id} style={{  marginBottom: "10px",   }} >
<Link to={`/crypto/${currency.id}`}>
  <Card
  title={`${currency.rank}. ${currency.name}`}
  extra={<img className='crypto-image' src={currency.iconUrl} style={{ maxWidth: '35px' }}/>} 
  hoverable
  >
<p>Price: {millify(currency.price)}</p>
<p>Market Cap: {millify(currency.marketCap)}</p>
<p>Daily Change: {millify(currency.change)}%</p>
  </Card>
</Link>
  </Col>
))}
    </Row>
    </>
  )
}

export default Cryptocurrencies
