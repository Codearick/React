import {useState} from 'react'
import { FaStar } from "react-icons/fa";

const Rating = ({noOfStars = 5}) => {
    const [hover, setHover] = useState(0)
    const [rating, setRating] = useState(0)

    const handleOnClick = (currentIndex)=>{
        console.log(currentIndex)
        setRating(currentIndex);
        console.log("Current Rating: ",rating)
    }
    const handleOnMouseEnter = (currentIndex)=>{
        console.log(currentIndex)
        setHover(currentIndex);
        console.log("current hover at: ",hover)
    }
    const handleOnMouseLeave = ()=>{
        setHover(rating);
        console.log("Mouse left at: ",rating);
    }
    return (
        <div className='flex items-center justify-center mt-36'>
            {
                [...Array(noOfStars)].map((_,index) => {
                    index += 1;
                    return <FaStar
                        key={index}
                        className={index <= (hover || rating) ? "text-[#fff700] " : "text-white "}
                        onClick={() => handleOnClick(index)}
                        onMouseEnter={()=> handleOnMouseEnter(index)}
                        onMouseLeave={()=> handleOnMouseLeave(index)}
                        size={70}
                    />
                })
            }
        </div>
    )
}

export default Rating
