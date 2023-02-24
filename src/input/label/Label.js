export default function Label(props) {
    const {text, style} = props

    return(
        <label style={style}>{text}</label>
    )
}