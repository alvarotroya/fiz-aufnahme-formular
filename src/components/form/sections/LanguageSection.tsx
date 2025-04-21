import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import SelectField from '../../common/SelectField';
import TextField from '../../common/TextField';

const LanguageSection: React.FC = () => {
  const { control } = useFormContext();
  const preferredLanguage = useWatch({
    control,
    name: 'preferredLanguage',
    defaultValue: ''
  });

  const languageOptions = [
    { value: 'german', label: 'German' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'english', label: 'English' },
    { value: 'french', label: 'French' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="form-section">
      <h2>Languages</h2>
      
      <div className="form-row">
        <TextField 
          name="languages" 
          label="Languages Spoken" 
          required 
          placeholder="Enter languages spoken" 
        />
      </div>
      
      <div className="form-row">
        <SelectField
          name="preferredLanguage"
          label="Preferred Language for Consultation"
          options={languageOptions}
          required
          placeholder="Select preferred language"
        />
      </div>
      
      {preferredLanguage === 'other' && (
        <div className="form-row">
          <TextField 
            name="otherLanguage" 
            label="Other Language" 
            placeholder="Specify other language" 
            required
          />
        </div>
      )}
    </div>
  );
};

export default LanguageSection;
