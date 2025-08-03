import React from 'react';
import { Star, MapPin, Clock, Award, User } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorProfileProps {
  doctor: Doctor;
  onBookAppointment: () => void;
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({ doctor, onBookAppointment }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-8">
        <div className="flex flex-col md:flex-row md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <img
              src={doctor.profileImage}
              alt={doctor.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-100"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
            <p className="text-xl text-blue-600 font-semibold mb-4">{doctor.specialization}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{doctor.rating}</span>
                <span>Rating</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">{doctor.experience}</span>
                <span>Years Experience</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>{doctor.location}</span>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                doctor.isAvailable 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {doctor.isAvailable ? 'Available for appointments' : 'Currently unavailable'}
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <User className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">About</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">{doctor.about}</p>
          </div>
          
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Award className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Availability</h2>
            </div>
            <div className="space-y-3">
              {Object.entries(doctor.availability).map(([day, times]) => (
                <div key={day} className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">{day}</span>
                  <div className="flex flex-wrap gap-1">
                    {times.map((time, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <button
            onClick={onBookAppointment}
            disabled={!doctor.isAvailable}
            className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 ${
              doctor.isAvailable
                ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg hover:shadow-xl'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {doctor.isAvailable ? 'Book Appointment' : 'Currently Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;