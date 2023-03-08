import createStyle from "../stylecreator/stylecretor";

export default function Buttons(props) {
    const {style} = props
    const parentDivStyle = createStyle(style)

    return(
        <div className={parentDivStyle().element}>
            {props.children}
        </div>
    )
}