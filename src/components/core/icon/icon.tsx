import '@/assets/styles/icons.css';

type IconProps = {
  name: string;
  className?: string;
  size?: number | string;
  color?: string; // CSS color, hex, or rgb
};

const Icon = ({ 
  name, 
  className = '', 
  size = 24,
  color
}: IconProps) => {
  // Determine if className contains Tailwind text color
  const hasTextColor = className.split(' ').some(c => c.startsWith('text-'));

  return (
    <i 
      className={`icon icon__${name} ${className}`}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        ...(!hasTextColor && color ? { color } : {}) // Only apply if no Tailwind color class
      }}
      aria-hidden="true"
    />
  );
};

export default Icon;