function Wrapper({children}) {
    const style = {
        border: '0.1em solid black',
        padding: '1em'
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Wrapper