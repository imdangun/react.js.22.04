// import Greet from './01'
// import Greet from './02'
// import Greet from './03'
// import Greet from './04'
import Wrapper from './05'
import Greet from './06'

function App() {
    // return <Greet/> // 01
    // retrun <Greet name='최한석'/> // 02
    // return <Greet name='최한석' color='red'/> // 03
    // return <Greet name='한아름'/> // 04
    /*
    return (
        <Wrapper>
            <Greet/>
            <Greet name='한아름' color='red'/>
        </Wrapper>
    )
    */ // 05
    return (
        <Wrapper>
            {/*<Greet name='hera' color='red' isSpecial={true}/> */}
            <Greet name='hera' color='red' isSpecial/>
            <Greet name='athena' color='blue'/>
        </Wrapper>
    )
}

export default App