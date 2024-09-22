import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // To get query par
import api from "../data/api";

const Success = () => {
const [ticketId, setTicketId] = useState(null);
const [paymentStatus, setPaymentStatus] = useState();

const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get('session_id'); // Get session_id from URL

  
  useEffect(() => {
    const fetchTicketId = async () => {
      try {
        // Get the ticketId using the sessionId from the backend
        const response = await api.get(`/ticketapi/tickets/session/${sessionId}`);
        console.log('Ticket response:', response.data); // C
        const { ticketId } = response.data;
        setTicketId(ticketId);
      } catch (error) {
        console.error('Error fetching ticket ID:', error);
      }
    };

    if (sessionId) {
      fetchTicketId(); // Fetch ticketId if session_id is available
    }
  }, [sessionId]);

 
  useEffect(() => {
    const checkPaymentStatus = async () => {
      if (ticketId) {
        try {
          const response = await api.get(`/ticketapi/tickets/${ticketId}/status`);
          setPaymentStatus(response.data.status);
        } catch (error) {
          console.error('Error fetching payment status:', error);
        }
      }
    };

    if (ticketId) {
      checkPaymentStatus(); // Check payment status after getting ticketId
    }
  }, [ticketId]);
  
  return (
    <div className="text-center">
    <h1>Payment Status</h1>
    <p>{paymentStatus === 'paid' ? 'Your payment was successful!' : 'Processing your payment...'}</p>
  </div>
  )
}

export default Success