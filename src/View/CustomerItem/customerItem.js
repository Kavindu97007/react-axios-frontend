import React from 'react';
import axios from 'axios';

const CustomerItem = ({ customer, setCustomer, fetchCustomers }) => {
  // Handle deleting a customer
  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/users/${customer._id}`);
    fetchCustomers(); // Refresh the customer list
  };

  return (
    <div>
      <p>Name: {customer.name} </p>
      <p>Age: {customer.age}</p>  
      <p>Mobile Number: {customer.phone}</p>
      {/* Button to edit the customer */}
      <button onClick={() => setCustomer(customer)}>Edit</button>
      {/* Button to delete the customer */}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default CustomerItem;

////////for handle individual customer