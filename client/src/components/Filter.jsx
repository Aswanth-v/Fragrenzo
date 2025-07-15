import { filterOptions } from "../config/RegisterformControlls";
import { Fragment } from "react";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";

const ProductFilter = ({ filters, handleFilter }) => {
  return (
    <div className="bg-background rounded-lg shadow-sm border">
      <div className="p-4 border-b">
        <h2 className="text-lg font-bold">Filters</h2>
      </div>

      <div className="p-4 space-y-6">
        {Object.keys(filterOptions).map((keyItem) => (
          <Fragment key={keyItem}>
            <div className="space-y-3">
              <h3 className="text-base font-semibold">{keyItem}</h3>

              <div className="flex flex-col gap-2">
                {filterOptions[keyItem].map((option) => (
                  <Label
                    key={option.id}
                    className="flex items-center gap-2 text-sm cursor-pointer"
                  >
                    <Checkbox
                      checked={
                        filters &&
                        Object.keys(filters).length > 0 &&
                        filters[keyItem] &&
                        filters[keyItem].indexOf(option.id) > -1
                      }
                      onCheckedChange={() => handleFilter(keyItem, option.id)}
                    />
                    {option.label}
                  </Label>
                ))}
              </div>
            </div>
            <Separator className="my-2" />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
