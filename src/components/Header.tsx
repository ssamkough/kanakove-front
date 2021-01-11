import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Typography } from 'antd';

const Header = () => {
    const { Title } = Typography;

    return (
        <>
            <Row className="title-row">
                <Col span={24}>
                    <Title level={1} style={{ textAlign: 'center' }}>
                        <Link to={'/'} className="home-header">
                            KanaKove ツ
                        </Link>
                    </Title>
                </Col>
            </Row>
            {/* <Row className="title-row">
                <Col span={24} style={{ textAlign: 'center' }}>
                    <Title level={4}>
                        <Link to={'/highscore'} className="home-header">
                            Highscore
                        </Link>
                    </Title>
                </Col>
            </Row> */}
        </>
    );
};

export default Header;
