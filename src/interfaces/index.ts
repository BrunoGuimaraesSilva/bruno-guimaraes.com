export type User = {
  id: number;
  name: string;
};

export interface LayoutProps {
  children: React.ReactNode;
}

export interface GReact<P = {}> extends React.FC<P> {}

export interface LottieAnimationProps {
  width?: string;
  height?: string;
  loop?: boolean;
}



