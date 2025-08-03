import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import DoctorProfile from '../components/DoctorProfile';
import BookingForm from '../components/BookingForm';

const DoctorDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { doctors } = useAppContext();
  const [showBookingForm, setShowBookingForm] = useState(false);

  const doctor = doctors.find(d => d.id === id);

  if (!doctor) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Doctor Not Found</h2>
        <p className="text-gray-600 mb-8">The doctor you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Doctors
        </button>
      </div>
    );
  }

  const handleBookingSuccess = () => {
    setShowBookingForm(false);
    navigate('/', { 
      state: { message: 'Appointment booked successfully!' } 
    });
  };

  return (
    <div>
      <button
        onClick={() => navigate('/')}
        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:translate-x-[-2px] transition-transform" />
        <span>Back to Doctors</span>
      </button>

      <DoctorProfile 
        doctor={doctor} 
        onBookAppointment={() => setShowBookingForm(true)} 
      />

      {showBookingForm && (
        <BookingForm
          doctor={doctor}
          onSuccess={handleBookingSuccess}
          onCancel={() => setShowBookingForm(false)}
        />
      )}
    </div>
  );
};

export default DoctorDetailPage;