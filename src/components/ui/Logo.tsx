import { ActivitySquare } from 'lucide-react';

type LogoSize = 'sm' | 'md' | 'lg';

interface LogoProps {
  size?: LogoSize;
}

const sizeClasses = {
  sm: 'text-xl',
  md: 'text-3xl',
  lg: 'text-5xl'
};

const Logo = ({ size = 'md' }: LogoProps) => {
  return (
    <div className="flex items-center gap-2">
      <ActivitySquare className={`${sizeClasses[size]} text-primary-700 dark:text-primary-400`} />
    </div>
  );
};

export default Logo;