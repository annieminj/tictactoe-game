import React, { useRef, useState } from 'react'
import './TicTacToe.css';
import circle from '../Assets/circle.png'
import cross from '../Assets/cross.png'

let data = ["", "", "", "", "", "", "", "", ""]

const TicTacToe = () => {

    let [count, setCount] = useState(0)
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null) 
    let box0 = useRef(null)
    let box1 = useRef(null)
    let box2 = useRef(null)
    let box3 = useRef(null)
    let box4 = useRef(null)
    let box5 = useRef(null)
    let box6 = useRef(null)
    let box7 = useRef(null)
    let box8 = useRef(null)

    let box_array = [box0, box1, box2, box3, box4, box5, box6, box7, box8]

    const toggle = (e, num) => {
        if(lock) {
            return;
        }
        if(count%2 === 0) {
            e.target.innerHTML = `<img src='${cross}' alt="" />`
            data[num] = "x"
            setCount(++count)
        } else {
            e.target.innerHTML = `<img src='${circle}' alt="" />`
            data[num] = "o"
            setCount(++count)
        }
        checkWin();
    }

    const checkWin = () => {
        if(data[0] === data[1] && data[1] === data[2] && data[0] !== "") {
            won(data[1])
        } else if (data[3] === data[4] && data[4] === data[5] && data[3] !== "") {
            won(data[3])
        } else if (data[6] === data[7] && data[7] === data[8] && data[6] !== "") {
            won(data[6])
        } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[0])
        } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            won(data[1])
        } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            won(data[2])
        } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            won(data[0])
        } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            won(data[2])
        }
    }

    const won = (winner) => {
        setLock(true);
        if(winner === "x") {
            titleRef.current.innerHTML = `Cogratulations : <img src=${cross} /> Wins` 
        } else {
            titleRef.current.innerHTML = `Cogratulations : <img src=${circle} /> Wins` 
        }
    }

    const reset = () => {
        setLock(false);
        data =  ["", "", "", "", "", "", "", "", ""]
        titleRef.current.innerHTML = `Tic Tac Toe Game In <span>React</span>`
        box_array.map((e) => {
            e.current.innerHTML = ""
        })
    }

    return (
    <div className='container'>
        <h1 className='title' ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
        <div className='board'>
            <div className='row1'>
                <div className='boxes' ref={box0} onClick={(event) => {toggle(event,0)}}></div>
                <div className='boxes' ref={box1} onClick={(event) => {toggle(event,1)}}></div>
                <div className='boxes' ref={box2} onClick={(event) => {toggle(event,2)}}></div>
            </div>
            <div className='row2'>
                <div className='boxes' ref={box3} onClick={(event) => {toggle(event,3)}}></div>
                <div className='boxes' ref={box4} onClick={(event) => {toggle(event,4)}}></div>
                <div className='boxes' ref={box5} onClick={(event) => {toggle(event,5)}}></div>
            </div>
            <div className='row3'>
                <div className='boxes' ref={box6} onClick={(event) => {toggle(event,6)}}></div>
                <div className='boxes' ref={box7} onClick={(event) => {toggle(event,7)}}></div>
                <div className='boxes' ref={box8} onClick={(event) => {toggle(event,8)}}></div>
            </div>
        </div>
        <button className='reset' onClick={() => {reset()}}>Reset</button>
    </div>
  )
}

export default TicTacToe