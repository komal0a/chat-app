import { useState } from 'react';
import ChatContainer from '../components/ChatContainer';
import RightSidebar from '../components/RightSidebar';
import Sidebar from '../components/Sidebar';
import assets from '../assets/assets';

const HomePage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      
      {/* Glowing background image */}
      <img
        src={assets.bgImage}
        alt="background glow"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70 blur-2xl z-0"
      />

      {/* Center container with glassmorphism */}
      <div className="relative z-10 w-[95%] max-w-6xl h-[90%] flex rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg overflow-hidden">

        {/* Sidebar */}
        <div className={`h-full ${selectedUser ? 'w-full md:w-1/4' : 'w-full md:w-1/2'}`}>
          <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        </div>

        {/* ChatContainer */}
        <div className={`h-full border-x border-[#ffffff25] ${selectedUser ? 'w-full md:w-2/4' : 'w-full md:w-1/2'}`}>
          <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        </div>

        {/* RightSidebar - only when chat is selected */}
        {selectedUser && (
          <div className='hidden md:block w-1/4 h-full'>
            <RightSidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
          </div>
        )}

      </div>
    </div>
  );
};

export default HomePage;
