const kanaMap = new Map([
    [
        'Hiragana',
        [
            ['あ', 'a'],
            ['い', 'i'],
            ['う', 'u'],
            ['え', 'e'],
            ['お', 'o'],
        ],
    ],
    [
        'Katakana',
        [
            ['ア', 'a'],
            ['イ', 'i'],
            ['ウ', 'u'],
            ['エ', 'e'],
            ['オ', 'o'],
        ],
    ],
    ['Hiragana Dakuten', [['が', 'ga']]],
    ['Katakana Dakuten', [['ガ', 'ga']]],
    ['Hiragana Combo', [['きゃ', 'kya']]],
    ['Katakana Combo', [['キャ', 'kya']]],
]);

export default kanaMap;

// あ	か
// カ	さサ	たタ	なナ	はハ	まマ	やヤ	らラ	わワ
// i	いイ	きキ	しシ	ちチ	にニ	ひヒ	みミ		りリ	ゐヰ
// u	うウ	くク	すス	つツ	ぬヌ	ふフ	むム	ゆユ	るル
// e	えエ	けケ	せセ	てテ	ねネ	へヘ	めメ		れレ	ゑヱ
// o	おオ	こコ	そソ	とト	のノ	ほホ	もモ	よヨ	ろロ	をヲ
