import { useState, useTransition, 
  // 用于class：与 useTransition 功能一样：
  startTransition,
  useId,
} from 'react'


const LIST_SIZE = 20000

function UseTransitionDemo() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])
  const [isPending, startTransition] = useTransition()

  const handleChange = e => {
    setInput(e.target.value)

    // const l = []
    // 2. 此处的 LIST_SIZE 列表过大，在input框输入后显示在页面上会出现明显卡顿
    // for (let i=0; i<LIST_SIZE; i++) {
    //   l.push(e.target.value)
    // }
    // setList(l)

    // 3. 用useTransition 包裹，将input框的值缓存起来，输入时就不会感觉明显卡顿卡顿：
    startTransition(() => {
      const l = []
      // 2. 此处的 LIST_SIZE 列表过大，在input框输入后显示在页面上会出现明显卡顿
      for (let i=0; i<LIST_SIZE; i++) {
        l.push(e.target.value)
      }
      setList(l)
    })
  }

  return (
    <div className="App">
      <input type='text' value={input} onChange={handleChange}/>
      {
        // 4. 利用isPending完善页面流程，让输入时看到有loading有状态：
        isPending ? 'Loading...' :
        // 1. 进行双向数据绑定，将input框输入的内容重复放在页面上20000条
        list.map((item, idex)=> <div key={idex}>{item}</div>)
      }
    </div>
  );
}

export default UseTransitionDemo;
