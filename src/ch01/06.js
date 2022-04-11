function Greet({name, color, isSpecial}) {
    return (
        <div style={{color}}>
            {/* isSpecial ? <b>*</b> : null */}
            {isSpecial && <b>*</b>}
            Hello, {name}.
        </div>
    )
}

export default Greet