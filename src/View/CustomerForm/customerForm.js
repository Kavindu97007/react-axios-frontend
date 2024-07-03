import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerForm = ({ customer, setCustomer, fetchCustomers }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');

  // Update form fields when the customer prop changes (for editing)
  useEffect(() => {
    if (customer) {
      setName(customer.name);
      setAge(customer.age);
      setPhone(customer.phone);
    } else {
      // Clear form fields when customer prop is null (reset scenario)
      setName('');
      setAge('');
      setPhone('');
    }
  }, [customer]);

  // Handle form submission for adding or updating a customer
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (customer) {
        // Update existing customer
        await axios.put(`http://localhost:5000/api/users/${customer._id}`, { name, age, phone });
      } else {
        // Add new customer
        await axios.post('http://localhost:5000/api/users', { name, age, phone });
      }
      setCustomer(null); // Reset the customer state after successful update/add
      fetchCustomers(); // Refresh the customer list
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
      <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <button type="submit">{customer ? 'Update' : 'Add'} Customer</button>
    </form>
  );
};

export default CustomerForm;
