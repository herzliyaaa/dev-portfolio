const Button = (props) => {
  const { action, label, additionalStyles } = props;
  return (
    <button onClick={action} className={additionalStyles}>
      {label}
    </button>
  );
};

export default Button;
