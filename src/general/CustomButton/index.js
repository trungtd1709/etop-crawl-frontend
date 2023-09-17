import PropTypes from "prop-types";
import "./style.scss";
CustomButton.propTypes = {
  marginLeft: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.any,
  icon: PropTypes.any,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  className: PropTypes.string,
  showBorder: PropTypes.bool,
  gap: PropTypes.string,
  fontSize: PropTypes.string,
  loading: PropTypes.bool,
};

CustomButton.defaultProps = {
  marginLeft: "",
  backgroundColor: "white",
  borderColor: "#304FFD",
  borderRadius: "4px",
  height: "36px",
  disabled: false,
  className: "",
  showBorder: true,
  fontSize: "14px",
  loading: false,
};

function CustomButton(props) {
  const {
    showBorder,
    icon,
    color,
    onClick,
    className,
    fontSize,
    loading,
    id,
    marginLeft,
  } = props;
  return (
    <button
      {...props}
      id={id}
      className={`custom-button ${className} font-sfpro-regular `}
      onClick={onClick}
      style={{
        ...props,
        borderStyle: "solid",
        borderWidth: showBorder ? "1px" : "0px",
        marginTop: 2,
        marginRight: 2,
        marginLeft: marginLeft,
      }}
    >
      {loading === false ? null : (
        <span className="spinner-border spinner-border-sm text-light mr-2"></span>
      )}
      {icon && <i style={{ color: color }} className={icon}></i>}
      <span
        className="text-truncate"
        title={props.text}
        style={{ fontWeight: "500", fontSize: fontSize }}
      >
        {props.text}
      </span>
    </button>
  );
}

export default CustomButton;
