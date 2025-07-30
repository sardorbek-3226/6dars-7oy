import React from 'react'

const FormInput = ({label,type,name, message, showError}) => {
  return (
    <fieldset className="fieldset">
            <legend className="fieldset-legend text-white lg:text-black">
                {label}
            </legend>
            <input type={type} name={name} className="input w-full text-black " placeholder="Type here" />
            {showError && <p className='label'>{message}</p>}
          </fieldset>
  )
}

export default FormInput
