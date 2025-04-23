import React from 'react';
import SelectField from '../../common/SelectField';
import TextField from '../../common/TextField';

const AsylumProcedureSection: React.FC = () => {
  const asylumProcedureOptions = [
    { value: 'dublinProcedure', label: 'Dublin Procedure' },
    { value: 'nationalProcedure', label: 'National Procedure' },
    {
      value: 'appealProcedure',
      label: 'Appeal Procedure (Administrative Court)',
    },
  ];

  return (
    <div className="form-section">
      <h2>Asylum Procedure Status</h2>

      <div className="form-row">
        <SelectField
          name="asylumProcedureStatus"
          label="Asylum Procedure Status"
          options={asylumProcedureOptions}
          placeholder="Select your asylum procedure status"
        />
      </div>

      <div className="form-row">
        <TextField
          name="asylumProcedureDetails"
          label="Additional Details"
          placeholder="Enter additional details about asylum procedure"
          type="textarea"
        />
      </div>
    </div>
  );
};

export default AsylumProcedureSection;
