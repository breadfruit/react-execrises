import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'
import type {RootState, AppDispatch} from "./store";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// test2 commit
// test2 第二次提交
// test2 第三次提交