import React from 'react';
import { useFormContext } from 'react-hook-form';
import '../../styles/TextField.css';

interface TextFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: 'text' | 'date' | 'tel' | 'number' | 'textarea';
  className?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  placeholder = '',
  required = false,
  type = 'text',
  className = '',
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-field">
      <div
        className={`form-input-wrapper ${type === 'textarea' ? 'form-input-wrapper--textarea' : ''}`}
      >
        <span className="form-label-inline">
          {label} {required && <span className="required">*</span>}
        </span>
        {type === 'textarea' ? (
          <textarea
            id={name}
            placeholder={placeholder}
            className={`form-input ${className} ${errors[name] ? 'input-error' : ''}`}
            rows={4}
            {...register(name)}
          />
        ) : (
          <input
            id={name}
            type={type}
            placeholder={placeholder}
            className={`form-input ${className} ${errors[name] ? 'input-error' : ''}`}
            {...register(name)}
          />
        )}
      </div>
      {errors[name] && (
        <p className="error-message">{errors[name]?.message as string}</p>
      )}
    </div>
  );
};

export default TextField;
