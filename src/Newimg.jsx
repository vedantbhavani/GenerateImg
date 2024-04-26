import './App.css'

const Newimg = (props) => {

    // eslint-disable-next-line react/prop-types
    const imgapi = `https://source.unsplash.com/900x450/?${props.name}`
    return(
        <>
            <img className="imgset" src={imgapi} alt="" />
        </>
    )
}

export default Newimg