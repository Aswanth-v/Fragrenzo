# Fragrenzo

Fragrenzo is a full-stack e-commerce web application built using the MERN stack. It includes authentication, product management, cart functionality, order management, image uploads, and payment integration.

## Features

### User Features
- User registration and login
- JWT authentication
- Browse products
- Add/remove products from cart
- Checkout and order management

### Admin Features
- Add, edit, and delete products
- Product image upload
- Manage inventory and orders

## Tech Stack

### Frontend
- React.js
- Redux Toolkit
- JavaScript
- Tailwind CSS

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcryptjs
- REST APIs

### Database
- MongoDB
- Mongoose

### Other Tools & Services
- Cloudinary (image uploads)
- Multer (file handling)
- PayPal Sandbox (payments)
- Cookie Parser
- Git & GitHub

## Installation

### Clone the repository

```bash
git clone https://github.com/Aswanth-v/Fragrenzo.git
cd Fragrenzo
```

### Install dependencies

Backend:

```bash
cd server
npm install
```

Frontend:

```bash
cd client
npm install
```

## Environment Variables

Create a `.env` file in the server folder and add:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Run the Project

Backend:

```bash
npm run dev
```

Frontend:

```bash
npm run dev
```

## Author

Aswanth V

GitHub: https://github.com/Aswanth-v
LinkedIn: https://linkedin.com/in/aswanth-v
