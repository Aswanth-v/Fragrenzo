

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
  { id: "chanel", label: "Chanel" },
  { id: "dior", label: "Dior" },
  { id: "gucci", label: "Gucci" },
  { id: "armani", label: "Armani" },
  { id: "versace", label: "Versace" },
  { id: "tom-ford", label: "Tom Ford" },
  { id: "ysl", label: "Yves Saint Laurent" },
  { id: "calvin-klein", label: "Calvin Klein" },
  { id: "hugo-boss", label: "Hugo Boss" },
  { id: "dolce-gabbana", label: "Dolce & Gabbana" },
  { id: "burberry", label: "Burberry" },
  { id: "hermes", label: "Hermès" },
  { id: "jo-malone", label: "Jo Malone" },
  { id: "bvlgari", label: "Bvlgari" },
  { id: "prada", label: "Prada" },
  { id: "lacoste", label: "Lacoste" },
  { id: "mont-blanc", label: "Mont Blanc" },
  { id: "coach", label: "Coach" },
  { id: "paco-rabanne", label: "Paco Rabanne" },
  { id: "givenchy", label: "Givenchy" },
  { id: "carolina-herrera", label: "Carolina Herrera" },
  { id: "mugler", label: "Mugler" },
  { id: "ralph-lauren", label: "Ralph Lauren" },
  { id: "zara", label: "Zara" },
  { id: "issey-miyake", label: "Issey Miyake" },
  { id: "salvatore-ferragamo", label: "Salvatore Ferragamo" },
  { id: "tiffany-co", label: "Tiffany & Co." },
  { id: "victoria-secret", label: "Victoria’s Secret" },
  { id: "john-varvatos", label: "John Varvatos" },
  { id: "marc-jacobs", label: "Marc Jacobs" },
  { id: "floral-essence", label: "Floral Essence" }, // your custom brand
  { id: "fresh-wave", label: "Fresh Wave" },        // your custom brand
  { id: "luxury-notes", label: "Luxury Notes" },    // your custom brand
  { id: "zesty", label: "Zesty" },                  // your custom brand
  { id: "sweet-aura", label: "Sweet Aura" }         // your custom brand
]

  },
  {
    label: "Volume (ml)",
    name: "volume", // ✅ fixed here
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

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/list",
  },
  {
    id: "men",
    label: "Men",
    path: "/shop/list",
  },
  {
    id: "women",
    label: "Women",
    path: "/shop/list",
  },
  {
    id: "unisex",
    label: "unisex",
    path: "/shop/list",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];