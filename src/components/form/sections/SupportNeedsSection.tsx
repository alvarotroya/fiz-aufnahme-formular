import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import TextField from '../../common/TextField';
import CheckboxField from '../../common/CheckboxField';
import CheckboxGroup from '../../common/CheckboxGroup';

const SupportNeedsSection: React.FC = () => {
  const { control } = useFormContext();
  const supportTypes = useWatch({
    control,
    name: 'supportTypes',
    defaultValue: [],
  });

  const supportTypeOptions = [
    { value: 'humanTrafficking', label: 'Human Trafficking' },
    { value: 'forcedProstitution', label: 'Forced Prostitution' },
    {
      value: 'criminalIssues',
      label: 'Criminal Issues (charges against/by her, court proceedings)',
    },
    { value: 'insecureResidenceTitle', label: 'Insecure Residence Title' },
    { value: 'laborExploitation', label: 'Labor Exploitation' },
    { value: 'fgm', label: 'FGM/C' },
    { value: 'domesticViolence', label: 'Domestic Violence' },
    { value: 'separationAndDivorce', label: 'Separation and Divorce' },
    {
      value: 'psychologicalStress',
      label: 'Strong Psychological Stress without Previous Support',
    },
    { value: 'sexualViolence', label: 'Sexual Violence' },
    { value: 'asylum', label: 'Asylum' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="form-section">
      <h2>Support Needs</h2>

      <div className="form-row">
        <TextField
          name="specificSupportNeeds"
          label="Specific Support Needs"
          required
          placeholder="Please specify concrete concerns"
          type="textarea"
        />
      </div>

      <div className="form-row">
        <CheckboxField
          name="acuteThreatSituation"
          label="Acute Threat Situation"
        />
      </div>

      <div className="form-row">
        <CheckboxGroup
          name="supportTypes"
          label="Women-specific Issues"
          options={supportTypeOptions}
        />
      </div>

      {supportTypes.includes('other') && (
        <div className="form-row">
          <TextField
            name="otherSupportType"
            label="Other Support Type"
            placeholder="Specify other support type"
            required
          />
        </div>
      )}
    </div>
  );
};

export default SupportNeedsSection;
