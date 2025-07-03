import React from "react";
import { Input } from "./input";
import { Label } from "./label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./select";
import { Textarea } from "./textarea";
import { Button } from "./button";

const Form = ({
  formdata,       // ✅ your original prop name
  data,           // ✅ your original prop name
  setData,        // ✅ your original prop name
  onSubmit,
  buttonText,
  isBtnDisabled,
}) => {
  function renderInputsByComponentType(getformItem) {
    const value = data?.[getformItem.name] || "";

    switch (getformItem.componentType) {
      case "input":
        return (
          <Input
            name={getformItem.name}
            placeholder={getformItem.placeholder}
            id={getformItem.name}
            type={getformItem.type}
            value={value}
            onChange={(event) =>
              setData({
                ...data,
                [getformItem.name]: event.target.value,
              })
            }
          />
        );

      case "select":
        return (
          <Select
            value={value}
            onValueChange={(val) =>
              setData({
                ...data,
                [getformItem.name]: val,
              })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue
                placeholder={getformItem.placeholder}
              />
            </SelectTrigger>
            <SelectContent>
              {getformItem.options?.map((optionItem) => (
                <SelectItem key={optionItem.id} value={optionItem.id}>
                  {optionItem.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "textarea":
        return (
          <Textarea
            name={getformItem.name}
            placeholder={getformItem.placeholder}
            id={getformItem.name}
            value={value}
            onChange={(event) =>
              setData({
                ...data,
                [getformItem.name]: event.target.value,
              })
            }
          />
        );

      default:
        return (
          <Input
            name={getformItem.name}
            placeholder={getformItem.placeholder}
            id={getformItem.name}
            type={getformItem.type}
            value={value}
            onChange={(event) =>
              setData({
                ...data,
                [getformItem.name]: event.target.value,
              })
            }
          />
        );
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formdata.map((formItem) => (
          <div className="grid w-full gap-1.5" key={formItem.name}>
            <Label className="mb-1">{formItem.label}</Label>
            {renderInputsByComponentType(formItem)}
          </div>
        ))}
      </div>
      <Button disabled={isBtnDisabled} type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
};

export default Form;
