import {useState} from 'react';
import data from './data';

//Single selection
//Multiple selcetion

const Accordion = () => {
    const [selected, setSelected] = useState();
    
    const handleSingleSelection = (currentId) =>{
        console.log("Current id: ",currentId)
        setSelected(currentId === selected ? null : currentId);
    }
    
  return (
    <div className='wrapper'>
        {
            data && data.length > 0 ?
            data.map(dataItem => <div key={dataItem.id} className='item'>
                <div onClick={()=>handleSingleSelection(dataItem.id)} className="title flex justify-center gap-10 px-10 py-7">
                    <div className='w-[40vw] '>
                    <h3 className='font-extrabold text-xl'>{dataItem.question}</h3>
                    </div>
                    <div>
                    <span className='font-extrabold text-2xl'>+</span>
                    </div>
                </div>
                {
                    selected === dataItem.id ? 
                    <div className='answer flex align-center justify-center transition duration-1000 ease-in-out delay-200'>
                    <span className='w-[44vw] px-10 py-7 border bg-slate-600 text-xl'>{dataItem.answer}</span>
                    </div>
                    : null
                }
            </div>)
             : <div> No Data Found !</div>
        }
    </div>
  )
}

export default Accordion;