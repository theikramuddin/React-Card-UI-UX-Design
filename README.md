# 🧩 Card UI/UX Component in React

A clean and responsive **Card UI/UX component** built using **React**, designed to showcase job listings. Each card displays essential job details like:

- 🏢 Company name & logo
- 🖥️ Role / position
- 🏷️ Tags (e.g., Full Time, Senior Level)
- 💸 Pay scale
- 📍 Location
- 🕒 Date posted

---

## 📸 Preview

![Card UI Preview](https://raw.githubusercontent.com/theikramuddin/React-Card-UI-UX-Design/refs/heads/main/src/assets/img.png)

---

## 🚀 Features

- ✅ Reusable Card Component (`<Card />`)
- 📦 Dynamic job data rendering via array
- 🧩 Lucide icons (Bookmark)
- 💼 Tags for job type and experience level
- 💰 Salary & 📍 Location displayed clearly
- 🎨 Clean layout ready for further styling

---

## 🛠️ Tech Stack

- ⚛️ React (Functional Components)
- 💅 CSS (Basic styling assumed)
- 📦 Lucide-react for icons

---

## 📁 Project Structure

```

src/
├── components/
│   └── Card.jsx        # Reusable Card component
├── App.jsx             # Main component that renders all cards
└── index.js

````

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/theikramuddin/React-Card-UI-UX-Design.git
cd card-ui-react
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm start
```

Go to: `http://localhost:3000`

---

## 🧪 Example Usage

You can reuse the `<Card />` component like this:

```jsx
<Card 
  brandLogo="logo_url"
  companyName="Company Name"
  datePosted="2 days ago"
  post="Frontend Developer"
  tag1="Full Time"
  tag2="Mid Level"
  pay="$90/hour"
  location="Remote"
/>
```

---

## 📌 Notes

* This is a **frontend-only UI**. There is no backend/API.
* Job data is hardcoded using a JavaScript array (can be replaced with API later).
* Card design can be further styled with your own CSS framework or utilities.

---

## 📃 License

Licensed under the **MIT License** - feel free to use and modify!

---

## 🙌 Author

Made with ❤️ by **Ikramuddin**

> 🌟 If you like this, consider giving the repo a ⭐ on GitHub!