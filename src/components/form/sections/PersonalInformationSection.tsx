import React from 'react';
import TextField from '../../common/TextField';

const PersonalInformationSection: React.FC = () => {
  return (
    <div className="form-section">
      <h2>Personal Information</h2>
      <div className="form-row">
        <TextField 
          name="inquiryDate" 
          label="Date of Inquiry" 
          type="date" 
          required 
        />
      </div>
      
      <div className="form-row">
        <TextField 
          name="lastName" 
          label="Last Name" 
          required 
          placeholder="Enter last name" 
        />
        <TextField 
          name="firstName" 
          label="First Name" 
          required 
          placeholder="Enter first name" 
        />
      </div>
      
      <div className="form-row">
        <TextField 
          name="aliasName" 
          label="Alias Name/Anonymous" 
          placeholder="Enter alias name if applicable" 
        />
      </div>
      
      <div className="form-row">
        <TextField 
          name="placeOfResidence" 
          label="Place of Residence" 
          required 
          placeholder="Enter place of residence" 
        />
      </div>
      
      <div className="form-row">
        <TextField 
          name="phoneNumber" 
          label="Phone Number" 
          type="tel" 
          required 
          placeholder="Enter phone number" 
        />
      </div>
      
      <div className="form-row">
        <TextField 
          name="timeInGermany" 
          label="Time in Germany" 
          required 
          placeholder="How long in Germany?" 
        />
      </div>
      
      <div className="form-row">
        <TextField 
          name="nationality" 
          label="Nationality" 
          required 
          placeholder="Enter nationality" 
        />
      </div>
    </div>
  );
};

export default PersonalInformationSection;
