import React from 'react'

function ScoreOfGame({ score }) {
    const scoreColor = (score) => {
        if (score > 80) return "bg-green-400";
        else if (score > 50) return "bg-yellow-400";
        else return "bg-red-400";
    };

    if(!score){
        return 
    }
    return (
        <div className={`${scoreColor(score)} w-6 h-6 flex items-center justify-center rounded-lg text-white font-bold`}>
            {score}
        </div>
    );
}

export default ScoreOfGame;
