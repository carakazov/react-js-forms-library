import createStyle from "../stylecreator/stylecretor";

export default function Decoration(props) {
    const {style} = props

    const parentDivStyle = createStyle(style)

    return(
        <div className={parentDivStyle().element}>
            {props.children}
        </div>
    )
}