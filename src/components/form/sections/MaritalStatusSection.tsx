import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import TextField from '../../common/TextField';
import SelectField from '../../common/SelectField';

const MaritalStatusSection: React.FC = () => {
  const { control } = useFormContext();
  const isMarried = useWatch({
    control,
    name: 'isMarried',
    defaultValue: '',
  });

  const marriedOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
  ];

  return (
    <div className="form-section">
      <h2>Marital Status</h2>

      <div className="form-row">
        <SelectField
          name="isMarried"
          label="Are you married?"
          options={marriedOptions}
          placeholder="Select an option"
          required
        />
      </div>

      {isMarried === 'yes' && (
        <div className="conditional-section">
          <div className="form-row">
            <TextField
              name="maritalStatus"
              label="Marital Status"
              required
              placeholder="Enter marital status"
            />
          </div>

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
