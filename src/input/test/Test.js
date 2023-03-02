import {useState} from "react";
import {createUseStyles} from "react-jss";
import InnerTest from "./InnerTest";

export default function Test() {

    const [css, setCss] = useState('/first.css')

    function change() {
        if(css === '/first.css') {
            setCss('/second.css')
        } else {
            setCss('/first.css')
        }
    }

    const style = {
        backgroundColor: 'red',
        '&:active': {
            backgroundColor: 'black'
        }
    }


    return(
        <div>
            <div className={'block'}>
                CSS Test
            </div>
            <InnerTest style={style}/>
        </div>
    )
}