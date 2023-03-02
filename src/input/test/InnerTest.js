import {createUseStyles} from "react-jss";

export default function InnerTest(props) {
    const {style} = props

    const elementStyle = createUseStyles({
        elem: {
            ...style
        }
    })

    return <button type={'button'} className={elementStyle().elem}>Inner test</button>
}