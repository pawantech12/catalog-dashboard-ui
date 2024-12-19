# Sale Analytics Dashboard

A professional and responsive sales analytics dashboard built using **ReactJS**, **TailwindCSS**, and **Chart.js**. This dashboard provides a comprehensive overview of sales performance, including various dynamic charts and data visualizations. The dashboard fetches data from a dummy JSON file, `sampleData.json`, and is fully responsive with smooth transitions and hover effects.

### Features

- **Responsive Sidebar & Navbar**: The layout adapts to both mobile and desktop devices, with a collapsible sidebar and a fixed top navbar.
- **Sales Distribution**: A container that displays total sales, sales by website, mobile, and market.
- **Charts Section**: Dynamic charts displaying sales overview, revenue updates, and yearly sales, including:
  - **Donut Chart** for sales distribution.
  - **Bar Chart** for revenue updates.
  - **Wave Chart** for yearly sales.
- **Active User Map**: Integrated with the Google Maps JavaScript API to display active user locations on a map.
- **Payment Gateway Section**: A dedicated section for payment gateway integration.
- **Skeleton Loaders**: Display skeleton loaders for chart and sales cards while data is being fetched.
- **Hover Effects**: Smooth hover effects on interactive elements such as cards and charts.

### Tech Stack

- **ReactJS** for building the user interface.
- **TailwindCSS** for styling and responsive design.
- **Chart.js** for dynamic chart rendering.
- **Google Maps JavaScript API** for integrating maps.
- **Skeleton Loaders** for placeholders during data loading.

### Installation

To get started with this project, follow the steps below:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/pawantech12/catalog-dashboard-ui.git
   cd catalog-dashboard-ui
   ```

2. **Install Dependencies**:

   Make sure you have `Node.js` installed. Then, run:

   ```bash
   pnpm install
   ```

3. **Create `.env` file:**
   Create a .env file in the root of the project and add your Google Maps API key:
   makefile

```bash
VITE_APP_GOOGLE_MAP_API=your-google-maps-api-key
```

4. **Run the Application**:

   Start the development server:

   ```bash
   pnpm run dev
   ```

   The application will be available at `http://localhost:5173` in your browser.

### Project Structure

- **src/**
  - **assets/**: Contains images and static files.
  - **components/**: Reusable UI components (Sidebar, Navbar,etc.).
  - **pages/**: Contains the main dashboard page .
  - **App.jsx**: The main entry point for the React app.
  - **main.jsx**: The entry point to render the app in the DOM.

### Features Explained

1. **Responsive Sidebar & Navbar**:

   - The sidebar contains navigation links such as Sales Overview, Revenue Update, and Yearly Sales.
   - The navbar includes user profile settings, and the sidebar can be toggled on smaller screens (mobile/tablet).

2. **Sales Distribution Container**:

   - Displays key sales metrics like:
     - Total Sales
     - Sales by Website
     - Sales by Mobile
     - Sales by Market
   - These values are fetched dynamically from `sampleData.json`.

3. **Charts Section**:

   - **Sales Overview (Donut Chart)**: A donut chart showing the distribution of sales across different categories.
   - **Revenue Update (Bar Chart)**: A bar chart showing revenue updates over time.
   - **Yearly Sales (Wave Chart)**: A wave chart displaying sales performance for the current year.

4. **Active User Map**:

   - This section uses the **Google Maps JavaScript API** to display the active users on a map based on the data fetched from `sampleData.json`.

5. **Payment Gateway Section**:

   - An interactive section for payment gateway integration (simulated with dummy data).

6. **Skeleton Loaders**:
   - Placeholder skeleton loaders are shown for chart cards and sales cards until the data is loaded.

### Dynamic Data

The data displayed on the dashboard is fetched dynamically from a file named **`sampleData.json`**. This allows you to easily update the data without changing the code. The data includes sales, revenue, user locations, and other related information.

### Contact Information

Feel free to reach out for any questions or feedback:

- **Name**: Pawan Kumavat
- **Mobile**: 9619579304
- **Email**: pawankumavat042@gmail.com

### License

This project is **free to use** and open-source. Feel free to clone, modify, and distribute as needed.

This README provides a detailed overview of your project, its features, and how to set it up. Feel free to modify any sections as needed or add additional details!
