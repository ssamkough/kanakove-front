import React from 'react';

const Kana = ({ character }: { character: string }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{character}</h1>
        </div>
    );
};

export default Kana;
