import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import TextField from '../../common/TextField';
import CheckboxField from '../../common/CheckboxField';

const EmploymentSection: React.FC = () => {
  const { control } = useFormContext();
  const isWorking = useWatch({
    control,
    name: 'isWorking',
    defaultValue: false
  });

  return (
    <div className="form-section">
      <h2>Employment</h2>
      
      <div className="form-row">
        <CheckboxField 
          name="isWorking" 
          label="Currently Working" 
        />
      </div>
      
      {isWorking && (
        <div className="conditional-section">
          <div className="form-row">
            <TextField 
              name="workingHours" 
              label="Working Hours" 
              placeholder="Enter working hours (for appointment scheduling)" 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EmploymentSection;
