import PropTypes from 'prop-types';

import assets , {imagesDummyData }from '../assets/assets'

const RightSidebar = ({ selectedUser, setSelectedUser }) => {

  return selectedUser && (
    <div className={`bg-[#8185B2]/10 text-white w-full relative overflow-y-scroll ${
      selectedUser ? "max-md:hidden" : ""
    }`}>
      <div className='pt-16 flex flex-col items-center gap-2 text-xs font-light mx-auto'>
        <img 
          src={selectedUser?.profilePic || assets.avatar_icon} 
          alt="" 
          className='w-20 aspect-[1/1] rounded-full' 
        />
        <h1 className='px-10 text-xl font-medium mx-auto flex items-center gap-2'>
          <p className='w-2 h-2 rounded-full bg-green-500'></p>
          {selectedUser.fullName}
        </h1>
        <p className='px-10 mx-auto'>{selectedUser.bio}</p>
      </div>
      <hr className="border-[#ffffff50] my-4" />

<div className="px-5 text-xs">
  <p>Media</p>
  <div className='mt-2 max-h-[200px] overflow-y-scroll grid grid-cols-2 gap-4 opacity-80'>
    {imagesDummyData.map((url, index) => (
      <div 
        key={index} 
        onClick={() => window.open(url)} 
        className='cursor-pointer rounded'
      >
        <img 
          src={url} 
          alt="" 
          className='h-full rounded-md' 
        />
      </div>
    ))}
  </div>
</div>
    <div className='flex justify-center px-5 py-6'>

      <button
          onClick={() => setSelectedUser(null)}
          className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold py-2 rounded-full transition-all hover:opacity-90"
          >
          Logout
        </button>

          </div>

    </div>
  )
}


export default RightSidebar
RightSidebar.propTypes = {
  selectedUser: PropTypes.object,
  setSelectedUser: PropTypes.func, // add this
};
