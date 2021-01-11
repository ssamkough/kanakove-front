import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

const checkboxOptions: string[] = [
    'Hiragana',
    'Hiragana Dakuten',
    'Hiragana Combo',
    'Katakana',
    'Katakana Dakuten',
    'Katakana Combo',
];

const Home = () => {
    const [checkedList, setCheckedList] = useState([] as any);
    const [indeterminate, setIndeterminate] = useState(false);
    const [checkAll, setCheckAll] = useState(false);

    useEffect(() => {
        ReactGA.initialize('G-ECNW9FPPSL');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    const onChange = (checkedList: any) => {
        setCheckedList(checkedList);
        setIndeterminate(!!checkedList.length && checkedList.length < checkboxOptions.length);
        setCheckAll(checkedList.length === checkboxOptions.length);
    };

    const onCheckAllChange = (e: any) => {
        setCheckedList(e.target.checked ? checkboxOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    const checkBoxItems: any[] = [];
    for (let i = 0; i < checkboxOptions.length; i += 3) {
        const checkBoxItem = (
            <Row key={i} align="middle" justify="center" gutter={[16, 16]}>
                <Col>
                    <Checkbox value={checkboxOptions[i]}>{checkboxOptions[i]}</Checkbox>
                </Col>
                <Col>
                    <Checkbox value={checkboxOptions[i + 1]}>{checkboxOptions[i + 1]}</Checkbox>
                </Col>
                <Col>
                    <Checkbox value={checkboxOptions[i + 2]}>{checkboxOptions[i + 2]}</Checkbox>
                </Col>
            </Row>
        );
        checkBoxItems.push(checkBoxItem);
    }

    return (
        <div className="checkbox-container">
            <Row align="middle" justify="center" gutter={[16, 16]}>
                <Col>
                    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                        Check all
                    </Checkbox>
                </Col>
            </Row>
            <Row align="middle" justify="center">
                <Col span={24}>
                    <Row align="middle" justify="center">
                        <Col span={24}>
                            <Checkbox.Group value={checkedList} onChange={onChange} className="checkbox-group">
                                {checkBoxItems}
                            </Checkbox.Group>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col span={24} style={{ textAlign: 'center' }}>
                            <Link to={{ pathname: '/playground', state: { checkedList } }}>
                                <Button size="large">Start</Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
