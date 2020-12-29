import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'antd';

const PlaygroundModal = ({
    visible,
    setVisible,
    kanaSets,
    score,
}: {
    visible: boolean;
    setVisible: any;
    kanaSets: any[];
    score: number;
}) => {
    const history = useHistory();

    const handleOk = () => {
        setVisible(false);
        history.go(0);
    };

    const handleCancel = () => {
        setVisible(false);
        history.push('/');
    };

    const kanaSetString = () => {
        let kanaString = '';
        for (let i = 0; i < kanaSets.length; i++) {
            if (i === kanaSets.length - 1) {
                kanaString += ' and ' + kanaSets[i];
                return;
            }
            kanaString += ', ' + kanaSets[i];
        }
        console.log('KANA STRING:', kanaString);
        return kanaString;
    };

    return (
        <Modal
            title="Success"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Reset"
            cancelText="Back to Home"
        >
            <p>You passed the kana quiz for the sets:</p>
            <p>
                <ul style={{ listStyleType: 'none' }}>
                    {kanaSets.map((kSet, i) => {
                        return <li key={i}>{kSet}</li>;
                    })}
                </ul>
            </p>
            <p>
                Your scored <b>{score}</b>!
            </p>
        </Modal>
    );
};

export default PlaygroundModal;
