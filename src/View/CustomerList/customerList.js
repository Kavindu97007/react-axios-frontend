import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomerItem from '../CustomerItem/customerItem';

const CustomerList = ({ setCustomer }) => {
  const [customers, setCustomers] = useState([]);

  // Fetch the list of customers from the server
  const fetchCustomers = async () => {
    const response = await axios.get('http://localhost:5000/api/users');
    setCustomers(response.data);
  };

  useEffect(() => {
    fetchCustomers(); // Fetch customers when the component mounts
  }, []);

  return (
    <div>
      {customers.map((customer) => (
        <CustomerItem key={customer._id} customer={customer} setCustomer={setCustomer} fetchCustomers={fetchCustomers} />
      ))}
    </div>
  );
};

export default CustomerList;
