import News from "@/components/news/news";
import {Outlet, useNavigate} from "react-router";
import {Switch, Table, Input} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {useEffect, useRef, useState} from "react";
import RouteLoading from "@/components/route-loading/route-loading";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Full Name',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    ellipsis: true
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    dataIndex: 'age',
    render: (text, record) => <a>{JSON.stringify(record)}</a>,
  },
];

const data: DataType[] = [];
for (let i = 0; i < 1; i++) {
  data.push({
    key: i,
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no.safsadfasdf ${i}`,
  });
}

function A() {
  return (<div>A</div>)
}

export default function () {
  const navigate = useNavigate()
  const [fixedTop, setFixedTop] = useState(false);
  let [obj, setObj] = useState({o: 2})
  const [fn, setFn] = useState(function f() {
    return function ff() {
    }
  })

  console.log(fn, setFn)
  useEffect(() => {
    obj = {o: 3}
    setObj(obj)
    setFn(function fc() {
      // 想设置一个函数，但是被当做设置状态的方法了
      return function fb() {
      }
    })
  }, [])

  const routeLoadingRef = useRef()
  return (<>
    <p>home</p>
    <button onClick={() => navigate('card/1?a=2', {state: {o: 2}})}>to card1</button>
    <RouteLoading ref={routeLoadingRef}/>
    <News onClick={(e) => console.log('click news container', e, e.eventPhase, e.currentTarget, e.target)}
          data={data} columns={columns} before={<div>f</div>} after={<A/>}
    >
      <div>div</div>
      <Input addonBefore={'c'}/>
    </News>
    <div>fn.name: {fn.name}</div>
    <div>{JSON.stringify(obj)}</div>
    {/*<Table
      columns={columns}
      dataSource={data}
      summary={() => (
        <Table.Summary fixed={fixedTop ? 'top' : 'bottom'}>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={2}>
              <Switch
                checkedChildren="Fixed Top"
                unCheckedChildren="Fixed Top"
                checked={fixedTop}
                onChange={() => {
                  setFixedTop(!fixedTop);
                }}
              />
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1}>
              Scroll Context
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2}>Fix Right</Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
      sticky
    />*/}
    <Outlet/>
  </>)
}