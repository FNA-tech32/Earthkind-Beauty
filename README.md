# Earthkind Beauty

Earthkind Beauty is a client-side salon website and booking studio. Guests can browse services, meet the team, and book an appointment. Staff and administrators manage the same bookings from their own panels. Everything runs in the browser with React and Vite. There is no backend.

---

## Studio

| | |
| --- | --- |
| **Brand** | Earthkind Beauty |
| **Address** | Studio 4, Kohsar Market, F-6/3, Islamabad 44000, Pakistan |
| **Phone** | +92 51 282 6490 |
| **WhatsApp** | +92 333 582 7410 |
| **Email** | hello@earthkindbeauty.com |
| **Hours** | Monday–Saturday 11:00 AM – 8:00 PM, Sunday 12:00 PM – 6:00 PM |

---

## Table of Contents

- [Overview](#overview)
- [Demo accounts](#demo-accounts)
- [Tech stack](#tech-stack)
- [Features](#features)
- [Architecture](#architecture)
- [Directory structure](#directory-structure)
- [Getting started](#getting-started)
- [Roles](#roles)
- [Data storage](#data-storage)
- [Configuration](#configuration)

---

## Overview

The site covers three kinds of users:

- **Clients** browse services, artisan profiles, and the gallery, then book, reschedule, or cancel appointments from their account.
- **Staff** see the appointments assigned to them, track earnings from their commission rate, and edit their profile.
- **Administrators** review revenue and appointments, manage the staff roster, and update their own account.

Appointments, accounts, and the staff roster are stored in `localStorage`, so the app can be deployed as a static site.

---

## Demo accounts

| Role | Email | Password |
| --- | --- | --- |
| Admin | `admin@admin.com` | `admin` |
| Staff | `john@earthkindbeauty.com` | `staff123` |
| Client | Register at `/register` | — |

Other seeded staff logins use the same password: `jane@earthkindbeauty.com`, `mike@earthkindbeauty.com`, and `osman@earthkindbeauty.com`.

Seed data is written into the browser the first time the app loads. If an older session is still stored, clear site data for this origin so the new studio details and staff emails appear.

---

## Tech stack

| Category | Technology |
| --- | --- |
| Build | Vite 7 |
| UI | React 18 |
| Routing | React Router DOM 7 |
| Styling | Tailwind CSS 4 |
| Animation | GSAP 3, Framer Motion |
| Smooth scroll | `@studio-freight/react-lenis` |
| 3D | Three.js |
| Icons | Lucide React, Font Awesome |

---

## Features

### Public site

- Home page with a Three.js particle field, scroll animations, and a magnetic call-to-action.
- Service cards and grouped price lists for hair, skin, and styling.
- Artisan profile pages at `/artisan/:id`.
- Filterable gallery and a looping brand strip.
- Contact page with phone, email, WhatsApp, studio hours, a map, and a booking form.

### Booking

A client can select one or more services. The app assigns an available stylist for each service from the weekly schedule and existing bookings. The appointment is saved as one record with an `items` list of `{ service, stylist }` pairs.

### Admin (`/admin`)

- Dashboard with revenue, appointment count, active staff, and recent bookings.
- Searchable, sortable appointment list with status updates.
- Staff create, edit, and remove, including specialties, schedule, and commission.
- Account configuration and password change.

### Staff (`/staff`)

- Personal dashboard with assigned appointments and commission-based earnings.
- Appointment list with a menu that flips when it would leave the viewport.
- Editable profile and password.

### Client account (`/account`)

Tabs are driven by the URL (`?tab=profile`, `?tab=booking`, `?tab=feedback`): profile, bookings with reschedule and cancel, and feedback.

---

## Architecture

State lives in four React contexts:

```
AuthContext         login, registration, logout, and roles
AppointmentContext  booking, staff assignment, and filtered views
StaffContext        roster, schedules, and availability
MessageContext      toast notifications
```

Routes:

```
/                       Home
/contact                Contact and booking
/login                  Login
/register               Registration
/artisan/:id            Artisan profile
/account                Client account
/admin/dashboard        Admin overview
/admin/appointments     Appointment management
/admin/staffs           Staff management
/admin/configuration    Admin profile
/staff/dashboard        Staff overview
/staff/appointments     Staff appointments
/staff/profile          Staff profile
```

Pages are lazy-loaded. Public pages use `Layout` (header, smooth scroll, footer). Admin and staff pages use their own layouts and sidebars. `ProtectedRoute` sends unsigned or wrong-role visitors to `/login`.

---

## Directory structure

```
Earthkind-Beauty/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── index.css
    ├── Layout.jsx
    ├── AdminLayout.jsx
    ├── StaffLayout.jsx
    ├── assets/
    ├── Components/
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── HeroCanvas.jsx
    │   ├── AppointmentForm.jsx
    │   ├── AppointmentFormContact.jsx
    │   ├── AdminPanel Components/
    │   ├── StaffPanel Components/
    │   └── UserPanel Components/
    ├── Context/
    ├── data/
    ├── hooks/
    └── Pages/
        ├── Home.jsx
        ├── Contact.jsx
        ├── ArtisanProfile.jsx
        ├── Admin/
        ├── Staff/
        └── User Panel/
```

---

## Getting started

Node.js 18 or newer is required.

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

```bash
npm run build
npm run preview
npm run lint
```

The production build is written to `dist/`.

If React reports a missing `useRef` after install, delete `node_modules` and install again. `vite.config.js` already aliases React so the app resolves a single copy.

---

## Roles

| Role | Routes |
| --- | --- |
| `client` | `/account` |
| `staff` | `/staff/dashboard`, `/staff/appointments`, `/staff/profile` |
| `admin` | `/admin/dashboard`, `/admin/appointments`, `/admin/staffs`, `/admin/configuration` |

Staff accounts are created by an administrator. A new staff record is also added to the login list, so that person can sign in immediately.

---

## Data storage

| Key | Contents |
| --- | --- |
| `allUsers` | Client and admin accounts |
| `EarthkindStaff` | Staff roster, also used for staff login |
| `Appointments` | Appointment records |
| `currentUser` | Active session (`sessionStorage` is checked as well) |

Clearing `localStorage` restores the default admin and the four seeded stylists.

---

## Configuration

No environment variables are required.

| File | What to edit |
| --- | --- |
| `src/Pages/Contact.jsx` | Phone, email, WhatsApp, address, hours, and map |
| `index.html` | Page title and local business schema |
| `src/data/services.js` | Services and prices |
| `src/Context/StaffContext.jsx` | Seeded stylists |
| `src/Context/AuthContext.jsx` | Default admin account |

Changes to seed data show up after browser storage for this site is cleared.
