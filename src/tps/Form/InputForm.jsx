import React from 'react';
function InputForm({ label, name, value ,onChange}) {
  return (
    <div>
    <label>
      {label}:
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>

    </div>

  );
}

export default InputForm;
