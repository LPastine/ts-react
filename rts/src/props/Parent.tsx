import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="blue" onClick={() => console.log('Clicked')}>
      As we declared this component as a React.FC it expects to receive children
      props.
    </ChildAsFC>
  );
};

export default Parent;
