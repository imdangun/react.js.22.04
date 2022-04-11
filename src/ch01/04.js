function Greet({name, color}) {
    return (
        <div style={{color}}>
            Hello, {name}.
        </div>
    )
}

Greet.defaultProps = {
    name: '최한석',
    color: 'blue'
}

export default Greet