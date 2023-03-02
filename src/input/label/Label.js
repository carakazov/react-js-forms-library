import createStyle from "../stylecreator/stylecretor";

export default function Label(props) {
    const {text, style} = props

    return(
        <label style={createStyle(style).element}>{text}</label>
    )
}