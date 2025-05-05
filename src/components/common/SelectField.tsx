import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import Select from 'react-select';

interface SelectFieldProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
  placeholder?: string;
  className?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  name,
  label,
  options,
  required = false,
  placeholder = 'Select an option',
  className,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const customStyles = {
    control: (base: any) => ({
      ...base,
      borderColor: errors[name] ? 'red' : '#ccc',
      '&:hover': { borderColor: errors[name] ? 'red' : '#888' },
      boxShadow: 'none',
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isFocused ? '#f0f0f0' : '#fff',
      color: '#333',
      textAlign: 'left',
    }),
  };

  return (
    <div className={`form-field ${className}`}>
      <label htmlFor={name} className="form-label">
        {label} {required && <span className="required">*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div>
            <Select
              {...field}
              options={options}
              placeholder={placeholder}
              styles={customStyles}
              isClearable
              classNamePrefix="react-select"
              onChange={(selectedOption) => {
                field.onChange(selectedOption ? selectedOption.value : '');
              }}
              value={
                options.find((option) => option.value === field.value) || null
              }
            />
            {errors[name] && (
              <p className="error-message">{errors[name]?.message as string}</p>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default SelectField;
