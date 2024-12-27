import React from 'react'
import clsx from "clsx";


const Button = ({title, id, rightIcon, leftIcon, containerClass}) => {
  return (
    <button id={id} className={clsx(
      "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 bg-violet-300 text-black",
      containerClass)}>
        {leftIcon}
        <span className='relative incline-flex overflow-hidden
        font-general text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>
        {rightIcon}
    </button>
  )
}

export default Button
