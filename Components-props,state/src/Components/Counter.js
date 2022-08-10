import React from 'react';

const Counter = (props) => {
    let [count, setCount] = React.useState(0)
    
    const myFunc = (e) => {
        if (e.target.textContent === '+') {
            setCount(count + 1)
        } else {
            setCount(count - 1)
        }
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={myFunc}>+</button>
            <button onClick={myFunc}>-</button>
        </>

    )

}

export default Counter;