import createStyle from "../../functions/stylecreator/stylecretor";

export function Label(props) {
    const {text, style} = props

    const styleClasses = createStyle(style)

    return(
        <label className={styleClasses().element}>{text}</label>
    )
}