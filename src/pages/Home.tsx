import React, { useState } from 'react';
import { Button, Checkbox, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

const checkboxOptions: string[] = [
    'Hiragana',
    'Katakana',
    'Hiragana Dakuten',
    'Katakana Dakuten',
    'Hiragana Combo',
    'Katakana Combo',
];

const Home = () => {
    const [checkedList, setCheckedList] = useState([] as any);
    const [indeterminate, setIndeterminate] = useState(false);
    const [checkAll, setCheckAll] = useState(false);

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

    const onSubmit = () => {};

    return (
        <div className="checkbox-container">
            <Row>
                <Col span={24}>
                    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                        Check all
                    </Checkbox>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Checkbox.Group value={checkedList} onChange={onChange} className="checkbox-group">
                        <Row>
                            <Col span={12}>
                                <Checkbox value="Hiragana">Hiragana</Checkbox>
                            </Col>
                            <Col span={12}>
                                <Checkbox value="Katakana">Katakana</Checkbox>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Checkbox value="Hiragana Dakuten">Katakana Dakuten</Checkbox>
                            </Col>
                            <Col span={12}>
                                <Checkbox value="Katakana Dakuten">Katakana Dakuten</Checkbox>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Checkbox value="Hiragana Combo">Hiragana Combo</Checkbox>
                            </Col>
                            <Col span={12}>
                                <Checkbox value="Katakana Combo">Katakana Combo</Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                    <br />
                    <br />
                    <Row>
                        <Col span={24} style={{ textAlign: 'center' }}>
                            <Link to={{ pathname: '/playground', state: { checkedList } }}>
                                <Button size="large" onClick={onSubmit}>
                                    Start
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
