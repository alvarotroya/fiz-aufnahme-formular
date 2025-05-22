import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import TextField from '../../common/TextField';
import SelectField from '../../common/SelectField';

const ChildrenInformationSection: React.FC = () => {
  const { control } = useFormContext();
  const hasChildrenInGermany = useWatch({
    control,
    name: 'hasChildrenInGermany',
    defaultValue: '',
  });

  const childrenOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
  ];

  return (
    <div className="form-section">
      <h2>Children Information</h2>

      <div className="form-row">
        <SelectField
          name="hasChildrenInGermany"
          label="Do you have children in Germany?"
          options={childrenOptions}
          placeholder="Select an option"
          required
        />
      </div>

      {hasChildrenInGermany === 'yes' && (
        <div className="conditional-section">
          <div className="form-row">
            <TextField
              name="numberOfChildren"
              label="Number of Children"
              type="number"
              placeholder="Enter number of children"
              required
            />
          </div>

          <div className="form-row">
            <TextField
              name="childrenAges"
              label="Ages of Children"
              placeholder="Enter ages of children"
              required
            />
          </div>

          <div className="form-row">
            <TextField
              name="childrenResidenceStatus"
              label="Children's Residence Status"
              placeholder="Enter children's residence status"
              required
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChildrenInformationSection;
