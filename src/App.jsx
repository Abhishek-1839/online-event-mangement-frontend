import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import AuthSelection from './component/AuthSelection';
import ForgotPassword from './component/ForgotPassword';
import ResetPassword from './component/ResetPassword';
import EventForm from './component/EventForm';
import BuyTicket from './component/BuyTicket';
import EventCalendar from './component/EventCalendar';
import MainLayout from './component/MainLayout';
import SimpleLayout from './component/SimpleLayout';
import PrivateRoute from './component/PrivateRoute';



function App() {

  return (
    <>
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<MainLayout />}>

            <Route path="/eventform" element={
              <PrivateRoute>
                <EventForm />
              </PrivateRoute>
            }
            />
            <Route
              path="/buy-ticket/:eventId"
              element={
                <PrivateRoute>
                  <BuyTicket />
                </PrivateRoute>
              }
            />
            <Route path="/eventschedule" element={<EventCalendar />} />
            {/* Add other routes with MainLayout here */}
          </Route>
          <Route element={<SimpleLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/auth" element={<AuthSelection />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            {/* Add other routes with SimpleLayout here */}
          </Route>
        </Routes>


      </div>
    </>
  )
}

export default App
