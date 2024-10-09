
# Ecommerce Webite

This is a full-stack ecommerce platform built using Next.js for the frontend and Laravel for the backend, with MySQL as the database. The application provides a smooth user experience with a variety of features, including authentication, product management, and a responsive design with bilingual support and dark/light mode switching.




## Features

- Authentication: Users can register, log in, and log out securely. The platform also includes a password reset feature via email.

- Product Management (CRUD): Admins can create, read, update, and delete products. All products are displayed for users with the ability to add items to the cart and place orders.

- Shopping Cart: Users can add products to the cart, view cart details, and place orders easily.

- Order Placement: Users can place orders for the products they have added to the cart, and admins can manage these orders through the dashboard.

- Dashboard: The platform includes an intuitive and user-friendly dashboard for administrators to manage products, orders, and other relevant data.

- Messaging Feature: Users can send and receive messages directly on the platform, enhancing communication between customers and administrators.

Bilingual Support: The platform supports both Arabic and English, allowing users to switch between languages seamlessly.

Dark and Light Mode: Users can toggle between dark mode and light mode for a personalized viewing experience.

Responsive Design: The entire platform is built with responsiveness in mind, ensuring a smooth user experience across all devices, including desktops, tablets, and mobile phones.


## Technologies Used

- Frontend: Next.js (React framework) with support for bilingual language switching, dark/light mode, and a fully responsive design.
- Backend: Laravel for handling authentication, API routes, product management, and database interaction.
- Database: MySQL for managing products, users, orders, and other necessary data.
- Email Integration: Used for password reset and other email-related functionality.
## Installation

Clone the repository
```bash
  git clone https://github.com/Kader1680/ecommerce_Test.git
  cd ecommerce_Test
```
# Backend Setup (Laravel)
- Go to the backend directory:
```bash
  cd backend
```

- Install the PHP dependencies using Composer:
```bash
  composer install
```

- Generate the application key:
```bash
  php artisan key:generate
```

- Run the migrations to create the necessary database tables:
```bash
  php artisan migrate
```

- Start the Laravel development server:
```bash
  php artisan serve
```
The Laravel server should now be running on http://127.0.0.1:8000.
# Frontend Setup Nextjs
- Navigate to the frontend directory:
```bash
  cd ./front
```
-  Install the JavaScript dependencies:
```bash
  npm start
```    
-  Run the development server:
```bash
  npm run dev
```    