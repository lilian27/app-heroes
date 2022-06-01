import React from 'react'
import { Routes, Route } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { BrowserRouter } from "react-router-dom";
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/*" element= {<DashboardRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}
