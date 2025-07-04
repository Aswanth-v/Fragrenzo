

export const RegisterformControlls =[
    {
        name:'userName',
        label:'User Name',
        placeholder:'Enter Username',
        type:'text',
        componentType:'input'
    },
    {
        name:'email',
        label:'User email',
        placeholder:'Enter Email',
        type:'email',
        componentType:'input'
    },
    {
        name:'password',
        label:'User password',
        placeholder:'Enter Password',
        type:'password',
        componentType:'input'
    }
]

export const LoginformControlls =[

    {
        name:'email',
        label:'User email',
        placeholder:'Enter Email',
        type:'email',
        componentType:'input'
    },
    {
        name:'password',
        label:'User password',
        placeholder:'Enter Password',
        type:'password',
        componentType:'input'
    }
]

export const addFragrensFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter fragrance name",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter fragrance description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
      placeholder: "Select a Category", 
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "unisex", label: "Unisex" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    placeholder: "Select a Brand",
    options: [
      { id: "floral-essence", label: "Floral Essence" },
      { id: "fresh-wave", label: "Fresh Wave" },
      { id: "luxury-notes", label: "Luxury Notes" },
      { id: "zesty", label: "Zesty" },
      { id: "sweet-aura", label: "Sweet Aura" },
    ],
  },
  {
    label: "Volume (ml)",
    name: "ml",
    componentType: "input",
    type: "number",
    placeholder: "Enter quantity in ml",
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Stock",
    name: "stock",
    componentType: "input",
    type: "number",
    placeholder: "Enter available stock",
  }
];
