import React from 'react'

const Image = ({image}) => {
    const deleteImageFunc=()=>{
        console.log('clicked')
    }
    return (
        <div className="image">
            <img src={image.src} alt={image.name}/>
            <button onClick={deleteImageFunc}>Delete Image</button>
        </div>
    )
}

export default Image
