import './App.css';
import { useState } from 'react';



function Square({value,onSquareClicked}){
  return <button className='square' onClick={onSquareClicked}>{value}</button>
}

function Board() {
  const[xisNext,setXIsNext]=useState(true);
  const [squares,setSquares]=useState(Array(9).fill(null));
  function handleClick(i){
    if (squares[i]|| calculateWinner(squares)){
      return;
    }
    const nextSquares=squares.slice();
    if(xisNext){
      nextSquares[i]='X';
    }else{
      nextSquares[i]='O';
    }
    setSquares(nextSquares);
    setXIsNext(!xisNext);
  }
  const winner=calculateWinner(squares);
  let status;
  if (winner){
    status="Winner "+ winner;
  }else{
    status=" Next Player: "+(xisNext ?'X':'O');
  }
  return (
    <>
    <div className='board-row'>
      <div className='status'>{status}</div>
      <Square value={squares[0]} onSquareClicked={()=>handleClick(0)}/>
      <Square value={squares[1]} onSquareClicked={()=>handleClick(1)}/>
      <Square value={squares[2]} onSquareClicked={()=>handleClick(2)}/>
      </div>
      <div className='board-row'>
      <Square value={squares[3]} onSquareClicked={()=>handleClick(3)}/>
      <Square value={squares[4]} onSquareClicked={()=>handleClick(4)}/>
      <Square value={squares[5]} onSquareClicked={()=>handleClick(5)}/>
      </div>
      <div className='board-row'>
      <Square value={squares[6]} onSquareClicked={()=>handleClick(6)}/>
      <Square value={squares[7]} onSquareClicked={()=>handleClick(7)}/>
      <Square value={squares[8]} onSquareClicked={()=>handleClick(8)}/>
      </div>
    </>
  );
}

function calculateWinner(squares){
  const lines=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ];
  for(let i=0;i<lines.length;i++){
    const[a,b,c]=lines[i];
    if(squares[a] &&squares[a]===squares[b] && squares[a]===squares[c]){
      return squares[a];
    } 
  }
  return null;
}


export default Board;
