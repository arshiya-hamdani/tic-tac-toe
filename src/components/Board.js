import React, { useEffect, useState } from 'react';
import Square from './Square';

export default function Board() {
    const [state, setState] = useState(Array(9).fill(null));
    const [isxturn, setisxturn] = useState(true);
    const [scores, setscores] = useState({ X: 0, 0: 0 })

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < winnerLogic.length; i++) {
            const [a, b, c] = winnerLogic[i];
            if (state[a] && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return null;
    }

    const handleClick = (index) => {
        if (checkWinner() || state[index]) {
            return;
        }
        const newState = [...state];
        newState[index] = isxturn ? 'X' : '0';
        setState(newState);
        setisxturn(!isxturn);
    };

    const startnew = () => {
        setState(Array(9).fill(null))
    };
    const winner = checkWinner();

    useEffect(() => {

        if (winner) {
            const newscores = { ...scores }
            newscores[winner]++;
            setscores(newscores)
        }
    }, [state, winner]);
    return (
        <>
            <div className='title'><h3>TIC-TAC-TOE GAME</h3></div>
            <div className='board-container'>
                <div className='scoreboard'>
                    <div> Score of x : {scores.X}</div>
                    <div>Score of 0 : {scores['0']}</div>
                </div>
                {winner ? (
                    <div className='winner'>{winner} wins the game...<button onClick={startnew}>Play Again?</button></div>
                ) : (
                    <>
                        <div className='board-row'>
                            <Square onClick={() => handleClick(0)} value={state[0]} />
                            <Square onClick={() => handleClick(1)} value={state[1]} />
                            <Square onClick={() => handleClick(2)} value={state[2]} />
                        </div>
                        <div className='board-row'>
                            <Square onClick={() => handleClick(3)} value={state[3]} />
                            <Square onClick={() => handleClick(4)} value={state[4]} />
                            <Square onClick={() => handleClick(5)} value={state[5]} />
                        </div>
                        <div className='board-row'>
                            <Square onClick={() => handleClick(6)} value={state[6]} />
                            <Square onClick={() => handleClick(7)} value={state[7]} />
                            <Square onClick={() => handleClick(8)} value={state[8]} />
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
