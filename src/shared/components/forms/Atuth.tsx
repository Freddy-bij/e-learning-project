
import { useContext, useState } from "react"; 
import { ModelContext } from "../../../Popup";
import { Eye, EyeOff, X } from 'lucide-react';
import { loginUser, registerUser } from "../../../services/authService";
import { useNavigate } from "react-router";


const Auth = () => {
  const context = useContext(ModelContext);
  const navigation = useNavigate()


  if (!context) throw new Error("Auth must be used within ModelContext Provider");
  const { closeModel } = context;

  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleSubmit = async () => {
    try {
      if (isSignUp) {
        if (!formData.name || !formData.email || !formData.password) return alert("Please fill all fields");
        await registerUser({ name: formData.name, email: formData.email, password: formData.password });
        alert("Registration successful! Please login.");
        setIsSignUp(false);
      } else {
        const result = await loginUser({ email: formData.email, password: formData.password });

        if (result && result.token) {
          // 1. Store the token
          localStorage.setItem("token", result.token);
          
          // 2. Extract Name: Checks multiple paths in case backend structure varies
          const nameToStore = 
            result.user?.name || 
            result.name || 
            result.data?.name || 
            formData.email.split('@')[0]; // Final fallback: use the first part of email

          localStorage.setItem("userName", nameToStore);
          
          // 3. Trigger the update event for the Navbar
          window.dispatchEvent(new Event('userLogin'));
          
          closeModel();       
          navigation("/")
             
        }
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      alert(message || "Authentication failed");
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="bg-black/70 fixed top-0 left-0 h-full w-full text-white flex items-center justify-center z-[100] backdrop-blur-sm">
      <div className="flex shadow-2xl rounded-xl overflow-hidden max-w-4xl bg-white mx-4 animate-in fade-in zoom-in duration-300">
        
        {/* Left Info Panel */}
        <div className="bg-blue-600 px-8 py-10 w-72 hidden sm:flex flex-col justify-center">
          <h1 className="text-4xl font-bold pb-4 text-white italic">
            {isSignUp ? 'Join Us' : 'Welcome Back'}
          </h1>
          <p className="text-blue-100 text-sm leading-relaxed">
            Manage your orders, track shipments, and save your favorite items.
          </p>
        </div>

        {/* Form Panel */}
        <div className="bg-white text-black w-full sm:w-[400px] relative p-8">
          <button onClick={closeModel} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors">
            <X size={24} />
          </button>

          <div className="space-y-5 mt-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {isSignUp ? 'Create Account' : 'Login'}
            </h2>

            {isSignUp && (
              <input type="text" placeholder="Full Name" value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            )}
            
            <input type="email" placeholder="Email Address" value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            
            <div className="relative border border-gray-200 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 transition-all">
              <input type={showPassword ? "text" : "password"} placeholder="Password"
                value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full p-3 outline-none rounded-lg pr-12" />
              <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {isSignUp && (
              <input type="password" placeholder="Confirm Password" value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            )}

               <div className="flex itmex-center justify-between text-xs font-medium text-blue-600 ">
                <div className="flex gap-0.5">
                  <input type="checkbox" />
                  <p>Remember me </p>
                </div>
                
                <span>Lost your password</span>
               </div>

            <button onClick={handleSubmit} className="bg-blue-600 w-full text-white py-3.5 font-bold rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-200 active:scale-[0.98] transition-all">
              {isSignUp ? 'REGISTER NOW' : 'SIGN IN'}
            </button>

            <div className="text-center text-sm text-gray-500 pt-2">
              <p>
                {isSignUp ? "Already a member? " : "Don't have an account? "}
                <button onClick={toggleMode} className="text-blue-600 font-bold hover:underline">
                  {isSignUp ? 'Login' : 'Sign Up'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;