const FormSelect = ({ label, name, list, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        name={name}
        id={name}
        className={`select select-bordered ${size}`}
        defaultValue={defaultValue}
      >
        {list.map((list) => {
          return (
            <option key={list} value={list}>
              {list}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormSelect;
