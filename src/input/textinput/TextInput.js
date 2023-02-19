export default function TextInput(props) {
    const {type, validations, placeholder, style} = props

    

    let errorSpan = (errorMessage, errorStyle) => {
        return <span style={errorStyle}>{errorMessage}</span>
    }

    return (
        <div>
            <input type={type} placeholder={placeholder} style={style}/>

        </div>
    )
}