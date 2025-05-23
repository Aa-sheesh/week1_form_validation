import React from 'react';
import { useLocation, Navigate, Link } from 'react-router-dom';

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

const SuccessPage = () => {
  const location = useLocation();
  const { formData } = location.state as { formData: FormData } || {};
  
  if (!formData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-6xl rounded-lg shadow-lg shadow-lg border-2 border-black/10 overflow-hidden">
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
            <div className="mb-8 border-b border-gray-200 pb-4">
              <h2 className="text-center text-3xl font-semibold text-custom-red">Registration Successful!</h2>
            </div>
            
            <div className="mb-6">
              <p className="mb-4 text-lg text-gray-700">The details submitted to us are:</p>
              
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex-1">
                  <h3 className="mb-3 text-xl font-semibold text-custom-red">Personal Details:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="font-medium w-28">First Name:</span> 
                      <span>{formData.firstName}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium w-28">Last Name:</span> 
                      <span>{formData.lastName}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium w-28">Username:</span> 
                      <span>{formData.username}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium w-28">Country:</span> 
                      <span>{formData.country}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium w-28">City:</span> 
                      <span>{formData.city}</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex-1">
                  <h3 className="mb-3 text-xl font-semibold text-custom-red">Communication Details:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="font-medium w-28">Email:</span> 
                      <span>{formData.email}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium w-28">Phone No.:</span> 
                      <span>{formData.phoneNumber}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium w-28">PAN No.:</span> 
                      <span>{formData.panNumber}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium w-28">Aadhar No.:</span> 
                      <span>{formData.aadharNumber}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link
                to="/"
                className="inline-block rounded-lg bg-custom-red px-6 py-3 font-medium text-white transition-colors hover:bg-custom-dark"
              >
                Back to Registration
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
