import React from 'react';
import { useFormContext } from 'react-hook-form';

interface SelectFieldProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
  placeholder?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  name,
  label,
  options,
  required = false,
  placeholder = 'Select an option',
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-field">
      <label htmlFor={name} className="form-label">
        {label} {required && <span className="required">*</span>}
      </label>
      <select
        id={name}
        className={`form-select ${errors[name] ? 'input-error' : ''}`}
        {...register(name)}
      >
        <option value="" disabled hidden selected>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && (
        <p className="error-message">{errors[name]?.message as string}</p>
      )}
    </div>
  );
};

export default SelectField;
