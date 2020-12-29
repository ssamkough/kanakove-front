import React, { useState, useEffect } from 'react';
import { Row, Col, Input } from 'antd';

import kanaMap from './../data/KanaMap';
import Kana from './../components/Kana';
import PlaygroundModal from './../components/PlaygroundModal';

const Playground = (state: any) => {
    const [score, setScore] = useState(0);
    const [character, setCharacter] = useState('');
    const [kanaSets, setKanaSets] = useState([]);
    const [characterList, setCharacterList] = useState([] as any);
    const [romajiInput, setRomajiInput] = useState('');
    const [modalVisibility, setModalVisibility] = useState(false);

    let originalCharacterList = [];

    useEffect(() => {
        const insertCharacterList = () => {
            let kanaList = state.location.state.checkedList;
            setKanaSets(kanaList);
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

            originalCharacterList = charList;
            setCharacterList(charList);
            setCharacter(charList[0]);
        };

        insertCharacterList();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const removeFirstCharacterFromList = () => {
        if (characterList.length === 0) {
            return;
        }

        const tempCharList = characterList;
        tempCharList.shift();
        setCharacterList(tempCharList);
    };

    const appendScore = () => {
        let newScore = score + 100;
        setScore(newScore);
    };

    const onChange = (e: any) => {
        setRomajiInput(e.target.value);
    };

    const onPressEnter = () => {
        if (romajiInput === character[1]) {
            removeFirstCharacterFromList();
            appendScore();
            if (characterList.length === 0) {
                setModalVisibility(true);
                return;
            }
            setCharacter(characterList[0]);
        } else {
            console.log('incorrect');
        }

        setRomajiInput('');
    };

    return (
        <Row align="middle" justify="center">
            <Col>
                <Row gutter={[16, 16]}>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        {characterList.length !== 0 ? <Kana character={character[0]}></Kana> : <h3>Finished!</h3>}
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col>
                        <Input
                            placeholder="romaji"
                            size="large"
                            value={romajiInput}
                            onChange={(e) => onChange(e)}
                            onPressEnter={() => onPressEnter()}
                            className="playground-input"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        <h2>Score: {score}</h2>
                    </Col>
                </Row>
            </Col>
            <PlaygroundModal
                visible={modalVisibility}
                setVisible={setModalVisibility}
                kanaSets={kanaSets}
                score={score}
            />
        </Row>
    );
};

export default Playground;
