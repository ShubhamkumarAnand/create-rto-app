# Create RTO App (Remix + Tailwind + Prisma + SQLite)

**Create RTO App** is a starter template for building full-stack web applications using the Remix framework, Tailwind CSS for styling, Prisma as the ORM (Object-Relational Mapping) tool, and SQLite as the database. This template is designed to help you kickstart your web development projects with these modern and powerful technologies.

## Features

- **[Remix Framework](https://remix.run/):** Remix is a versatile framework for building web applications. It provides server-rendered React and has features like routing, data loading, and code splitting built in.

- **[Tailwind CSS](https://tailwindcss.com/):** Tailwind CSS is a highly customizable CSS framework that makes styling and designing your application a breeze. It comes with utility classes to help you quickly build responsive and beautifully styled user interfaces.

- **[Prisma ORM](https://www.prisma.io/):** Prisma is a modern database toolkit that simplifies database access in your application. It supports various databases, and in this template, we use SQLite for easy setup and development.

- **[Shadcn/Ui](https://ui.shadcn.com/):** Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.

- **[SQL Lite](https://www.sqlite.org/index.html):** SQLite is a software library that implements a self-contained, serverless, zero-configuration, transactional SQL database engine. SQLite is the most widely deployed SQL database engine in the world.

## Getting Started

To use this template and start your development journey, follow these steps:

1. **Clone the Repository:**

```bash
  git clone https://github.com/ShubhamkumarAnand/create-rto-app.git

  ## Remix 
  bunx create-remix@latest --template ShubhamkumarAnand/create-rto-app
```

2. **Install Dependencies:**

```bash
    cd create-rto-app

    # Copy the env variable
    cp .env.example -r .env

    # install the dependency
    bun install
```

3. **Set Up the Database:**

Configure your database connection in the `.env` file. You can use SQLite as the default database for quick setup.

4. **Run the Development Server:**

```bash
    bun dev
```

5. **Start Building:**

Open your browser and visit `http://localhost:3000`. You can now start building your web application using Remix, Tailwind CSS, and Prisma.

## Configuration

- Update `.env` with your database connection details and environment variables.
- Customize Tailwind CSS by editing `tailwind.config.js` and `src/styles/tailwind.css`.
- Create your Remix routes and pages in the `src/routes` directory.

## Contribute

Contributions to this template are welcome! If you find issues or want to improve the template, please submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE.md).

---

Happy coding with Create RTO App! 🚀
