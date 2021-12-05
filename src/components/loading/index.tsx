import { LoadingIndicator } from './styles';

interface LoadingProps {
  color?: string;
  size?: string;
  className?: string;
}

export const Loading = ({ size, color, className }: LoadingProps) => {
  return <LoadingIndicator size={size} color={color} className={className} />;
};
