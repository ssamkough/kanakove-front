import React, { useState, useEffect } from 'react';
import { Row, Col, Input } from 'antd';

import KanaMap from './../data/KanaMap';
import Kana from './../components/Kana';
import PlaygroundModal from './../components/PlaygroundModal';
import PlaygroundStats from './../components/PlaygroundStats';

const Playground = (state: any) => {
    const [character, setCharacter] = useState('');
    const [kanaSets, setKanaSets] = useState([]);
    const [characterList, setCharacterList] = useState([] as any);
    const [romajiInput, setRomajiInput] = useState('');
    const [modalVisibility, setModalVisibility] = useState(false);
    const [points, setPoints] = useState(0);
    const [seconds, setSeconds] = useState(0);
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

            charList = charList.sort(() => Math.random() - 0.5);
            setCharacterList(charList);
            setCharacter(charList[0]);
        };

        insertCharacterList();
        toggleStopwatch();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

    const removeFirstCharacterFromList = () => {
        if (characterList.length === 0) {
            return;
        }

        const tempCharList = characterList;
        tempCharList.shift();
        setCharacterList(tempCharList);
    };

    const onChange = (e: any) => {
        const lowerCaseInput = e.target.value.toLowerCase();
        setRomajiInput(lowerCaseInput);
    };

    const correctAnswer = (element: any) => {
        removeFirstCharacterFromList();
        appendPoints();
        if (characterList.length === 0) {
            resetStopwatch();
            createScore();
            setModalVisibility(true);
            return;
        }
        setCharacter(characterList[0]);
        element.style.borderColor = null;
        element.style.boxShadow = null;
    };

    const wrongAnswer = (element: any) => {
        decreasePoints();
        element.style.borderColor = '#ff4d4f';
        element.style.boxShadow = '0px 0px 0px 0px #ff4d4f';
    };

    const onPressEnter = (e: any) => {
        // return if nothing typed
        if (romajiInput === '') {
            return;
        }

        const elem = e.target;
        if (romajiInput === character[1]) {
            correctAnswer(elem);
            setRomajiInput('');
        } else {
            wrongAnswer(elem);
        }
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
                            onPressEnter={(e) => onPressEnter(e)}
                            className="playground-input"
                        />
                    </Col>
                </Row>
                <PlaygroundStats
                    points={points}
                    setPoints={setPoints}
                    seconds={seconds}
                    setSeconds={setSeconds}
                    score={score}
                    setScore={setScore}
                    isActive={isActive}
                    setIsActive={setIsActive}
                />
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
