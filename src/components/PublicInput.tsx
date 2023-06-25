import { useState } from "react";

type PublicInputType = {
  icon: string;
  alt?: string;
  name: string;
  type: string;
  modelValue: string;
  setValue(s: string): void;
}

const PublicInput: React.FC<PublicInputType> = ({
  icon,
  name,
  type,
  alt,
  modelValue,
  setValue
}) => {
  const [focus, setFocus]= useState(false)
  return (
    <div className={"input-public " + (focus? 'focus' : '')}>
      <img src={icon} alt={alt} />
      <input 
        type={type} 
        placeholder={name} 
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setValue(e.target.value)}
        value={modelValue}
      />
    </div>
  );
};

export default PublicInput;
