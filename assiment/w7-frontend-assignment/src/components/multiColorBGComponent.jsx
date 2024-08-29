import { React, useState } from 'react';


export const  MulticolorBGComponent = (() => {

    const [bgColor, setBgColor] = useState('white');

    const handleColorChange = (color) => {
        setBgColor(color);
    };

    return(
        <div className={`min-h-screen ${bgColor}`}>

            <div className='h-40 fixed bottom-0 left-0 right-0 justify-center items-center px-80 rounded-lg'>

                <div className='flex flex-wrap justify-center items-center gap-4
                    place-content-evenly shadow-lg p-4 rounded-lg'>

                    <button className='w-24 h-10 py-2 px-4 rounded-lg
                        hover:bg-red-700 bg-red-500'
                         onClick={() => handleColorChange('bg-red-500')}>
                        Red</button>

                    <button className='w-24 h-10 py-2 px-4 rounded-lg
                        hover:bg-yellow-700 bg-yellow-500'  
                        onClick={() => handleColorChange('bg-yellow-500')}>
                            Yellow</button>

                    <button className='w-24 h-10 py-2 px-4 rounded-lg
                        hover:bg-slate-700 bg-black text-white'
                        onClick={() => handleColorChange('bg-black')}>
                        Black</button> 

                    <button className='w-24 h-10 py-2 px-4 rounded-lg
                        hover:bg-violet-700 bg-violet-500'
                        onClick={() => handleColorChange('bg-violet-500')}>
                        Violet</button>

                    <button className='w-24 h-10 py-2 px-4 rounded-lg
                        hover:bg-green-700  bg-green-500'
                        onClick={() => handleColorChange('bg-green-500')}>
                        Green</button>

                    <button className='w-24 h-10 py-2 px-4 rounded-lg
                        hover:bg-blue-700 bg-blue-500'
                        onClick={() => handleColorChange('bg-blue-500')}
                        >Blue</button>

                    <button className='w-24 h-10 py-2 px-4 rounded-lg
                        hover:bg-orange-700 bg-orange-500'
                        onClick={() => handleColorChange('bg-orange-500')}
                        >Default</button>

                </div>
            </div>
        </div>
    )
});
