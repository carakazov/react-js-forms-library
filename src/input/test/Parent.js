import {useRef} from "react";

export default function Parent(props) {

    function addCounter() {

    }

    return(
        <div>
            {props.children}
            <button onClick={addCounter} type={'button'}>Add counter</button>
        </div>
    )
}