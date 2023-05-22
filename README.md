
# Plumebooks - Book E-commerce

Plumebooks is a book e-commerce application built with Laravel and React, allowing users to browse, purchase, and manage books online. The application supports features such as account registration, shopping carts, book checkout via PayPal, and book management through the admin interface. It also provides API routes for external integrations.

## Tech Stack

- Inertia.js
- React
- TypeScript
- Laravel
- MySQL
- PHP
- Styled Components

## Installation

**Step 1:** Fork the repository and clone it or just clone this repo directly on your local git by doing the below command:
> Make sure to have git installed

```bash
git clone https://github.com/PikaRaymart/plumebooks.git
```

**Step 2:** CD to the project folder and execute the following commands:

> Make sure you have Node.js, Composer, MySQL, and PHP installed beforehand.

```bash
composer install   # Install PHP dependencies

npm install       # Install Node.js dependencies
```

**Step 3:** Copy the `.env.example` file to `.env`. Fill in the necessary environment fields, including:
  - `APP_PASSWORD`: Admin's password for logging in.
  - `PAYPAL_SANDBOX_CLIENT_ID`: PayPal sandbox client ID for checkout implementation.
  - `PAYPAL_SANDBOX_CLIENT_SECRET`: PayPal sandbox client secret.

  After configuring the `.env` file, generate the application key by running:

  ```bash
  php artisan key:generate
  ```

**Step 4:** The application includes seeders, so you can run the following command to migrate and seed the database:

  ```bash
  php artisan migrate:fresh --seed
  ```
  
 **Step 5:** Since the application relies on the local storage, running the below command will make sure that files are used on the web:
 > Some images are already included in the public/storage/books

  ```bash
  php artisan  storage:link
  ```

**Step 6:** Run the Application

Open the terminal and run the command:

  ```bash
  php artisan inertia:serve #Runs the dev mode with ssr serving and hmr
  ```

**Step 7:** Open your web browser and go to [http://localhost:3000/](http://localhost:3000/) to start using the application.


**Step 8 (extra):** For ssr mode when in dev server. If you want to check if your app is hydrating the client properly, just run first `npm run build` before step 7. Though an issue is still ongoing with this cause by styled-components. But this build properly, just that it won't hydrate properly.

Thank you for installing Plumebooks! Enjoy using the application.
