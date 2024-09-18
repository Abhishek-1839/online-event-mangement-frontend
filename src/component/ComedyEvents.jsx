import React, { useState, useEffect } from "react";
import api from "../data/api";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
const ComedyEvents = ({ events }) => {
  const [comedyevents, setComedyevents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchComedyEvents = async () => {
      try {
        const response = await api.get('/api/events/events');
        // Filter for Comedy category
        const ComedyEvents = response.data.filter(event => event.category === "Comedy");
        setComedyevents(ComedyEvents);
      } catch (error) {
        console.error("Error fetching Comedy events:", error);
      }
    };

    fetchComedyEvents();
  }, []);


  const handleBuyNow = (eventId) => {
    // Navigate to the ticket purchase page with the event ID
    navigate(`/buy-ticket/${eventId}`);
  };

  return (
    <section className="my-8 relative px-4 transition-all duration-300 ease-in-out">
      <div className="mb-6 flex items-center">
        <span className='text-red-600'>
          <TheaterComedyIcon style={{ fontSize: 50 }} />
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold text-red-600 ml-2">Comedy Events</h2>
      </div>

      <div className="relative">
        {comedyevents.length > 0 ? (
          <Carousel
            items={comedyevents}
            renderItem={(event) => (
              <div className="bg-white shadow-lg rounded-lg p-4 mb-4 border h-full transition-all duration-300 ease-in-out transform hover:scale-105">
                <div className="image-container h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-200 rounded mb-4 overflow-hidden">
                  {event.images && event.images.length > 0 ? (
                    <img
                      src={`https://online-event-management-backend.onrender.com/uploads/${event.images[0]}`}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                      No Image Available
                    </div>
                  )}
                </div>

                <div className="h-1/3 flex flex-col justify-between">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 truncate mb-2">{event.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <CalendarMonthIcon className="text-red-600 text-sm sm:text-base" />
                      <p className="ml-2 text-xs sm:text-sm">{new Date(event.date).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <HistoryToggleOffIcon className="text-red-600 text-sm sm:text-base" />
                      <p className="ml-2 text-xs sm:text-sm">{event.time}</p>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <LocationOnIcon className="text-red-600 text-sm sm:text-base" />
                      <p className="ml-2 text-xs sm:text-sm truncate">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-bold text-gray-600 text-sm sm:text-base">₹{event.ticketPricing} ONWARDS</span>
                    <button
                      className="bg-red-600 text-white px-3 py-1 rounded text-xs sm:text-sm shadow transition-colors duration-300 hover:bg-red-700"
                      onClick={() => handleBuyNow(event._id)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            )}
          />
        ) : (
          <p>Loading...</p>
        )}
        
      </div>
      
      
    </section>
  );
};

export default ComedyEvents;
