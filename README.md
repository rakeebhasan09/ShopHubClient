# ShopHub 🚀

**ShopHub** is a modern web application designed to help users manage, showcase, and sell their products efficiently.  
The platform allows users to create, view, and delete products while providing analytics, inventory tracking, and a smooth user experience.

![ProductHub Screenshot](./Screenshot1.png)

---

![ProductHub Screenshot](./Screenshot2.png)

🔗 **Live Demo:** https://shophub-by-rakeeb.vercel.app/

🔗 **GitHub Repository (Client):** https://github.com/rakeebhasan09/ShopHubClient.git

🔗 **GitHub Repository (Server):** https://github.com/rakeebhasan09/ShopHub-server.git

### Frontend

```bash
git clone https://github.com/rakeebhasan09/ShopHubClient.git
npm install
// you need to set some environt variables
npm run dev
```

### Frontend Routes

| Route              | Description                                      |
| ------------------ | ------------------------------------------------ |
| `/`                | Home page displaying featured products and stats |
| `/login`           | Login page for users                             |
| `/register`        | Registration page                                |
| `/add-product`     | Add a new product (login required)               |
| `/products`        | Browse all products                              |
| `/products/:id`    | Product details page                             |
| `/manage-products` | Manage user's products (login required)          |
| `/about`           | About page                                       |
| `/contact`         | Contact page                                     |

---

## 🛠 Technologies Used

**Frontend:**  
Next.js, React, Tailwind CSS, DaisyUI, Firebase, Axios, Lucide React

**Backend:**  
Node.js, Express.js, MongoDB, cors, dotenv
