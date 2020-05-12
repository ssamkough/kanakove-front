import React, { useState, useEffect } from 'react';
import { Row, Col, Input } from 'antd';

import Kana from './../components/Kana';

const options: string[] = [
    'Hiragana',
    'Katakana',
    'Hiragana Dakuten',
    'Katakana Dakuten',
    'Hiragana Combo',
    'Katakana Combo',
];

const hiragana = ['あ', 'い', 'う', 'え', 'お'];
const katakana = ['ア', 'イ', 'ウ', 'エ', 'オ'];
const hiraganaDakuten = ['が'];
const katakanaDakuten = ['ガ'];
const hiraganaCombo = ['きゃ'];
const katakanaCombo = ['ウァ'];

const listOfSets = [hiragana, katakana, hiraganaDakuten, katakanaDakuten, hiraganaCombo, katakanaCombo];

// あ	か
// カ	さサ	たタ	なナ	はハ	まマ	やヤ	らラ	わワ
// i	いイ	きキ	しシ	ちチ	にニ	ひヒ	みミ		りリ	ゐヰ
// u	うウ	くク	すス	つツ	ぬヌ	ふフ	むム	ゆユ	るル
// e	えエ	けケ	せセ	てテ	ねネ	へヘ	めメ		れレ	ゑヱ
// o	おオ	こコ	そソ	とト	のノ	ほホ	もモ	よヨ	ろロ	をヲ

const Playground = (state: any) => {
    const [character, setCharacter] = useState('');
    const [characterList, setCharacterList] = useState([] as any);

    const characterSets = state.location.state;
    useEffect(() => {
        for (let i = 0; i < characterSets.length; i++) {
            if (characterSets.includes(options[i])) {
                setCharacterList([...characterList, listOfSets[0]]);
                console.log(i);
            }
        }

        return () => {
            const randomCharacter: string = characterList[Math.floor(Math.random() * characterList.length)];
            setCharacter(randomCharacter);
        };
    }, [characterSets, setCharacterList]);

    return (
        <Row>
            <Col>
                <Row>
                    <Col>
                        <Kana character={character}></Kana>
                        <span>
                            <span>list: </span>
                            {characterList}
                        </span>
                        <br />
                        <span>
                            <span>character: </span>
                            {character}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input placeholder="romaji" size="large" className="playground-input" />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Playground;
