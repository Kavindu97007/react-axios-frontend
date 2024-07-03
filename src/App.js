import React, { useState } from 'react';
import CustomerForm from './View/CustomerForm/customerForm';
import CustomerList from './View/CustomerList/customerList.js';

const App = () => {
  const [customer, setCustomer] = useState(null); // State to keep track of the customer being edited

  return (
    <div>
      <h1>Customer Management</h1>
      {/* CustomerForm component for adding/editing customers */}
      <CustomerForm customer={customer} setCustomer={setCustomer} />
      {/* CustomerList component to display the list of customers */}
      <CustomerList setCustomer={setCustomer} />
    </div>
  );
};

export default App;