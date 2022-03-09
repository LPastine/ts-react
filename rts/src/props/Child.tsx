interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>;
};

// We explicitly declare the React Function Component as a TS React.FC type so
// TS can recognize the default properties of React Components
// such as (propTypes, displayName, defaultProps, contextTypes)
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
