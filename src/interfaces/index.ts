export type User = {
  id: number;
  name: string;
};

interface LayoutProps {
  children: React.ReactNode;
}

export interface GReact<P = {}> extends React.FC<P> {}
export interface GLayoutProps extends React.FC<LayoutProps> {}

export interface LottieAnimationProps {
  width?: string;
  height?: string;
  loop?: boolean;
}



