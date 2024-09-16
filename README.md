import React, { useState } from 'react';
import axios from 'axios';

const EventSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm) return; // Do nothing if the search term is empty

    setLoading(true); // Start loading while fetching

    try {
      // Fetch data from backend using search term
      const response = await axios.get(`/api/events/search`, {
        params: {
          searchTerm: searchTerm
        }
      });
      
      // Set the fetched events to state
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search for events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Loading indicator */}
      {loading && <p>Loading...</p>}

      {/* Display search results */}
      <div>
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event._id}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>{event.location}</p>
            </div>
          ))
        ) : (
          <p>No events found</p>
        )}
      </div>
    </div>
  );
};

export default EventSearch;



. Optional: Debounce Search
If you want to trigger the search automatically while the user is typing (instead of clicking the search button), you can implement a debounce function to delay the API call until the user has stopped typing:

js
Copy code
useEffect(() => {
  const delayDebounceFn = setTimeout(() => {
    handleSearch();
  }, 1000); // Delay by 1 second

  return () => clearTimeout(delayDebounceFn); // Cleanup the timeout on component unmount
}, [searchTerm]);







filter component
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventFilter = ({ onFilter }) => {
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [priceRanges, setPriceRanges] = useState([]);

  const [selectedFilters, setSelectedFilters] = useState({
    category: '',
    location: '',
    price: ''
  });

  useEffect(() => {
    // Fetch filter options from backend
    const fetchFilters = async () => {
      try {
        const response = await axios.get('/api/filters');
        setCategories(response.data.categories);
        setLocations(response.data.locations);
        setPriceRanges(response.data.priceRanges);
      } catch (error) {
        console.error('Error fetching filter options', error);
      }
    };

    fetchFilters();
  }, []);

  const handleFilterChange = (key, value) => {
    setSelectedFilters({
      ...selectedFilters,
      [key]: value
    });
  };

  const handleApplyFilter = () => {
    onFilter(selectedFilters);
  };

  return (
    <div>
      <h3>Filter Events</h3>
      <div>
        <label>Category</label>
        <select
          onChange={(e) => handleFilterChange('category', e.target.value)}
          value={selectedFilters.category}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Location</label>
        <select
          onChange={(e) => handleFilterChange('location', e.target.value)}
          value={selectedFilters.location}
        >
          <option value="">Select Location</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Price Range</label>
        <select
          onChange={(e) => handleFilterChange('price', e.target.value)}
          value={selectedFilters.price}
        >
          <option value="">Select Price</option>
          {priceRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleApplyFilter}>Apply Filter</button>
    </div>
  );
};

export default EventFilter;
