import React from 'react';
import { useFormContext } from 'react-hook-form';

interface TextFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: 'text' | 'date' | 'tel' | 'number' | 'textarea';
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  placeholder = '',
  required = false,
  type = 'text',
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
      {type === 'textarea' ? (
        <textarea
          id={name}
          placeholder={placeholder}
          className={`form-input ${errors[name] ? 'input-error' : ''}`}
          rows={4}
          {...register(name)}
        />
      ) : (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          className={`form-input ${errors[name] ? 'input-error' : ''}`}
          {...register(name)}
        />
      )}
      {errors[name] && (
        <p className="error-message">{errors[name]?.message as string}</p>
      )}
    </div>
  );
};

export default TextField;
