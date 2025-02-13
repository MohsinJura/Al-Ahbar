import React from 'react'

const Section = ({ title, children }) => {
    return (
    <div className="w-full md:w-1/3 p-6">
      <h2 className="text-black text-xl font-bold text-center mb-6">{title}</h2>
      <p className="txt-bold">{children}</p>
    </div>
  )
}
export default Section
