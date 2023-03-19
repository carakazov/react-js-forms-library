import createStyle from "../../functions/stylecreator/stylecretor";

export function Field(props) {
    const {style} = props

    const styleClasses = createStyle(style)

    return(
        <div className={styleClasses().element}>
            {props.children}
        </div>
    )
}