import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import SelectField from '../../common/SelectField';
import TextField from '../../common/TextField';

const EmploymentSection: React.FC = () => {
  const { control } = useFormContext();
  const isWorking = useWatch({
    control,
    name: 'isWorking',
    defaultValue: '',
  });

  const workingOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
  ];

  return (
    <div className="form-section">
      <h2>Employment</h2>

      <div className="form-row">
        <SelectField
          name="isWorking"
          label="Are you currently working?"
          options={workingOptions}
          placeholder="Select an option"
          required
        />
      </div>

      {isWorking === 'yes' && (
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
