import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
const [timePeriod, setTimePeriod] = useState('7d')

  return (
    <div style={{ marginLeft: '12%' }}>
        CryptoDetails {coinId}
        </div>
  )
}

export default CryptoDetails