import createStyle from "../stylecreator/stylecretor";

export default function Field(props) {
    const {style} = props

    return(
        <div style={createStyle(style).element}>
            {props.children}
        </div>
    )
}