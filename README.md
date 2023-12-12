# React Laravel Vite Boilerplate

This boilerplate provides a quick and efficient setup for building Laravel projects with React using Vite as the frontend build tool. It aims to streamline the process of creating Laravel projects with a React frontend by incorporating a modern development environment.

## Features

- **Laravel Backend:** Utilize the power of Laravel for robust backend development.
- **React with Vite:** A fast React setup with Vite for quick development and optimized builds.
- **Efficient Project Creation:** Save time with a pre-configured environment for Laravel and React.

## Getting Started

Follow these steps to set up the repository and start working on your Laravel React project:

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [Composer](https://getcomposer.org/)

### Clone the Repository

```bash
git clone https://github.com/abdou-roa/laravel-react-boilerplate.git
```

### Install dependencies

```bash
cd laravel-react-boilerplate
composer install
npm install
```

### Configuration

- Duplicate the `.env.example` file and rename it to `.env`  
- Open you `.env` file and update the following configurations : 
    * Set APP_URL to your local development URL.
    * Configure your database connection settings (DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD).

### Run the development server

```bash
npm run dev
php artisan serve
```
