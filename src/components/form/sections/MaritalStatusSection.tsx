import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import TextField from '../../common/TextField';
import CheckboxField from '../../common/CheckboxField';

const MaritalStatusSection: React.FC = () => {
  const { control } = useFormContext();
  const isMarried = useWatch({
    control,
    name: 'isMarried',
    defaultValue: false
  });

  return (
    <div className="form-section">
      <h2>Marital Status</h2>
      
      <div className="form-row">
        <TextField 
          name="maritalStatus" 
          label="Marital Status" 
          required 
          placeholder="Enter marital status" 
        />
      </div>
      
      <div className="form-row">
        <CheckboxField 
          name="isMarried" 
          label="Married" 
        />
      </div>
      
      {isMarried && (
        <div className="conditional-section">
          <div className="form-row">
            <TextField 
              name="marriedSince" 
              label="Married Since" 
              placeholder="When did you get married?" 
            />
          </div>
          
          <div className="form-row">
            <TextField 
              name="partnerResidenceStatus" 
              label="Partner's Residence Status" 
              placeholder="Enter partner's residence status" 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MaritalStatusSection;
