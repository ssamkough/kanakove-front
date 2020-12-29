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
    score: string;
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
            <ul style={{ listStyleType: 'none' }}>
                {kanaSets.map((kSet, i) => {
                    return <li key={i}>{kSet}</li>;
                })}
            </ul>
            <p>
                You scored <b>{score}</b>!
            </p>
        </Modal>
    );
};

export default PlaygroundModal;
