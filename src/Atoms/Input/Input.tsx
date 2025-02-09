import React, { useState } from "react";
import "./Input.scss";

interface FormProps {
  label?: string;
  require?: boolean;
  type: string;
  value: string;
  placeholder?: string;
  helpText?: string;
  maxValue?: number;
  onChange: (value: string) => void;
  onTouched: () => void;
  errors?: {
    email?: boolean;
    required?: boolean;
    notMatchPassword?: boolean;
    notMatchKana?: boolean;
    maxlength?: boolean;
  };
  dirty?: boolean;
  touched?: boolean;
}

const Input: React.FC<FormProps> = ({
  label,
  require,
  type,
  value,
  placeholder,
  helpText,
  maxValue,
  onChange,
  onTouched,
  errors,
  dirty,
  touched,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="l-form">
      {label && <label>{label}</label>}
      {require && <span className="c-require">必須</span>}
      <div className="l-form__content">
        <input
          type={type}
          value={inputValue}
          placeholder={placeholder}
          onInput={handleInputChange}
          onBlur={onTouched}
          required
          className={
            errors && (dirty || touched) && errors.required ? "c-error" : ""
          }
        />
        {helpText && (
          <div className="l-help">
            <p>{helpText}</p>
          </div>
        )}
        <div className="l-error">
          {errors && (dirty || touched) && (
            <>
              {errors.email && (
                <div className="error-message">
                  有効なメールアドレスで入力してください。
                </div>
              )}
              {errors.required && (
                <div className="error-message">{label}を入力してください。</div>
              )}
              {errors.notMatchPassword && (
                <div className="error-message">パスワードが一致しません。</div>
              )}
              {errors.notMatchKana && (
                <div className="error-message">
                  カタカナで入力してください。
                </div>
              )}
              {errors.maxlength && (
                <div className="error-message">
                  {maxValue}文字以内で入力してください
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
