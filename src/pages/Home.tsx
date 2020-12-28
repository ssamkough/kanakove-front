import React, { useState } from 'react';
import { Row, Col, Checkbox, Button } from 'antd';
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
        <div>
            <Row>
                <Col>
                    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                        Check all
                    </Checkbox>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Checkbox.Group
                        options={checkboxOptions}
                        value={checkedList}
                        onChange={onChange}
                        className="checkbox-group"
                    ></Checkbox.Group>
                    <br />
                    <br />
                    <Link to={{ pathname: '/playground', state: { checkedList } }}>
                        <Button onClick={onSubmit}>Start</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
