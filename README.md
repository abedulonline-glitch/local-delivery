# 🚀 Hyperlocal Delivery & Marketplace System (v2)

## 📌 Project Overview
This is a comprehensive, single-page application (SPA) built with **Vanilla JavaScript**, **Firebase (Firestore & Auth)**, and **GitHub Pages**. It serves as a multi-vendor hyperlocal delivery and marketplace ecosystem, designed for local businesses (Grocery, Restaurant, etc.) and independent shopkeepers.

The system operates on a multi-tenant SaaS model where the Admin controls the platform, Managers oversee specific PIN codes, Shopkeepers sell products, Delivery Boys fulfill orders, and Customers make purchases.

---

## 🏗️ Tech Stack & Libraries
*   **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES Modules)
*   **Backend / Database:** Firebase (Firestore, Auth)
*   **Hosting:** GitHub Pages
*   **Libraries Used:**
    *   `Leaflet.js`: For interactive maps (Customer address, Shop location, Manager tracking).
    *   `Cropper.js`: For image cropping before upload.
    *   `ImgBB API`: For image hosting.
    *   `JsBarcode`: For generating product barcodes.
    *   `html5-qrcode`: For the POS barcode scanner.
    *   `@xenova/transformers`: For AI-based Image Search (CLIP model).

---

## 👥 User Roles & Access Levels

1.  **Super Admin / Admin:**
    *   Creates Master Products (Name, Category, Image only).
    *   Manages Platform Settings (Commission rates, subscription fees).
    *   Approves/Rejects Shopkeepers and Delivery Boys.
    *   Manages Categories and Category Requests.
    *   Generates and prints A4 Barcode sheets.
    *   *Bypass:* Can manage any shopkeeper's inventory directly.

2.  **Manager:**
    *   Assigned to one or multiple PIN codes.
    *   Manages Shopkeepers and Delivery Boys within their PIN codes.
    *   Can force-assign orders to delivery boys if no one bids.
    *   Has a live tracking map of shops and delivery boys in their area.
    *   Can generate offers and manage Khaata (Credit) for shops.

3.  **Shopkeeper:**
    *   Selects products from the Admin's Master Catalog.
    *   Sets own Base Price, Base Weight, Stock, Minimum/Maximum Order limits, and Packaging Charges.
    *   Purchases Subscriptions (Premium Badge, Verified Badge, Barcode Plan, Standalone Mode).
    *   Can suggest new categories to the Admin.

4.  **Delivery Boy:**
    *   Registers without a mandatory location (Location is tracked live via GPS when online/bidding).
    *   Bids on "Ready" orders (Reverse Auction).
    *   Uses the POS Scanner for instant billing.
    *   Requires OTP from the customer to complete delivery (Anti-fraud).

5.  **Customer:**
    *   Registers using just a Phone Number (Phone-as-Email method).
    *   Browses products based on Distance Range (1-15 km slider).
    *   Uses the Smart Weight/Budget Calculator to buy custom quantities (e.g., 250g of Turmeric).
    *   Places orders, tracks delivery boys on a map, and rates the experience.

---

## 🗄️ Database Structure (Firestore Collections)

*   `users`: Stores all profiles (Admin, Manager, Shopkeeper, Delivery, Customer). Includes `walletBalance`, `role`, `pinCode`, `lat`, `lng`, `managerPins`, `isPremium`, `isBarcodeActive`, etc.
*   `master_products`: Created by Admin. Fields: `name`, `category`, `image`, `imageVector` (AI feature).
*   `products`: Created by Shopkeepers. Fields: `shopId`, `masterProductId`, `price`, `baseWeight`, `unit`, `packagingCharge`, `minOrderWeight`, `maxOrderWeight`, `stock`, `imageVector`.
*   `orders`: Fields: `customerId`, `shopId`, `deliveryBoyId`, `status` (pending, ready, bidding, assigned, delivered), `otp`, `deliveryCharge`, `lat`, `lng`.
*   `categories`: Approved categories by Admin.
*   `category_requests`: Suggestions sent by Shopkeepers.
*   `system_settings`: Global configurations (e.g., `global_config` document with commission rates and fees).
*   `ads`: Promotional images/videos for the top banner.
*   `pos_sales`: Records of quick sales generated via the POS system.

---

## 🧠 Core Business Logic & Algorithms

### 1. Pricing & Calculator Engine (Dynamic Volume Pricing)
*   **Base Rate:** Shopkeeper sets a Base Price for a Base Weight (e.g., ₹100 for 1000gm).
*   **Custom Weight/Budget:** Customers can use a slider or input a budget (e.g., ₹60). The system calculates the exact weight.
*   **Dynamic Discounting:** Buying less than the base weight adds a 2% surcharge (packaging cost). Buying more than the base weight gives a 2% discount.
*   **Non-Linear Slider:** The slider steps scale up as the weight increases (e.g., steps of 50g up to 500g, then steps of 100g).

### 2. Reverse Auction (Bidding) & Auto-Dispatch
*   When a shopkeeper marks an order as `ready`, Delivery Boys can **Bid** on it (lowest delivery charge wins).
*   **Manager Auto-Dispatch:** Managers can toggle "Auto-Dispatch". If ON, the system calculates the distance between the shop and all online delivery boys in that PIN code, and automatically assigns the order to the nearest boy with the lowest active load.

### 3. Subscription & Monetization (Admin Revenue)
*   **Premium/Verified Badges:** Shopkeepers pay a monthly fee to get highlighted in search results.
*   **Barcode Plan:** Shopkeepers must purchase a plan to generate and print barcodes.
*   **Standalone Mode (SaaS):** Shopkeepers pay a monthly fee to add their own custom products, bypassing the Admin's Master Catalog.
*   **Name Visibility Gating:** If a shopkeeper's subscription expires, their name is hidden on the customer's "Best Price" card (it shows "Hidden Shop" instead).

### 4. Anti-Fraud & Security
*   **OTP Delivery:** Delivery boy must enter the customer's OTP to mark an order as delivered.
*   **GPS Lock:** Delivery boy's location is tracked live. 
*   **Negative Blocker:** System blocks negative numbers in price/weight inputs.
*   **Category Deletion Restriction:** A category cannot be deleted if any product exists under it.

### 5. AI Image Search (In-Progress)
*   Uses CLIP Vision Model (`Xenova/clip-vit-base-patch32`).
*   When a product is added, an `imageVector` (256 dimensions) is generated and saved as a JSON string.
*   Customers can upload an image to search for visually similar products using Cosine Similarity.

---

## 📱 POS (Point of Sale) System
*   **Instant Scanner:** Uses the phone's camera to scan `CODE128` barcodes.
*   **Quick Billing:** Automatically adds scanned items to the cart, allows manual quantity adjustments (`+`/`-`), and calculates the total.
*   **WhatsApp Receipt:** After checkout, the system generates a pre-formatted text receipt to send via WhatsApp to the customer or manager.
*   **A4 Barcode Print:** Admins can generate an A4 PDF/Print sheet with multiple barcodes for physical products.

---

## 🗺️ Map Integration
*   Uses `Leaflet.js` + `OpenStreetMap` (Free).
*   **Customer Address:** Interactive map for pinning addresses.
*   **Manager Dashboard:** Shows polygons/circles for their assigned PIN codes and live tracking of shops (`🏪`) and delivery boys (`🛵`).

---

## 🔧 Recent Updates (Session Log)
*   Implemented Phone-as-Email Authentication (Frictionless login for customers/shops).
*   Added Smart Weight/Budget Calculator with Dynamic Pricing.
*   Implemented Barcode Generation and A4 Print Center.
*   Built POS Billing System with Scanner and WhatsApp Share.
*   Added Manager Dashboard with Live Map Tracking and Auto-Dispatch Toggle.
*   Refactored Master Product & Shop Product forms for better UX.
*   Integrated AI Image Vector generation (CLIP model).

---

## 🚀 How to Deploy
1. Clone the repository.
2. Update `firebase-config-beta.js` with your Firebase project credentials.
3. Update the ImgBB API Key in `delivery-v2.html`.
4. Push to GitHub and enable GitHub Pages.
