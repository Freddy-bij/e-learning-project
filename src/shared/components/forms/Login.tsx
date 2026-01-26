
import { useContext } from "react";
import { ModelContext } from "../../../Popup";
import { useState } from 'react';
import { Eye, EyeOff, X } from 'lucide-react';

const Login = () => {

   const context = useContext(ModelContext);

  if (!context) {
    throw new Error("Register must be used within ModelContext Provider");
  }

  const { closeModel } = context;


  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const closeModal = () => {
    console.log('Modal closed');
  };

  const handleSubmit = () => {
    if (isSignUp) {
      console.log('Sign up with:', formData);
    } else {
      console.log('Login with:', formData);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({ email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="bg-black/70 fixed top-0 left-0 h-full w-full text-white flex items-center justify-center z-50">
      <div className="flex shadow-2xl rounded-lg overflow-hidden">
        {/* Left Side - Info Panel */}
        <div className="bg-blue-600 px-8 py-10 w-64 flex flex-col justify-center">
          <h1 className="text-3xl font-bold pb-4">
            {isSignUp ? 'Register' : 'Login'}
          </h1>
          <p className="text-blue-50">Get access to your Order,</p>
          <p className="text-blue-50">Wishlist and Recommendations.</p>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white text-black w-96">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button 
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" onClick={closeModel} />
            </button>
          </div>

         
          <div className="px-8 pb-8">
         
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="outline-none border border-gray-300 w-full h-10 px-3 rounded focus:border-blue-500 transition-colors"
              />
            </div>

          
            <div className="mb-4">
              <div className="flex border border-gray-300 rounded overflow-hidden focus-within:border-blue-500 transition-colors">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="outline-none w-full h-10 px-3"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="bg-blue-600 w-12 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

           
            {isSignUp && (
              <div className="mb-4">
                <div className="flex border border-gray-300 rounded overflow-hidden focus-within:border-blue-500 transition-colors">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    className="outline-none w-full h-10 px-3"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="bg-blue-600 w-12 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            )}

          
            {!isSignUp && (
              <div className="flex justify-between items-center mb-4 text-sm">
                <label className="flex items-center text-gray-700 cursor-pointer">
                  <input type="checkbox" className="mr-2" />
                  <span>Remember me</span>
                </label>
                <button className="text-blue-600 hover:underline font-semibold">
                  Lost your password?
                </button>
              </div>
            )}

          
            <button 
              onClick={handleSubmit}
              className="bg-blue-600 w-full text-white py-3 font-bold rounded hover:bg-blue-700 transition-colors mb-4"
            >
              {isSignUp ? 'SIGN UP' : 'LOGIN'}
            </button>

         
            <div className="text-center text-sm text-gray-600">
              {isSignUp ? (
                <p>
                  Already have an account?{' '}
                  <button
                    onClick={toggleMode}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Login
                  </button>
                </p>
              ) : (
                <p>
                  Don't have an account?{' '}
                  <button
                    onClick={toggleMode}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Sign Up
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;