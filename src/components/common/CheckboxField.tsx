import React from 'react';
import { useFormContext } from 'react-hook-form';

interface CheckboxFieldProps {
  name: string;
  label: string;
  required?: boolean;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  name,
  label,
  required = false
}) => {
  const { register, formState: { errors } } = useFormContext();
  
  return (
    <div className="form-field checkbox-field">
      <label htmlFor={name} className="checkbox-label">
        <input
          id={name}
          type="checkbox"
          className={`form-checkbox ${errors[name] ? 'input-error' : ''}`}
          {...register(name)}
        />
        <span className="checkbox-text">
          {label} {required && <span className="required">*</span>}
        </span>
      </label>
      {errors[name] && (
        <p className="error-message">{errors[name]?.message as string}</p>
      )}
    </div>
  );
};

export default CheckboxField;
