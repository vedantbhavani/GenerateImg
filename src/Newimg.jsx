import './App.css'

const Newimg = (props) => {
    // eslint-disable-next-line react/prop-types
    const imgapi = `https://source.unsplash.com/?${props.name}`
    return(
        <>
            <img className="imgset" src={imgapi} alt="" />
            {/* <div>{imgapi}</div> */}
        </>
    )
}
export default Newimg