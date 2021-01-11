import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Row, Col } from 'antd';

import Header from './components/Header';
import Routes from './Routes';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <Row id="app" align="middle" justify="center">
                <Col span={12}>
                    <Header />
                    <br />
                    <Row className="content-row">
                        <Col span={24}>
                            <Routes />
                        </Col>
                    </Row>
                    <Footer />
                </Col>
            </Row>
        </Router>
    );
};

export default App;
