<div align="center">
  <br />
    <a href="https://cdn.dwolla.com/com/prod/20181212121102/featured-image-v2.png" target="_blank">
      <img src="https://cdn.dwolla.com/com/prod/20181212121102/featured-image-v2.png" alt="Project Banner">
    </a>
  <br />
  
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  </div>

  <h3 align="center">Banked. A fintech bank platform MVP</h3>

   <div align="center">
        Banked is here to help the way people handle their financial operations. Built with the cutting-edge technologies of NextJS and React, and leveraging the powerful APIs of Dwolla and Plaid, Banked offers an unparalleled experience in financial management.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. [Key Features](#key-features)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🤸 [Quick Start](#quick-start)

## <a name="key-features">Key features</a>

👉 **Real time Financial Insights**

<p>
Banked provides businesses with real-time financial data and insights, including an ultra-secure SSR authentication with proper validations and authorization. With an intuitive dashboards and detailed analytics, you can monitor cash flow, track expenses, and forecast financial performance with ease.
</p>

👉 **Seamless Bank Integrations**

<p>
Our platform integrates seamlessly with your bank accounts through the Plaid API. Plaid allows secure access to your financial data, making it simple to synchronize your bank transactions, automate reconciliations, and maintain accurate financial records.
</p>

👉 **Effortless Payments and Transfers**

<p>
With Dwolla's API, Banked facilitates smooth and secure payment processing. Whether it's ACH transfers, instant payments, or recurring transactions, our platform ensures your money moves swiftly and safely.
</p>

## <a name="tech-stack"> Tech Stack</a>

Banked has been created with the best today's technologies

<h4> Next.js and TypeScript for stability </h4>
<p>Banked app leverages the power of Next.js and TypeScript to provide a highly performant, scalable, and maintainable codebase. Enjoy the benefits of server-side rendering, static site generation, and type-safe programming for a robust and reliable platform.</p>

<h4>A solid backend thanks to Appwrite</h4>
<p>Backend operations are made with Appwrite, an open-source backend server that handles authentication, database, storage, and more. Appwrite ensures your data is managed efficiently and securely when you browse Banked.</p>

<h4>Plaid + Dwolla, the real magic behind the scene</h4>
<div align=center>
    <img src='https://cdn.dwolla.com/com/prod/20191011164033/dwolla-plus-plaid-featured-image.jpg'>
</div>

<p>Banked integrates seamlessly with banking and payment systems using Plaid and Dwolla. Plaid provides secure access to your bank accounts, while Dwolla enables smooth, fast, and secure payments. Together, they simplify financial transactions and data synchronization.</p>

<h4>React Hook Form and Zod</h4>
Simplified form management with React Hook Form and data validation with Zod. These tools provide an intuitive and efficient way to handle forms, reducing boilerplate code and improving user experience.

<h4>TailwindCSS</h4>
<p>Stunning, responsive user interfaces effortlessly with TailwindCSS. Our application boasts a modern, sleek design, ensuring an engaging user experience across all devices.</p>

<h4>Chart.js</h4>
<p>Visualize your financial data with Chart.js, a powerful library for creating interactive and responsive charts. Gain valuable insights through clear and concise data representation.</p>

<h4>ShadCN</h4>
<p>Enhance Banked app with ShadCN, a collection of beautiful and reusable React components.</p>

## <a name="quick-start">Quick Start</a>

You want to give it a try? Two options for you :

**Try the demo version online (easiest way)**
If you want to sign-in you can navigate freely on the platform using these credentials :

```bash
- demo email : john.doe@gmail.com
- demo password : 123123234
```

**You can also create an account using the sign-up form**
_Please respect the fields mentionned in the forms. Like many bank apps and for security, filters are extremely sensible_

- Dwolla application has been made initially for the US market. For that reason, 'State' field must be a US country of two letters only. I'll apply a fix/switch to another providers for other customers ASAP.
- After filling the form, you'll need to choose a bank to connect to (select anyone as it is fake datas for now). After that, you'll need to enter these credentials :

```bash
user_good
pass_good
```

**Finally, you can also try Banked locally**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/clnmlg/banked.git
cd banked
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox

```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Appwrite](https://appwrite.io/?utm_source=youtube&utm_content=reactnative&ref=JSmastery), [Plaid](https://plaid.com/) and [Dwolla](https://www.dwolla.com/)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
