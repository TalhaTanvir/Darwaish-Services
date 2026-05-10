import type { ButtonHTMLAttributes, CSSProperties } from 'react';

type AnimatedButtonProps = {
  label?: string;
  buttonStyle?: CSSProperties;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function AnimatedButton({
  label = 'Hover me!',
  className = '',
  type = 'button',
  style,
  buttonStyle,
  ...props
}: AnimatedButtonProps) {
  const combinedClassName = ['animated-button', className].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={combinedClassName}
      style={{ ...buttonStyle, ...style }}
      {...props}
    >
      {label}
    </button>
  );
}

export default AnimatedButton;
