import { useState } from 'react';
import data from './data';

//Single selection
//Multiple selcetion

const Accordion = () => {
    const [selected, setSelected] = useState();
    const [multiSelect, setMultiSelect] = useState(false);
    const [multiple, setMultiple] = useState([]);
    const [img, setImg] = useState("+")


    const handleSingleSelection = (currentId) => {
        console.log("Current id: ", currentId)
        setSelected(currentId === selected ? null : currentId);
    }

    const handleMultiSelection = async (currentId) => {
        let copyMultiple = [...multiple];
        const indexOfCurrentId = copyMultiple.indexOf(currentId);

        if (indexOfCurrentId === -1) copyMultiple.push(currentId);
        else  copyMultiple.splice(indexOfCurrentId,1);

        setMultiple(copyMultiple);
        console.log(multiple);
        return "On";
    }

    return (
        <div className='wrapper flex flex-col justify-center align center'>
            <div className='mx-auto m-4 cursor-pointer'>
                <button onClick={() => setMultiSelect(!multiSelect)} className='border p-4'>
                    Multiselection
                </button>
            </div>
            {
                data && data.length > 0 ?
                    data.map(dataItem => <div key={dataItem.id} className='item'>
                        <div onClick={multiSelect
                            ? () => handleMultiSelection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)
                        } className="title flex justify-center ">
                            <div className='border flex w-[80vw] py-5 px-4 my-2'>
                                <div className='w-[95%]'>
                                    <h3 className='font-extrabold text-xl'>{dataItem.question}</h3>
                                </div>
                                <div className=''>
                                    <span className='font-extrabold text-2xl'>{img}</span>
                                </div>
                            </div>
                        </div>
                        {
                        selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? 
                         <div className={`answer mx-auto my-0 flex align-center justify-center`}>
                             <span className='w-[80vw] px-10 py-7 border text-xl'>{dataItem.answer}</span>
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