import React, { useState, useEffect } from 'react';
import ImportantNotice from './components/ImportantNotice';
import VideoImageSection from './components/VideoImageSection';
import RegularAnnouncement from './components/RegularAnnouncement';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Important Notice Section - Red Banner */}
      <div className="bg-red-600 text-white py-4">
        <ImportantNotice />
      </div>
      
      {/* Main Content Area */}
      <div className="flex h-screen">
        {/* Video/Image Section - Left Column (2/3 width) */}
        <div className="w-2/3 bg-cyan-200 flex items-center justify-center">
          <VideoImageSection />
        </div>
        
        {/* Regular Announcement Section - Right Column (1/3 width) */}
        <div className="w-1/3 bg-green-600 text-white flex items-center justify-center">
          <RegularAnnouncement />
        </div>
      </div>
      
      {/* Advertisement Section - Black Banner */}
      <div className="bg-black text-white py-4">
        <Advertisement />
      </div>
    </div>
  );
}

export default App; 