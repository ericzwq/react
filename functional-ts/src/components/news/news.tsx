import React, {MouseEventHandler, useEffect} from "react";
import type {ColumnsType} from "antd/es/table";
import styles from './news.module.scss'

const News: React.FC<{
  children?: React.ReactNode, data: unknown[], columns: ColumnsType<any>, before?: React.ReactNode, after?: React.ReactNode, onClick?: MouseEventHandler
}> = ({children, data, columns, before, after, onClick}, context) => {

  console.log('news', before, after, context)
  useEffect(() => console.log(document.querySelector('.' + styles.table)), [])

  return (<div style={{padding: '20px'}} onClick={onClick}>
    <div className={styles.table}>
      {children}
      {data.map((item: any) => {
        return (<div key={item.key} className={styles.row}>
          {columns.map((col: any, i) => {
            return (<div key={col.key}>
              {col.render ? col.render(col.dataIndex ? item[col.dataIndex] : item, item, i) : col.dataIndex ? item[col.dataIndex] : ''}
            </div>)
          })}
        </div>)
      })}
    </div>
  </div>)
}

export default News