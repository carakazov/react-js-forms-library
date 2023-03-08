import {createUseStyles} from "react-jss";

export default function createStyle(style) {
    return createUseStyles({
        element: {
            ...style
        }
    })
}
