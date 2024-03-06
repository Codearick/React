import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const ImageSlider = ({ url, page = 1, limit = 5 }) => {
    const [image, setImage] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        if (url !== '') {
            try {
                setLoading(true);
                const requestImage = await fetch(`${url}?page=${page}&limit=${limit}`);
                const imageData = await requestImage.json();
                console.log(imageData);

                if (imageData) {
                    setImage(imageData);
                    setLoading(false);
                }
            }
            catch (error) {
                setErrorMsg(error.message);
                setLoading(false);
            }
        }
    }

    const handleNext = () =>{
        setCurrentSlide(currentSlide === image.length-1 ? 0 : currentSlide+1);
    }

    const handlePrev = () =>{
        setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide-1);
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (loading) {
        return <div>Loading data, Please Wait!</div>
    }

    if (errorMsg !== null) {
        return <div>Some error occured!</div>
    }

    return (
        <div className='relative flex items-center h-[60vh] w-[70vw] m-10 overflow-scroll'>
            <div>
                <BsArrowLeftCircleFill
                    className='m-2 w-16 text-slate-700 text-5xl hover:text-6xl'
                    onClick={handlePrev}
                />
            </div>
            {
                image && image.length  
                ? image.map((items, index) => {
                    return <div key={items.id} className="min-h-full">
                        <img
                            className={
                            currentSlide == index
                            ? "h-[60vh] w-[50vw] object-fill"
                            : "hidden"
                            }
                            src={items.download_url}
                            alt="Nothing to show"
                        />
                    </div>
                })
                :null
            }
            <div>
                <BsArrowRightCircleFill
                    className='m-2 w-16 text-slate-700 text-5xl hover:text-6xl'
                    onClick={handleNext}
                />
            </div>
            <span className='flex gap-10 rounded-full absolute left-[9vw] bottom-5'>
            {
                image && image.length 
                ? image.map((_,index)=>{
                    return <button
                    key={index}
                    className='bg-[rgba(169,168,168,0.61)] hover:bg-[rgba(38,38,38,0.84)] w-5 h-5 rounded-full z-10'
                    onClick={()=>setCurrentSlide(index)}
                    >
                    </button>
                })
                : null
            }
            </span>
        </div>
    )
}

export default ImageSlider