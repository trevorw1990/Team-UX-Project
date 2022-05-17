import { useState,useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from '../Homepage/Homepage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import AuthPage from '../AuthPage/AuthPage';
import { getUser } from '../../utilities/api/users/users-service';
import ProfilePage from '../ProfilePage/ProfilePage';
import './App.css';

export default function About() {

    return (
        <div>
            <h1> Meet the Team </h1>
            <div className="team">
                <h2> Mindy Miller </h2> 
                
                <h2> Damon Fung </h2>
                <img src='/images/About/Damon Photo.jpg' alt='Damon'/>
                <h2> Orlando Valadez </h2>
                <h2> Roy Daniel </h2> 
                <h2> Jonathan Suarez </h2>
                <h2> Moses Burkhart </h2>
                <h2> Trevor Whitehurst </h2> 
                <h2> Ashley Webb </h2> 
                <h2> Savannah Villa </h2>
            </div>
        </div>
    )
}