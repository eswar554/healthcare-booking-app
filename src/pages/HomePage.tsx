import React, { useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import SearchBar from '../components/SearchBar';
import DoctorCard from '../components/DoctorCard';
import { Users, Filter } from 'lucide-react';

const HomePage: React.FC = () => {
  const { doctors, searchTerm } = useAppContext();

  const filteredDoctors = useMemo(() => {
    if (!searchTerm) return doctors;
    
    return doctors.filter(doctor => 
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [doctors, searchTerm]);

  const availableDoctors = filteredDoctors.filter(doctor => doctor.isAvailable);
  const unavailableDoctors = filteredDoctors.filter(doctor => !doctor.isAvailable);

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Find Your Perfect
          <span className="text-blue-600"> Doctor</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Book appointments with top-rated healthcare professionals in your area
        </p>
      </div>

      <SearchBar />

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <Users className="w-5 h-5 text-gray-600" />
          <h2 className="text-2xl font-semibold text-gray-900">
            {searchTerm ? `Search Results (${filteredDoctors.length})` : 'Our Doctors'}
          </h2>
        </div>
        
        {searchTerm && (
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Filter className="w-4 h-4" />
            <span>Filtered by: "{searchTerm}"</span>
          </div>
        )}
      </div>

      {filteredDoctors.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No doctors found</h3>
          <p className="text-gray-600">Try adjusting your search terms</p>
        </div>
      ) : (
        <div className="space-y-8">
          {availableDoctors.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Available Now ({availableDoctors.length})</span>
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {availableDoctors.map(doctor => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
            </div>
          )}

          {unavailableDoctors.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>Currently Unavailable ({unavailableDoctors.length})</span>
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {unavailableDoctors.map(doctor => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;