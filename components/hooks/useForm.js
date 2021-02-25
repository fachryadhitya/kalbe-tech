import { useField } from "formik";

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className={props.labelstyle} htmlFor={props.id || props.name}>
        {label}
      </label>
      <br />

      <input
        {...field}
        {...props}
        onClick={props.onClick}
        onKeyUp={props.onKeyUp}
      />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};
