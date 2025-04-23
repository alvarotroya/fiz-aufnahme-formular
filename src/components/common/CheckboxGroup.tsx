import React from 'react';
import { useFormContext } from 'react-hook-form';

interface CheckboxGroupProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  name,
  label,
  options,
  required = false
}) => {
  const { register, formState: { errors } } = useFormContext();
  
  return (
    <div className="form-field checkbox-group">
      <label className="form-label">
        {label} {required && <span className="required">*</span>}
      </label>
      <div className="checkbox-options">
        {options.map((option) => (
          <label key={option.value} htmlFor={`${name}-${option.value}`} className="checkbox-label">
            <input
              id={`${name}-${option.value}`}
              type="checkbox"
              value={option.value}
              className="form-checkbox"
              {...register(name)}
            />
            <span className="checkbox-text">{option.label}</span>
          </label>
        ))}
      </div>
      {errors[name] && (
        <p className="error-message">{errors[name]?.message as string}</p>
      )}
    </div>
  );
};

export default CheckboxGroup;
