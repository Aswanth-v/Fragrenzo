import React from "react";

const Form = ({ formdata,data,setData,onSubmit,buttonText }) => {
  const InputComponent = (getformItem) => {
    let element = null;
    const value=data[getformItem.name] ||""
    switch (getformItem.componentType) {
      case "input":
        element = (
          <input
            name={getformItem.name}
            placeholder={getformItem.placeholder}
            id={getformItem.name}
            type={getformItem.type}
           value={value}
           onChange={event=>setData({
            ...data,
            [getformItem.name]:event.target.value
           })}
          />
        );
        break;

      case "select":
        element = (
          <select onValueChange={(value)=>setData({
            ...data,
            [getformItem.name]:value
          })} value={value}>
            <option value="">{getformItem.placeholder}</option>
            {getformItem.options &&
              getformItem.options.map((optionItem) => (
                <option key={optionItem.id} value={optionItem.id}>
                  {optionItem.value}
                </option>
              ))}
          </select>
        );
        break;
      case "textarea":
        element = (
          <Textarea
            name={getformItem.name}
            placeholder={getformItem.placeholder}
            id={getformItem.id}
            value={value}
             onChange={event=>setData({
            ...data,
            [getformItem.name]:event.target.value
           })}
          ></Textarea>
        );
        break;

      default:
        element = (
          <input
            name={getformItem.name}
            placeholder={getformItem.placeholder}
            id={getformItem.name}
            type={getformItem.type}
             onChange={event=>setData({
            ...data,
            [getformItem.name]:event.target.value
           })}
          />
        );
        break;
    }

    return element;
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-4">
        {formdata.map((formItem) => (
          <div className="grid w-full gap-1.5" key={formItem.name}>
            {/* Render the actual form fields, e.g.: */}
            <label className="mb-1">{formItem.label}</label>
            {InputComponent(formItem)}
          </div>
        ))}
      </div>
      <button type="submit" className="w-full mt-2">Submit</button>
    </form>

  );
};

export default Form;
