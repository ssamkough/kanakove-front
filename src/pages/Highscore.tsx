import React, { useState, useEffect } from 'react';
import { Row, Col, Table } from 'antd';

// https://ant.design/components/table/#header

const Highscore = () => {
    const [data, setData] = useState([] as any);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Score',
            dataIndex: 'score',
            key: 'score',
        },
    ];

    useEffect(() => {
        setData([
            {
                key: '1',
                name: 'John Brown',
                score: 32,
            },
            {
                key: '2',
                name: 'Jim Green',
                score: 42,
            },
            {
                key: '3',
                name: 'Joe Black',
                score: 36,
            },
        ]);
    }, []);

    return (
        <Row align="middle" justify="center">
            <Col>
                <Table columns={columns} dataSource={data} />
            </Col>
        </Row>
    );
};

export default Highscore;
