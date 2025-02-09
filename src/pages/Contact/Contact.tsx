import React, { useState } from "react";

import "./Contact.scss";
import Input from "../../Atoms/Input/Input";

const Contact: React.FC = () => {
  const [nameValue, setNameValue] = useState("");
  const [kanaValue, setKanaValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [errors, setErrors] = useState({
    nameRequired: false,
    nameMaxLength: false,
    kanaRequired: false,
    kanaMaxLength: false,
    kanaNotMatchKana: false,
    emailInvalid: false,
    emailRequired: false,
    emailMaxLength: false,
  });
  const [dirty, setDirty] = useState({
    name: false,
    kana: false,
    email: false,
  });
  const [touched, setTouched] = useState({
    name: false,
    kana: false,
    email: false,
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNameChange = (value: string) => {
    setNameValue(value);
    setErrors({
      ...errors,
      nameRequired: value === "",
      nameMaxLength: value.length > 50,
    });
    setDirty({
      ...dirty,
      name: true,
    });
  };

  const handleKanaChange = (value: string) => {
    setKanaValue(value);
    setErrors({
      ...errors,
      kanaRequired: value === "",
      kanaMaxLength: value.length > 50,
    });
    setDirty({
      ...dirty,
      kana: true,
    });
  };

  const handleEmailChange = (value: string) => {
    setEmailValue(value);
    setErrors({
      ...errors,
      emailInvalid: !validateEmail(value),
      emailRequired: value === "",
      emailMaxLength: value.length > 50,
    });
    setDirty({
      ...dirty,
      email: true,
    });
  };

  const handleNameBlur = () => {
    setTouched({
      ...touched,
      name: true,
    });
  };

  const handleKanaBlur = () => {
    setTouched({
      ...touched,
      kana: true,
    });
  };

  const handleEmailBlur = () => {
    setTouched({
      ...touched,
      email: true,
    });
  };

  return (
    <div className="contact">
      <h2 className="contact__title">Contact</h2>
      <div className="contact__content">
        <Input
          label="お名前"
          require={true}
          type="text"
          value={nameValue}
          placeholder="松本 太郎"
          maxValue={50}
          onChange={handleNameChange}
          onTouched={handleNameBlur}
          errors={{
            required: errors.nameRequired,
            maxlength: errors.nameMaxLength,
          }}
          dirty={dirty.name}
          touched={touched.name}
        />
        <Input
          label="フリガナ"
          require={true}
          type="text"
          value={kanaValue}
          placeholder="マツモト タロウ"
          maxValue={50}
          onChange={handleKanaChange}
          onTouched={handleKanaBlur}
          errors={{
            required: errors.kanaRequired,
            maxlength: errors.kanaMaxLength,
          }}
          dirty={dirty.kana}
          touched={touched.kana}
        />
        <Input
          label="メールアドレス"
          require={true}
          type="email"
          value={emailValue}
          placeholder="メールアドレスを入力"
          maxValue={50}
          onChange={handleEmailChange}
          onTouched={handleEmailBlur}
          errors={{
            email: errors.emailInvalid,
            required: errors.emailRequired,
            maxlength: errors.emailMaxLength,
          }}
          dirty={dirty.email}
          touched={touched.email}
        />
      </div>
    </div>
  );
};

export default Contact;
