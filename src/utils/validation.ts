export interface ValidationErrors {
  patientName?: string;
  patientEmail?: string;
  date?: string;
  time?: string;
}

export const validateBookingForm = (
  patientName: string,
  patientEmail: string,
  date: string,
  time: string
): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Validate patient name
  if (!patientName.trim()) {
    errors.patientName = 'Patient name is required';
  } else if (patientName.trim().length < 2) {
    errors.patientName = 'Patient name must be at least 2 characters';
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!patientEmail.trim()) {
    errors.patientEmail = 'Email is required';
  } else if (!emailRegex.test(patientEmail)) {
    errors.patientEmail = 'Please enter a valid email address';
  }

  // Validate date
  if (!date) {
    errors.date = 'Please select a date';
  } else {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      errors.date = 'Please select a future date';
    }
  }

  // Validate time
  if (!time) {
    errors.time = 'Please select a time slot';
  }

  return errors;
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
};