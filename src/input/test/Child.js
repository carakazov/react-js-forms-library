import {useState} from "react";

export default function Child(props, ref) {
    const [counter, setCounter] = useState(0)

    function add() {
        let plusOneCounter = counter;
        plusOneCounter++
        setCounter(plusOneCounter)
    }

    return(
        <div>
            <strong>{counter}</strong>
        </div>
    )
}