import createStyle from "../../functions/stylecreator/stylecretor";

export default function Field(props) {
    const {style} = props

    const styleClasses = createStyle(style)

    return(
        <div className={styleClasses().element}>
            {props.children}
        </div>
    )
}