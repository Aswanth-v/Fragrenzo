

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

export const filterOptions = {
  category: [
    { id: "men", label: "Men" },
    { id: "women", label: "Women" },
    { id: "unisex", label: "Unisex" },
  ],
  brand: [
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
    { id: "floral-essence", label: "Floral Essence" },
    { id: "fresh-wave", label: "Fresh Wave" },
    { id: "luxury-notes", label: "Luxury Notes" },
    { id: "zesty", label: "Zesty" },
    { id: "sweet-aura", label: "Sweet Aura" },
  ],
};


export const categoryOptionsMap = {
  men: "Men",
  women: "Women",
  unisex: "Unisex",
};

export const brandOptionsMap = {
  chanel: "Chanel",
  dior: "Dior",
  gucci: "Gucci",
  armani: "Armani",
  versace: "Versace",
  "tom-ford": "Tom Ford",
  ysl: "Yves Saint Laurent",
  "calvin-klein": "Calvin Klein",
  "hugo-boss": "Hugo Boss",
  "dolce-gabbana": "Dolce & Gabbana",
  burberry: "Burberry",
  hermes: "Hermès",
  "jo-malone": "Jo Malone",
  bvlgari: "Bvlgari",
  prada: "Prada",
  lacoste: "Lacoste",
  "mont-blanc": "Mont Blanc",
  coach: "Coach",
  "paco-rabanne": "Paco Rabanne",
  givenchy: "Givenchy",
  "carolina-herrera": "Carolina Herrera",
  mugler: "Mugler",
  "ralph-lauren": "Ralph Lauren",
  zara: "Zara",
  "issey-miyake": "Issey Miyake",
  "salvatore-ferragamo": "Salvatore Ferragamo",
  "tiffany-co": "Tiffany & Co.",
  "victoria-secret": "Victoria’s Secret",
  "john-varvatos": "John Varvatos",
  "marc-jacobs": "Marc Jacobs",
  "floral-essence": "Floral Essence",
  "fresh-wave": "Fresh Wave",
  "luxury-notes": "Luxury Notes",
  zesty: "Zesty",
  "sweet-aura": "Sweet Aura",
};

export const sortOptionsMap = {
  "price-lowtohigh": "Price: Low to High",
  "price-hightolow": "Price: High to Low",
  "title-atoz": "Title: A to Z",
  "title-ztoa": "Title: Z to A",
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "newest", label: "Newest First" },
  { id: "oldest", label: "Oldest First" }
];
