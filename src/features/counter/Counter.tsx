import { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { useAppSelector, useAppDispatch } from '../../app/hook'
export function Counter() {
    //可以拿到仓库里面的数据
    const count = useAppSelector((state) => state.counter.value);
    //ui更新，触发store数据更新
    const dispatch = useAppDispatch();
    return (
        <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    )
}

//vv分支 第一次变动
//vv分支 第三次变动