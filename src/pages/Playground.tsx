import React, { useState, useEffect } from 'react';
import { Row, Col, Input } from 'antd';

import KanaMap from './../data/KanaMap';
import Kana from './../components/Kana';
import PlaygroundModal from './../components/PlaygroundModal';

const Playground = (state: any) => {
    const [character, setCharacter] = useState('');
    const [kanaSets, setKanaSets] = useState([]);
    const [characterList, setCharacterList] = useState([] as any);
    const [romajiInput, setRomajiInput] = useState('');
    const [modalVisibility, setModalVisibility] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [points, setPoints] = useState(0);
    const [score, setScore] = useState('');
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const insertCharacterList = () => {
            let kanaList = state.location.state.checkedList;
            setKanaSets(kanaList);
            let charList = [];

            for (let i = 0; i < kanaList.length; i++) {
                let kanaSet = KanaMap.get(kanaList[i]) as string[] | undefined;
                if (kanaSet) {
                    for (let j = 0; j < kanaSet.length; j++) {
                        let char = kanaSet[j];
                        charList.push(char);
                    }
                } else {
                    console.log('kana set is undefined');
                }
            }

            setCharacterList(charList);
            setCharacter(charList[0]);
        };

        insertCharacterList();
        toggleStopwatch();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        let interval: any = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const removeFirstCharacterFromList = () => {
        if (characterList.length === 0) {
            return;
        }

        const tempCharList = characterList;
        tempCharList.shift();
        setCharacterList(tempCharList);
    };

    const toggleStopwatch = () => {
        setIsActive(!isActive);
    };

    const resetStopwatch = () => {
        setSeconds(0);
        setIsActive(false);
    };

    const appendPoints = () => {
        let newPoints = points + 100;
        setPoints(newPoints);
    };

    const decreasePoints = () => {
        let newPoints = points - 50;
        setPoints(newPoints);
    };

    const createScore = () => {
        const newScore = (points / seconds).toFixed(2);
        setScore(newScore);
    };

    const onChange = (e: any) => {
        setRomajiInput(e.target.value);
    };

    const onPressEnter = () => {
        if (romajiInput === character[1]) {
            removeFirstCharacterFromList();
            appendPoints();
            if (characterList.length === 0) {
                resetStopwatch();
                createScore();
                setModalVisibility(true);
                return;
            }
            setCharacter(characterList[0]);
        } else {
            decreasePoints();
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
                <Row style={{ textAlign: 'center' }}>
                    <Col span={12}>
                        <h3>Points: {points}</h3>
                    </Col>
                    <Col span={12}>
                        <h3>Time: {seconds}s</h3>
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
