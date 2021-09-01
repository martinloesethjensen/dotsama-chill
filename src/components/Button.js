import React from "react";

export const Button = ({name, onClick, color}) => {

    const buttonColor = color === undefined ? "#E6007A" : color;
    return <button
        style={{
            borderColor: buttonColor,
            backgroundColor: buttonColor
        }}
        onClick={onClick}
        className={`h-full items-center border-2 py-2 px-6  h-fit text-lg text-white tracking-wider font-bold rounded-sm`}>
        {name}
    </button>
}

