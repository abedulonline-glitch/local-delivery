# 🚀 Local Delivery & Marketplace System

## 📌 Project Overview
এটি একটি মাল্টি-রোল ডেলিভারি ও মার্কেটপ্লেস সিস্টেম। এখানে অ্যাডমিন, ম্যানেজার, দোকানদার, ডেলিভারি বয় এবং কাস্টমার—এই ৫টি রোল কাজ করে।

## 🛠 Tech Stack
- **Frontend:** HTML, CSS, Vanilla JavaScript (ES Modules)
- **Backend:** Firebase (Firestore, Auth) - নতুন আলাদা প্রজেক্ট
- **Hosting:** GitHub Pages
- **Image Hosting:** ImgBB API
- **Map:** Leaflet.js (OpenStreetMap)

## 📂 Files Structure
- `delivery-v2.html` - মূল অ্যাপ (UI + Logic)
- `delivery-firebase-config.js` - ফায়ারবেস কনফিগারেশন
- `delivery-i18n.js` - ১২টি ভাষার ট্রান্সলেশন সিস্টেম

## 💡 Core Logic & Features
1. **Wallet System:** সব ইউজারের প্রি-পেইড ওয়ালেট আছে। অ্যাডমিন ১% কমিশন নেয়।
2. **Reverse Bidding:** দোকানদার প্রোডাক্ট রেডি করলে ডেলিভারি বয়রা সবচেয়ে কম দামে বিড করে।
3. **Pin-wise Manager:** অ্যাডমিন একাধিক পিনকোডের দায়িত্ব একজন ম্যানেজারকে দিতে পারে।
4. **Anti-Fraud OTP:** ডেলিভারি বয় কাস্টমারের ১০০ মিটারের মধ্যে না এলে এবং OTP না মিললে ডেলিভারি ক্লোজ হবে না।
5. **Khata System:** কাস্টমার বাকিতে কিনতে পারে (দোকানদারের পারমিশনে)।
6. **Master Products & Grade:** অ্যাডমিন প্রোডাক্ট অ্যাড করবে (Grade A/B/C সহ)। দোকানদার নিজের রেট বসাবে।
