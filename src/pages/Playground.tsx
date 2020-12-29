import React, { useState, useEffect } from 'react';
import { Row, Col, Input } from 'antd';

import Kana from './../components/Kana';
import kanaMap from './../data/KanaMap';

const Playground = (state: any) => {
    const [character, setCharacter] = useState('');
    const [characterList, setCharacterList] = useState([] as any);
    const [romajiInput, setRomajiInput] = useState('');

    useEffect(() => {
        const insertCharacterList = () => {
            const kanaList = state.location.state.checkedList;
            let charList = [];

            for (let i = 0; i < kanaList.length; i++) {
                let kanaSet = kanaMap.get(kanaList[i]) as string[] | undefined;
                if (kanaSet) {
                    for (let j = 0; j < kanaSet.length; j++) {
                        let char = kanaSet[j];
                        charList.push(char);
                    }
                } else {
                    console.log('kana set is undefined');
                }
            }

            console.log(charList);
            setCharacterList(charList);
            setCharacter(charList[0][0]);
        };

        insertCharacterList();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onChange = (e: any) => {
        console.log(e.target.value);
        setRomajiInput(e.target.value);
    };

    const onPressEnter = (e: any) => {
        console.log(e);
        console.log(romajiInput);
        console.log(characterList);
    };

    return (
        <Row align="middle" justify="center">
            <Col>
                <Row>
                    <Col span={24}>
                        <Kana character={character}></Kana>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input
                            placeholder="romaji"
                            size="large"
                            onChange={(e) => onChange(e)}
                            onPressEnter={(e) => onPressEnter(e)}
                            className="playground-input"
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Playground;
