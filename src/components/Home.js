import React, { useContext, useEffect, useState } from 'react';
import {  setImagesAction } from '../actions/imagesActions';
import { ImagesContext} from '../contexts/imagesContext';
import { getMyImagesFromDB } from '../services/userService';
import Image from './Image';
import Spinner from './Spinner';

const Home = () => {
    const {dispatchImagesData,imagesData}=useContext(ImagesContext);
    const [showSpinner, setShowSpinner] = useState(false)
    useEffect(() => {
        setShowSpinner(true)
        getMyImagesFromDB().then((res)=>{
            dispatchImagesData(setImagesAction(res));
            setShowSpinner(false)
        })
    }, [dispatchImagesData])
    
    const uploadImagesFunc=()=>{
        console.log('clicked2')
    }
    
    return (
        <div className="home">
            {showSpinner&&<Spinner/>}
            <h1>DropBox</h1>
            <div className="my-images">
                {
                    imagesData.map(image=>(
                        <Image image={image} key={image.id}/>
                    ))
                }
            </div>
            <button onClick={uploadImagesFunc}>Upload Images</button>
        </div>
    )
}

export default Home
