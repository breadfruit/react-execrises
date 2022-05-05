import { decrement, increment } from './counterSlice'
import { useAppDispatch } from '../../app/hook'
export function Counter() {
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
//ww分支 第一次变动