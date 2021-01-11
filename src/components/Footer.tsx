import React from 'react';
import { Row, Col } from 'antd';

const Footer = () => {
    return (
        <Row>
            <Col span={12}>
                Made by{' '}
                <a target="_blank" rel="noopener noreferrer" href="http://sammysamkough.com/">
                    Sammy Samkough
                </a>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/ssamkough">
                    <img alt="buy-me-a-coffee" width={200} src="./buy-me-a-coffee.png" />
                </a>
            </Col>
        </Row>
    );
};

export default Footer;
