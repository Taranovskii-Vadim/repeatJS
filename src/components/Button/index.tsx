import "./style.css";

interface Props {
  label: string;
  onClick: () => void;
}

const GradientButton = ({ label, onClick }: Props): JSX.Element => (
  <button className="btn" onClick={onClick}>
    {label}
  </button>
);

export default GradientButton;
