import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Phone, Mail, User, Flag, CreditCard, IdCard } from 'lucide-react';
import { countries } from '../data/countryData';
import { 
  validateRequired,
  validateEmail,
  validatePassword, 
  validatePhoneNumber,
  validatePAN,
  validateAadhar 
} from '../utils/validation';

interface FormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  country: string;
  city: string;
  panNumber: string;
  aadharNumber: string;
}

interface FormErrors {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  country: string;
  city: string;
  panNumber: string;
  aadharNumber: string;
}

const RegistrationForm = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    country: '',
    city: '',
    panNumber: '',
    aadharNumber: '',
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    country: '',
    city: '',
    panNumber: '',
    aadharNumber: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [availableCities, setAvailableCities] = useState<string[]>([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (formData.country) {
      const selectedCountry = countries.find(c => c.name === formData.country);
      setAvailableCities(selectedCountry?.cities || []);
      if (formData.city && !selectedCountry?.cities.includes(formData.city)) {
        setFormData(prev => ({ ...prev, city: '' }));
      }
    } else {
      setAvailableCities([]);
    }
  }, [formData.country]);

  useEffect(() => {
    const validate = () => {
      const newErrors: FormErrors = {
        firstName: validateRequired(formData.firstName),
        lastName: validateRequired(formData.lastName),
        username: validateRequired(formData.username),
        email: validateEmail(formData.email),
        password: validatePassword(formData.password),
        phoneNumber: validatePhoneNumber(formData.phoneNumber),
        country: validateRequired(formData.country),
        city: validateRequired(formData.city),
        panNumber: validatePAN(formData.panNumber),
        aadharNumber: validateAadhar(formData.aadharNumber),
      };

      setErrors(newErrors);
      
      const isValid = Object.values(newErrors).every(error => error === '');
      setIsFormValid(isValid);
    };

    validate();
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setTouched({ ...touched, [name]: true });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const allTouched: Record<string, boolean> = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    if (isFormValid) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate('/success', { state: { formData } });
      }, 800);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-white">
      <div className="w-full max-w-6xl rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 bg-custom-light flex items-center justify-center">
            <div className="w-full h-full min-h-[300px] md:min-h-[600px] flex items-center justify-center border-r border-gray-100">
              <img
                src="/gif.gif"
                alt="Placeholder"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 p-6 md:p-8 bg-white">
            <h2 className="mb-6 text-center text-2xl font-semibold text-custom-red">Personal Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-custom-red/70" />
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className={`w-full rounded-lg border p-3 pl-10 focus:outline-none focus:ring-2 transition-all ${
                        touched.firstName && errors.firstName
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:ring-custom-red/20"
                      }`}
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.firstName && errors.firstName && (
                    <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                  )}
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-custom-red/70" />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className={`w-full rounded-lg border p-3 pl-10 focus:outline-none focus:ring-2 transition-all ${
                        touched.lastName && errors.lastName
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:ring-custom-red/20"
                      }`}
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.lastName && errors.lastName && (
                    <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-custom-red/70" />
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      className={`w-full rounded-lg border p-3 pl-10 focus:outline-none focus:ring-2 transition-all ${
                        touched.username && errors.username
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:ring-custom-red/20"
                      }`}
                      value={formData.username}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.username && errors.username && (
                    <p className="mt-1 text-sm text-red-500">{errors.username}</p>
                  )}
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-custom-red/70" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={`w-full rounded-lg border p-3 pl-10 focus:outline-none focus:ring-2 transition-all ${
                        touched.email && errors.email
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:ring-custom-red/20"
                      }`}
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.email && errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className={`w-full rounded-lg border p-3 pr-10 focus:outline-none focus:ring-2 transition-all ${
                      touched.password && errors.password
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-200 focus:ring-custom-red/20"
                    }`}
                    value={formData.password}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-custom-red/70 hover:text-custom-red transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {touched.password && errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>
              <div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-custom-red/70" />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className={`w-full rounded-lg border p-3 pl-10 focus:outline-none focus:ring-2 transition-all ${
                      touched.phoneNumber && errors.phoneNumber
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-200 focus:ring-custom-red/20"
                    }`}
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                </div>
                {touched.phoneNumber && errors.phoneNumber && (
                  <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
                )}
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <div className="relative">
                    <Flag className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-custom-red/70" />
                    <select
                      name="country"
                      className={`w-full rounded-lg border p-3 pl-10 focus:outline-none focus:ring-2 transition-all ${
                        touched.country && errors.country
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:ring-custom-red/20"
                      }`}
                      value={formData.country}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                    >
                      <option value="">Select Country</option>
                      {countries.map((country) => (
                        <option key={country.code} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {touched.country && errors.country && (
                    <p className="mt-1 text-sm text-red-500">{errors.country}</p>
                  )}
                </div>
                <div className="flex-1">
                  <select
                    name="city"
                    className={`w-full rounded-lg border p-3 focus:outline-none focus:ring-2 transition-all ${
                      touched.city && errors.city
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-200 focus:ring-custom-red/20"
                    }`}
                    value={formData.city}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    disabled={!formData.country}
                  >
                    <option value="">Select City</option>
                    {availableCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  {touched.city && errors.city && (
                    <p className="mt-1 text-sm text-red-500">{errors.city}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-custom-red/70" />
                    <input
                      type="text"
                      name="panNumber"
                      placeholder="PAN Number"
                      className={`w-full rounded-lg border p-3 pl-10 focus:outline-none focus:ring-2 transition-all ${
                        touched.panNumber && errors.panNumber
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:ring-custom-red/20"
                      }`}
                      value={formData.panNumber}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.panNumber && errors.panNumber && (
                    <p className="mt-1 text-sm text-red-500">{errors.panNumber}</p>
                  )}
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <IdCard className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-custom-red/70" />
                    <input
                      type="text"
                      name="aadharNumber"
                      placeholder="Aadhar Number"
                      className={`w-full rounded-lg border p-3 pl-10 focus:outline-none focus:ring-2 transition-all ${
                        touched.aadharNumber && errors.aadharNumber
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:ring-custom-red/20"
                      }`}
                      value={formData.aadharNumber}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.aadharNumber && errors.aadharNumber && (
                    <p className="mt-1 text-sm text-red-500">{errors.aadharNumber}</p>
                  )}
                </div>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={!isFormValid || isLoading}
                  className={`w-full rounded-lg p-3 font-medium text-white transition-all ${
                    isFormValid && !isLoading
                      ? "bg-custom-red hover:bg-custom-dark"
                      : "cursor-not-allowed bg-gray-400"
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Register"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
