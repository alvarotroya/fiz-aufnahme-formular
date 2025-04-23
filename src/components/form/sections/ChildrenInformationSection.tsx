import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import TextField from '../../common/TextField';
import CheckboxField from '../../common/CheckboxField';

const ChildrenInformationSection: React.FC = () => {
  const { control } = useFormContext();
  const hasChildrenInGermany = useWatch({
    control,
    name: 'hasChildrenInGermany',
    defaultValue: false
  });

  return (
    <div className="form-section">
      <h2>Children Information</h2>
      
      <div className="form-row">
        <CheckboxField 
          name="hasChildrenInGermany" 
          label="Children in Germany" 
        />
      </div>
      
      {hasChildrenInGermany && (
        <div className="conditional-section">
          <div className="form-row">
            <TextField 
              name="numberOfChildren" 
              label="Number of Children" 
              type="number" 
              placeholder="Enter number of children" 
            />
          </div>
          
          <div className="form-row">
            <TextField 
              name="childrenAges" 
              label="Ages of Children" 
              placeholder="Enter ages of children" 
            />
          </div>
          
          <div className="form-row">
            <TextField 
              name="childrenResidenceStatus" 
              label="Children's Residence Status" 
              placeholder="Enter children's residence status" 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChildrenInformationSection;
