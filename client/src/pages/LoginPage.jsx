import { useState } from 'react';
import assets from '../assets/assets';

const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (currState === "Sign Up") {
      if (!isDataSubmitted) {
        setIsDataSubmitted(true);
        return;
      }
      console.log("Creating Account:", { fullName, email, password, bio });
    } else {
      console.log("Logging In:", { email, password });
    }
  };

  return (
 <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">

  {/* Background Image */}
  <img
    src={assets.bgImage}
    alt="background"
    className="absolute inset-0 w-full h-full object-cover brightness-[0.6] blur-[1.5px] scale-105 z-0"
  />

  {/* Glassy Overlay */}
  <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] z-0" />

  {/* Main Content */}
  <div className="relative z-10 flex items-center justify-center w-full px-6 py-12 sm:px-12">
        
        {/* Left logo */}
        <div className='hidden md:flex w-1/2 justify-center'>
          <img src={assets.logo_big} alt='Logo' className='w-[250px] translate-y-[-40px]' />
        </div>

        {/* Form */}
       <form
  onSubmit={onSubmitHandler}
  className='w-full max-w-md bg-white/20 backdrop-blur-[6px] border border-white/20 p-10 rounded-2xl shadow-xl text-white flex flex-col gap-5'
>

          <div className='flex justify-between items-center mb-2'>
            <h2 className='text-2xl font-bold'>{currState}</h2>
            {isDataSubmitted && (
              <img
                src={assets.arrow_icon}
                onClick={() => setIsDataSubmitted(false)}
                className='w-5 cursor-pointer'
                alt='Back'
              />
            )}
          </div>

          {currState === "Sign Up" && !isDataSubmitted && (
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder='Full Name'
              required
              className='p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none placeholder-white/70'
            />
          )}

          {!isDataSubmitted && (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email Address'
                required
                className='p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none placeholder-white/70'
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                required
                className='p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none placeholder-white/70'
              />
            </>
          )}

          {/* Bio input for step 2 */}
          {currState === "Sign Up" && isDataSubmitted && (
            <>
              <p className='text-sm text-gray-300'>Step 2 of 2: Add a short bio</p>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={4}
                placeholder='Tell us about yourself...'
                required
                className='p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none placeholder-white/70'
              ></textarea>
            </>
          )}

          <button
            type='submit'
            className='bg-gradient-to-r from-purple-500 to-violet-700 py-3 rounded-md font-semibold hover:opacity-90 transition'
          >
            {currState === "Sign Up"
              ? isDataSubmitted ? "Create Account" : "Next"
              : "Login Now"}
          </button>

          <div className='flex items-center gap-2 text-sm text-white/70'>
            <input type="checkbox" required />
            <label>I agree to the Terms & Privacy Policy</label>
          </div>

          <div className='text-sm text-white/70 text-center'>
            {currState === "Sign Up" ? (
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setCurrState("Login");
                    setIsDataSubmitted(false);
                  }}
                  className='text-purple-300 hover:underline cursor-pointer'
                >
                  Login here
                </span>
              </p>
            ) : (
              <p>
                Don&apos;t have an account?{" "}
                <span
                  onClick={() => {
                    setCurrState("Sign Up");
                    setIsDataSubmitted(false);
                  }}
                  className='text-purple-300 hover:underline cursor-pointer'
                >
                  Click here
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
