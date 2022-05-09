import React, { useEffect, useState } from 'react'
import { Pagination, Card, Button, Tabs, Modal } from 'antd';
import { nanoid } from 'nanoid';

import './index.scss'
import { PlusCircleOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import Addsolver from './addsolver';


export default function ThirdPage () {

  const [curPage, setCurPage] = useState(1);
  const [data, setData] = useState([]);
  const [old_data, setOld_data] = useState([]);
  const [visible, setVisible] = useState(0);

  const { Meta } = Card;
  const { TabPane } = Tabs;
  const addFormRef = React.createRef()

  useEffect(() => {
    let tmp = old_data.slice(0, 7);
    setData(tmp)
  }, [old_data])

  function callback (key) {
    console.log(key);
  }

  const changePage = (gotoPage) => {
    console.log(gotoPage)
    setCurPage(gotoPage)
    let tmp = old_data.slice((gotoPage - 1) * 7, gotoPage * 7)
    setData(tmp)
  }


  return (
    <div>
      <Tabs onChange={callback} type="card" style={{ marginLeft: '10%', marginTop: '20px' }} >
        <TabPane tab="解决器列表" key="1">
          <div className='df-container'>
            <div className='item add' onClick={() => { setOld_data([...old_data, nanoid()]) }}><PlusCircleOutlined style={{ fontSize: '48px' }} /></div>
            {
              data.map(item => <div className='item'>
                <Card
                  bordered={false}
                  style={{ width: '100%' }}
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    style={{ height: 90 }}
                    title={item}
                    description="This is the description"
                  />
                </Card>
              </div>)
            }
          </div>
          <div className='solverfooter'>
            <Pagination current={curPage} onChange={changePage} total={old_data.length} pageSize={7} showSizeChanger={false} />
          </div>
        </TabPane>
      </Tabs>

    </div>
  )
}
