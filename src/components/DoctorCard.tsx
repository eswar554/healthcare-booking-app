import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <Link to={`/doctor/${doctor.id}`} className="block group">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300 group-hover:scale-[1.02]">
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <img
                src={doctor.profileImage}
                alt={doctor.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">{doctor.specialization}</p>
                </div>
                
                <div className="flex items-center space-x-1">
                  {doctor.isAvailable ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                  <span className={`text-sm font-medium ${
                    doctor.isAvailable ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {doctor.isAvailable ? 'Available' : 'Unavailable'}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{doctor.rating}</span>
                </div>
                
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{doctor.experience} years exp.</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{doctor.location}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors group-hover:bg-blue-700">
            View Profile & Book
          </button>
        </div>
      </div>
    </Link>
  );
};

export default DoctorCard;