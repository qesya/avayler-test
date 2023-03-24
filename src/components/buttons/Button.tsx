import React from 'react'
import clsx from 'clsx';

interface IButton {
  title: string;
  variant: 'outline' | 'solid';
  onClick: () => void;
}

const Button: React.FC<IButton> = ({ title, onClick, variant }) => {
  return (
    <div>
      <button
        data-testid="Test-Button"
        className={
          clsx({
            "border-white border-2 py-4 px-16 flex flex-row md:self-start mt-10 rounded-md w-full hover:bg-white hover:text-black transition duration-500 ease-in-out" : variant === "outline",
            "bg-red-600 py-4 px-16 flex self-start mt-10 rounded-md": variant === "solid"
          })
        }
        onClick={onClick}>
        <p className="font-AbrilFatface text-white hover:text-black w-full" data-testid="Test-Title">{title}</p>
      </button>
    </div>
  )
}

export default Button
