import React from 'react';
import './App.css';
import './styles/form.css';
import PhoneInquiryForm from './components/form/PhoneInquiryForm';

function App() {
  const handleSubmit = (data: any) => {
    console.log('Form submitted with data:', data);
    alert('Form submitted successfully!');
  };

  return (
    <div className="App">
      <PhoneInquiryForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
