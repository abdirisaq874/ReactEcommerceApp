import "./form-input.styles.scss";

const FormInput = ({ label, ...otherprobs }) => {
  return (
    <div className="group">
        <input className="form-input" {...otherprobs} />
      {label && (
        <label
          className={`${
            otherprobs.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
