'use client'

import { useState } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";


interface QuestionProps {
  title: string
  response: string
}

export function Question ({ title, response }: QuestionProps) {
  const [open, setOpen] = useState(false);

  function HandleOpenQuestion (){
    setOpen(!open);

  }
  
  return (
    <div className="w-full first:pt-0 pt-6 pb-8">
      <button onClick={HandleOpenQuestion} className="w-full flex items-center justify-between text-left">
        <h3 className="text-gray-900 text-lg/normal xl:text-xl/normal font-semibold">
         { title }
        </h3>
        {open
         ? <FiMinusCircle size={24} className="text-brand-600"/>
         : <FiPlusCircle size={24} className="text-brand-600"/>
        }
      </button>
      {open && (
        <p className="mt-2 text-gray-600 leading-normal pr-12">
          {response}
        </p>
      )}
    </div>
  )
}