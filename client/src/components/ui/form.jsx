import React from "react";

const Form = ({ formdata, data, setData, onSubmit, buttonText }) => {
  const InputComponent = (getformItem) => {
    const value = data[getformItem.name] || ""; 

    const commonStyles = "w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

    switch (getformItem.componentType) {
      case "input":
        return (
          <input
            className={commonStyles}
            name={getformItem.name}
            placeholder={getformItem.placeholder}
            id={getformItem.name}
            type={getformItem.type}
            value={value}
            onChange={(event) =>
              setData({ ...data, [getformItem.name]: event.target.value })
            }
          />
        );
      case "select":
        return (
          <select
            className={commonStyles}
            value={value}
            onChange={(event) =>
              setData({ ...data, [getformItem.name]: event.target.value })
            }
          >
            <option value="">{getformItem.placeholder}</option>
            {getformItem.options?.map((optionItem) => (
              <option key={optionItem.id} value={optionItem.id}>
                {optionItem.value}
              </option>
            ))}
          </select>
        );
      case "textarea":
        return (
          <textarea
            className={commonStyles}
            name={getformItem.name}
            placeholder={getformItem.placeholder}
            id={getformItem.name}
            value={value}
            onChange={(event) =>
              setData({ ...data, [getformItem.name]: event.target.value })
            }
            rows={4}
          />
        );
      default:
        return (
          <input
            className={commonStyles}
            name={getformItem.name}
            placeholder={getformItem.placeholder}
            id={getformItem.name}
            type={getformItem.type}
            value={value}
            onChange={(event) =>
              setData({ ...data, [getformItem.name]: event.target.value })
            }
          />
        );
    }
  };
  
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-4">
        {formdata.map((formItem) => (
          <div className="grid w-full gap-1.5" key={formItem.name}>
            <label className="mb-1 font-semibold text-gray-700">{formItem.label}</label>
            {InputComponent(formItem)}
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="w-full mt-4 rounded-lg bg-muted-foreground text-white py-3 font-bold hover:bg-chart-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
      >
        {buttonText || "Submit"}
      </button>
    </form>
  );
};

export default Form;
