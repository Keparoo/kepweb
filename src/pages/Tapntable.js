import React from 'react';

import { Typography } from '@mui/material';
import Navbar from '../components/Navbar';

const Tapntable = () => {
  return (
    <div>
      <Navbar />
      <Typography variant="h1">Tapntable</Typography>
    </div>
  );
};

export default Tapntable;
/*
Tapntable is a web based Point of Sale (POS) for managing a restaurant.

* It serves as an employee timeclock, logging an employee's hours
* It maintains a database of items sold, availability, price and sales
* It manages the creation, editing, managing, and routing of orders
* It manages and tracks item modifications for orders
* It handles separatation of courses, firing and communication with kitchen
* It displays current orders to 2 kitchen stations and the service bar
* It calculates check totals
* It handles the splitting and joining of checks
* It tracks cash and credit card payments as well as related tips
* It reconciles a server's shift sales, displays totals and calculates cash owed or payed out
* It reconciles all sales for a day and can detailed sales reports for various periods


*/
