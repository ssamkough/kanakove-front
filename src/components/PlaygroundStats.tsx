import React, { useEffect } from 'react';
import { Row, Col } from 'antd';

const PlaygroundStats = ({
    points,
    setPoints,
    seconds,
    setSeconds,
    score,
    setScore,
    isActive,
    setIsActive,
}: {
    points: number;
    setPoints: any;
    seconds: number;
    setSeconds: any;
    score: string;
    setScore: any;
    isActive: boolean;
    setIsActive: any;
}) => {
    useEffect(() => {
        let interval: any = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds((seconds: any) => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]); // eslint-disable-next-line

    return (
        <Row style={{ textAlign: 'center' }}>
            <Col span={12}>
                <h3>Points: {points}</h3>
            </Col>
            <Col span={12}>
                <h3>Time: {seconds}s</h3>
            </Col>
        </Row>
    );
};

export default PlaygroundStats;
