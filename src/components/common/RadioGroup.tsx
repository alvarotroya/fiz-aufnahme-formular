import React from 'react';
import { useFormContext } from 'react-hook-form';

interface RadioGroupProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  label,
  options,
  required = false
}) => {
  const { register, formState: { errors } } = useFormContext();
  
  return (
    <div className="form-field radio-group">
      <label className="form-label">
        {label} {required && <span className="required">*</span>}
      </label>
      <div className="radio-options">
        {options.map((option) => (
          <label key={option.value} htmlFor={`${name}-${option.value}`} className="radio-label">
            <input
              id={`${name}-${option.value}`}
              type="radio"
              value={option.value}
              className="form-radio"
              {...register(name)}
            />
            <span className="radio-text">{option.label}</span>
          </label>
        ))}
      </div>
      {errors[name] && (
        <p className="error-message">{errors[name]?.message as string}</p>
      )}
    </div>
  );
};

export default RadioGroup;
