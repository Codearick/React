import React, { useState } from 'react';

const Randomcolor = () => {
    const [typeofColor, setTypeofColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    function generateRandomUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function handleGenerateRgb() {
        let r = generateRandomUtility(256);
        let g = generateRandomUtility(256);
        let b = generateRandomUtility(256);
        setColor(`rgb(${r},${g},${b})`);

        return `rgb(${r},${g},${b})`;
    }

    function handleGenerateHex() {
        let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#";

        for (let index = 0; index < 6; index++) {
            hexColor += hex[generateRandomUtility(hex.length)]
        }
        setColor(hexColor);
    }


    return (
        <div
            style={{
                backgroundColor: color,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "23px",
                margin: "1.25rem",
                width: "95vw",
                height: "95vh"
            }}
            className="flex flex-col justify-center gap-16  h-full w-full">
            <div className='flex items-center justify-center gap-5 mt-12'>
                <button onClick={() => setTypeofColor("rgb")} className='border border-[invert(0)] py-5 px-7 text-white font-bold'>Random RGB</button>
                <button onClick={() => setTypeofColor("hex")} className='border py-5 px-7 text-white font-bold'>Random Hex</button>
                <button onClick={
                    typeofColor === "hex"
                        ? handleGenerateHex
                        : handleGenerateRgb
                }
                    className='border py-5 px-7 text-white font-bold'>Random Color
                </button>
            </div>

            <div className='flex flex-col justify-center items-center text-xl mt-5 font-bold'>
                <h2>{typeofColor === "rgb" ? "RGB Color " : "HEX Color "}</h2>
                <h2>{color}</h2>
            </div>
        </div>
    );
}

export default Randomcolor;


