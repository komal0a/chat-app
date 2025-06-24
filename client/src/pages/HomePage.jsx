import { useState } from 'react';
import ChatContainer from '../components/ChatContainer';
import RightSidebar from '../components/RightSidebar';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className='w-full h-screen overflow-hidden bg-gradient-to-br from-[#0D0C1D] to-[#1C1B2D]'>
      <div className='flex w-full h-full text-white'>
        {/* Sidebar */}
        <div className='w-full md:w-1/4 h-full'>
          <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        </div>

        {/* ChatContainer */}
        <div className='w-full md:w-2/4 h-full border-x border-[#ffffff25]'>
          <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        </div>

        {/* RightSidebar */}
        <div className='hidden md:block w-1/4 h-full'>
          <RightSidebar selectedUser={selectedUser} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;