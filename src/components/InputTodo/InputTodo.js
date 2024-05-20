export const CONSTANT_VALUE = 0;

const InputTodo = (props) => {
  const { handleOnChangeInput, todoInput } = props;
  return <input type="text" onChange={handleOnChangeInput} value={todoInput} />;
};

export default InputTodo;
