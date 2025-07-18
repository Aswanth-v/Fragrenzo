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
  formControls = [],   // ✅ updated to match the prop name passed from Address.jsx
  formdata,
  setFormdata,
  onSubmit,
  buttonText,
  isBtnDisabled,
}) => {
  const renderInputsByComponentType = (item) => {
    const value = formdata?.[item.name] || "";

    switch (item.componentType) {
      case "input":
        return (
          <Input
            name={item.name}
            placeholder={item.placeholder}
            id={item.name}
            type={item.type}
            value={value}
            onChange={(e) =>
              setFormdata({ ...formdata, [item.name]: e.target.value })
            }
          />
        );

      case "select":
        return (
          <Select
            value={value}
            onValueChange={(val) =>
              setFormdata({ ...formdata, [item.name]: val })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={item.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {item.options?.map((optionItem) => (
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
            name={item.name}
            placeholder={item.placeholder}
            id={item.name}
            value={value}
            onChange={(e) =>
              setFormdata({ ...formdata, [item.name]: e.target.value })
            }
          />
        );

      default:
        return (
          <Input
            name={item.name}
            placeholder={item.placeholder}
            id={item.name}
            type={item.type}
            value={value}
            onChange={(e) =>
              setFormdata({ ...formdata, [item.name]: e.target.value })
            }
          />
        );
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((item) => (
          <div className="grid w-full gap-1.5" key={item.name}>
            <Label className="mb-1">{item.label}</Label>
            {renderInputsByComponentType(item)}
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
