import React from 'react';
import { Calendar, Clock, User, MapPin, CheckCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { formatDate, formatTime } from '../utils/validation';

const AppointmentsPage: React.FC = () => {
  const { appointments, doctors } = useAppContext();

  const getDoctor = (doctorId: string) => {
    return doctors.find(d => d.id === doctorId);
  };

  if (appointments.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Calendar className="w-12 h-12 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">No Appointments Yet</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          You haven't booked any appointments yet. Browse our doctors and schedule your first appointment.
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Browse Doctors
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Appointments</h1>
        <p className="text-xl text-gray-600">Manage your upcoming healthcare appointments</p>
      </div>

      <div className="space-y-6">
        {appointments.map(appointment => {
          const doctor = getDoctor(appointment.doctorId);
          if (!doctor) return null;

          return (
            <div 
              key={appointment.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Confirmed
                    </span>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <p>Booked on {new Date(appointment.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={doctor.profileImage}
                        alt={doctor.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                        <p className="text-blue-600 font-medium">{doctor.specialization}</p>
                        <div className="flex items-center space-x-1 text-sm text-gray-600 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>{doctor.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Patient</p>
                        <p className="font-medium text-gray-900">{appointment.patientName}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-medium text-gray-900">{formatDate(appointment.date)}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Time</p>
                        <p className="font-medium text-gray-900">{formatTime(appointment.time)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600">
                    Confirmation sent to: {appointment.patientEmail}
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppointmentsPage;