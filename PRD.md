PRODUCT REQUIREMENTS DOCUMENT
Product: QR-Based Café Menu Website

OVERVIEW

The product is a mobile-first web application that allows café customers to view the menu by scanning a permanent QR code placed on tables or counters.

When scanned, the QR opens a lightweight website that dynamically displays menu items including category, name, price, image, and description.

The system is designed for non-technical café owners. They can manage the menu using Google Sheets and upload images via Cloudinary. Changes should reflect instantly on the website without redeployment.

OBJECTIVES

Primary Goals:

Provide contactless digital menu
Enable real-time updates without developer involvement
Ensure zero or minimal cost infrastructure
Deliver fast and smooth mobile experience

Secondary Goals:

Make system scalable for future features
Ensure ease of use for non-technical admin
Maintain clean and modern UI
USERS

Customer (End User):

Scans QR code
Views menu
Browses items by category

Admin (Café Owner):

Adds and edits menu items via Google Sheets
Updates price, description, and availability
Uploads images to Cloudinary and pastes URL

Developer:

Builds frontend
Integrates APIs
Handles deployment
Maintains performance
USER FLOWS

Customer Flow:
Scan QR → Open Website → Fetch Menu Data → Render UI → Browse Items

Admin Flow:
Upload Image to Cloudinary → Copy URL → Paste into Google Sheets → Save → Website auto updates

SYSTEM ARCHITECTURE

QR Code (static and permanent)
→ Frontend Website (hosted on Vercel)
→ Fetch API call
→ Google Sheets (menu data)
→ Cloudinary (image storage)
→ Render dynamic UI

FUNCTIONAL REQUIREMENTS

6.1 Menu Display

Display categories dynamically
Show items under each category
Each item must include name, price, image, description (optional)

6.2 Data Fetching

Fetch data from Google Sheets API
Data must update on every page load
No redeployment required

6.3 Availability Control

Items marked Available = FALSE should not be displayed

6.4 Image Handling

Images must be loaded via Cloudinary URLs
Use lazy loading
Use fallback image if URL fails

6.5 Category Handling

Categories should be auto-generated from data
New categories should work without code change

6.6 Mobile Optimization

Fully responsive design
User will use mostly one mobile devices i want pixel perfect design for mobile
Mobile-first layout
Smooth scrolling

6.7 QR Code

Static QR linked to website URL
Must be permanent and non-expiring
Printable
ADMIN PANEL (GOOGLE SHEETS + CLOUDINARY)

Sheet Structure:
Category | Name | Price | Image | Description | Available

Admin Capabilities:

Add new item (new row)
Edit item details
Update price
Change image URL
Toggle availability (TRUE/FALSE)
Add new categories

Admin Limitations:

No access to code
No deployment access
No backend access
IMAGE MANAGEMENT FLOW

Admin uploads image to Cloudinary
→ Cloudinary generates URL
→ Admin copies URL
→ Admin pastes URL into Google Sheets
→ Website fetches data
→ Image renders automatically

DEVELOPER RESPONSIBILITIES
Build frontend UI (nextjs)
Integrate Google Sheets API
Parse and structure data
Map images correctly
Handle errors (missing image, empty data)
Deploy on Vercel
Generate QR code
Optimize performance
NON-FUNCTIONAL REQUIREMENTS

Performance:

Page load time under 2 seconds
Images optimized (<200KB preferred)

Reliability:

Website uptime ≥ 99%
Graceful API failure handling

Usability:

Simple navigation
Clear readable UI
Touch-friendly components

Scalability:

Must support adding unlimited items
Must support new categories without code changes
DATA INTEGRATION

Google Sheets is used as CMS

API format:
https://opensheet.elk.sh/{sheetId}/Sheet1

Frontend should fetch using standard fetch API

UI/UX REQUIREMENTS
Clean card-based layout
Category sections
Large product images
Bold price display
Minimal clutter
Fast interaction
DEPLOYMENT
Host website on Vercel
Use free hosting tier
Ensure HTTPS enabled
Use global CDN
CONSTRAINTS
No paid services required
No backend server initially
Admin must be able to use system without training
FUTURE ENHANCEMENTS
Search functionality
Category filters
Add to cart system
Online ordering
Multi-café support
Migration to backend (Firebase or similar)
SUCCESS METRICS
QR scan opens website instantly
Menu loads without errors
Admin updates reflect instantly
No developer dependency for updates
Smooth and fast user experience

FINAL 

This system is a lightweight, scalable QR-based menu platform:

QR Code → Entry point
Website → UI layer
Google Sheets → Admin panel
Cloudinary → Image storage

It provides zero-cost infrastructure, real-time updates, and a simple experience for both customers and café owners.
