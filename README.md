# 🌐 XChango – Skill Swap Platform

**XChango** is a web-based platform that allows users to list their skills, find others with complementary skills, and swap them directly. Built during a hackathon, this project promotes collaborative growth and community-driven learning.

---

## 🚀 Features

### 👤 User Functionality
- Create a user profile with:
  - Name
  - Location (optional)
  - Availability (e.g., weekends, evenings)
  - LinkedIn (for professionalism)
  - Profile visibility toggle (public/private)
- Add skills you **offer** and **want**
- Browse/search users by:
  - Skill (e.g., Photoshop, Python)
  - Availability
  - Name (fuzzy search)
- Send, accept, reject, or delete skill swap requests
- View pending and completed swaps
- Rate and give feedback after a swap (future scope)

---

### 🛡️ Admin Panel
- Ban/unban users violating guidelines
- Monitor all swap requests (pending, accepted, rejected)
- Reject inappropriate skills
- Send platform-wide announcements
- View logs and feedback (reporting feature)

---

## 🛠️ Tech Stack

| Layer        | Technology           |
|--------------|----------------------|
| **Frontend** | React.js, CSS        |
| **Backend**  | Node.js, Express.js  |
| **Database** | MySQL                |
| **API Tool** | Thunder Client (for testing)

---

## 🗃️ Database Design

- Users table with:
  - Name, Location, Availability, Public/Private, LinkedIn, is_banned
- Skills table linked to users (offered/wanted types)
- Swap Requests with from_user, to_user, status (pending/accepted/rejected)
- Admin messages and user feedback support

---

## 📦 Folder Structure

The Prompt Pirates/
│
├── skill-swap-backend/
│ ├── routes/
│ ├── db.js
│ ├── server.js
│ └── database_setup.sql
│
├── skill-swap-frontend/
│ ├── src/
│ │ ├── Pages/
│ │ ├── UI-components/
│ ├── public/
│ └── package.json
