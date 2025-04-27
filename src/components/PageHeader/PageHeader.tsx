import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { PageHeaderProps } from './PageHeader.types';

export default function PageHeader({Page, route1 , route2} : PageHeaderProps) : React.JSX.Element {
  return (
    <section className="PageHeader my-7 h-[200px] bg-gray-200 flex justify-center items-center">
    <div>
      <h1 className="text-5xl">{Page}</h1>
      <div className="flex items-center justify-center pt-3 text-center">
        <span>{route1}</span>
        <span>
          <IoIosArrowForward />
        </span>
        <span>{route2}</span>
      </div>
    </div>
  </section>
  )
}
