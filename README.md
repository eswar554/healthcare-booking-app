# Healthcare Appointment Booking Interface

A modern, responsive web application for booking healthcare appointments built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

[View Live Application](https://frolicking-liger-e5b776.netlify.app)

## 📋 Features

- **Doctor Listings**: Browse available doctors with search and filtering
- **Doctor Profiles**: Detailed doctor information with availability schedules
- **Appointment Booking**: Easy-to-use booking form with real-time validation
- **Appointment Management**: View and manage your booked appointments
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Professional UI**: Clean, medical-inspired design with smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── SearchBar.tsx   # Search functionality
│   ├── DoctorCard.tsx  # Doctor listing card
│   ├── DoctorProfile.tsx # Doctor detail view
│   └── BookingForm.tsx # Appointment booking form
├── pages/              # Page components
│   ├── HomePage.tsx    # Doctor listings page
│   ├── DoctorDetailPage.tsx # Individual doctor page
│   └── AppointmentsPage.tsx # User appointments page
├── context/            # React Context for state management
│   └── AppContext.tsx  # Global app state
├── data/               # Mock data
│   └── doctors.ts      # Doctor information
├── types/              # TypeScript type definitions
│   └── index.ts        # App-wide types
├── utils/              # Utility functions
│   └── validation.ts   # Form validation helpers
└── App.tsx             # Main app component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/healthcare-booking-app.git
cd healthcare-booking-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📱 Usage

### For Patients

1. **Browse Doctors**: View the list of available doctors on the homepage
2. **Search**: Use the search bar to find doctors by name or specialization
3. **View Profile**: Click on a doctor card to see detailed information
4. **Book Appointment**: Click "Book Appointment" and fill out the form
5. **Manage Appointments**: View your booked appointments in the "My Appointments" section

### Key Features

- **Real-time Search**: Instantly filter doctors as you type
- **Availability Status**: See which doctors are currently available
- **Form Validation**: Comprehensive validation for booking forms
- **Responsive Design**: Works seamlessly on all device sizes
- **Professional UI**: Clean, medical-inspired interface

## 🎨 Design System

- **Colors**: Medical blue (#3B82F6), success green (#10B981), professional grays
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: 8px grid system for consistent alignment
- **Components**: Reusable, accessible UI components
- **Animations**: Subtle hover effects and transitions

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Build and Deployment

The application is configured for easy deployment to Netlify:

1. Build the project:
```bash
npm run build
```

2. The `dist/` folder contains the production-ready files

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Images from [Pexels](https://www.pexels.com/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ for better healthcare accessibility
