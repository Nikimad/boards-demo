import { useDispatch } from "react-redux"

const useAction = (action) => {
  const dispatch = useDispatch();
  dispatch(action);
};

export default useAction;
