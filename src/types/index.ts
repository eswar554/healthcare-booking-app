export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  profileImage: string;
  rating: number;
  experience: number;
  location: string;
  about: string;
  availability: {
    [key: string]: string[];
  };
  isAvailable: boolean;
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  patientEmail: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

export interface AppContextType {
  doctors: Doctor[];
  appointments: Appointment[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  bookAppointment: (appointment: Omit<Appointment, 'id' | 'status' | 'createdAt'>) => void;
}