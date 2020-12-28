import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Row, Col, Typography } from 'antd';

import Home from './pages/Home';
import Playground from './pages/Playground';

const App = () => {
    const { Title } = Typography;
    return (
        <Router>
            <Row id="app" align="middle" justify="center">
                <Col>
                    <Row className="title-row">
                        <Col span={24}>
                            <Title level={1} style={{ textAlign: 'center' }}>
                                KanaKove
                            </Title>
                        </Col>
                    </Row>
                    <br />
                    <Row className="content-row">
                        <Col>
                            <Switch>
                                <Route exact path="/" component={Home}></Route>
                                <Route path="/playground" component={Playground}></Route>
                            </Switch>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Router>
    );
};

export default App;
