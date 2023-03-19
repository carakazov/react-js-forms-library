import createStyle from "../../functions/stylecreator/stylecretor";

export function Buttons(props) {
    const {style} = props
    const parentDivStyle = createStyle(style)

    return(
        <div className={parentDivStyle().element}>
            {props.children}
        </div>
    )
}