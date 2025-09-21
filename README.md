# P-Ticket - Smart Bus Ticketing System

🚌 **Live Demo:** [https://newbie-saimur.github.io/smart-ticketing/](https://newbie-saimur.github.io/smart-ticketing/)

A modern, responsive bus ticket booking web application built with HTML, CSS, JavaScript, and Tailwind CSS. This project provides an intuitive interface for users to select bus seats, apply discount coupons, and complete their ticket purchases seamlessly.

## 📸 Preview

![P-Ticket Landing Page](Landing%20Page%20Design.jpg)

## ✨ Features

### 🎫 Seat Selection
- Interactive seat map with visual feedback
- Maximum 4 seats per booking
- Real-time availability updates
- Color-coded seat status (available/selected)

### 💰 Pricing & Discounts
- Dynamic price calculation
- Coupon system with multiple discount codes:
  - `NEW15` - 15% discount for new users
  - `Couple20` - 20% discount for couples (minimum 2 seats)
- Real-time total price updates

### 📱 Responsive Design
- Mobile-first approach
- Seamless experience across all devices
- Modern UI with smooth animations

### ✅ Form Validation
- Real-time form validation
- Phone number format verification
- Email validation
- Required field checks

### 🎉 User Experience
- Success confirmation popup
- Smooth transitions and hover effects
- Intuitive navigation
- Clean and modern interface

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Custom styling and animations
- **JavaScript (ES6+)** - Interactive functionality
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Internet connection (for CDN resources)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/newbie-saimur/smart-ticketing.git
   ```

2. **Navigate to project directory**
   ```bash
   cd smart-ticketing
   ```

3. **Open in browser**
   ```bash
   # Open index.html in your preferred browser
   # Or use Live Server extension in VS Code
   ```

### Project Structure

```
smart-ticketing/
├── index.html              # Main HTML file
├── tailwind.config.js      # Tailwind CSS configuration
├── README.md              # Project documentation
├── images/                # Image assets
│   ├── banner.png
│   ├── bus-icon.png
│   ├── seat-green.png
│   └── ...
├── scripts/
│   └── script.js          # JavaScript functionality
└── styles/
    └── style.css          # Custom CSS styles
```

## 💻 Usage

### Booking Process

1. **Select Seats**: Click on available seats (green) to select them
2. **Apply Coupon**: Enter a valid coupon code for discounts
3. **Fill Details**: Provide passenger information
4. **Confirm Booking**: Review and confirm your purchase

### Available Coupons

| Code | Discount | Conditions |
|------|----------|------------|
| `NEW15` | 15% | For new users |
| `Couple20` | 20% | Minimum 2 seats required |

## 🎨 Design Features

- **Color Scheme**: Green primary color (#1DD100) with clean gray accents
- **Typography**: Raleway font family for modern readability
- **Icons**: Custom bus and seat icons
- **Layout**: Card-based design with proper spacing

## 🔧 Customization

### Modifying Seat Layout
Edit the seat grid in `index.html` to change the bus layout:

```html
<!-- Example seat row -->
<div class="grid grid-cols-5 gap-3">
    <button class="seat-toggle-btn seat-btn">A1</button>
    <button class="seat-toggle-btn seat-btn">A2</button>
    <!-- Add more seats -->
</div>
```

### Adding New Coupons
Update the coupon logic in `scripts/script.js`:

```javascript
if (couponCode == 'NEW15' || couponCode == 'Couple20' || couponCode == 'YOURCOUPON') {
    // Add your coupon logic here
}
```

### Styling Changes
Modify `styles/style.css` or update Tailwind classes for visual customizations.

## 📱 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Saimur Rahman**
- GitHub: [@newbie-saimur](https://github.com/newbie-saimur)
- Website: [Live Demo](https://newbie-saimur.github.io/smart-ticketing/)

## 🙏 Acknowledgments

- Design inspiration from modern bus booking platforms
- Icons and images used for educational purposes
- Tailwind CSS and DaisyUI for the component framework

---

⭐ Star this repository if you found it helpful!