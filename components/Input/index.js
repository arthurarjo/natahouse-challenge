import React from "react";

import styles from "./Input.module.css";

const Input = ({ name, placeholder, onChange, ...rest }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.inputInner}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default Input;
