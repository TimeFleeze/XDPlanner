import React, { useState } from 'react'
import { Button, Modal, Table, Popconfirm } from 'antd'
import AddInfo from './addInfo'
import AddInfo2 from './addInfo2'
import './index.css'
import SunBrust from '../SunBrust'
import { initialdata } from '../SunBrust/initialdata'
import Adjustadd from './adjustadd'
import { nanoid } from 'nanoid'



function FirstPage () {

  const [currentid, setCurrentid] = useState(1)
  const [currentid2, setCurrentid2] = useState(1)
  const [visible, setVisible] = useState()
  const [basedata, setBasedata] = useState([])
  const [basedata2, setBasedata2] = useState([])
  const [sunbrustdata, setSunbrustdata] = useState()

  const addFormRef = React.createRef()
  const addFormRef2 = React.createRef()
  const addFormRef3 = React.createRef()

  const columns = [
    {
      title: '类别',
      dataIndex: 'class',
      key: 'class',
    },
    {
      title: '设备id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '资源平台种类',
      dataIndex: 'resourceplatform',
      key: 'resourceplatform',
    },
    {
      title: '资源设备种类',
      dataIndex: 'resourcedevice',
      key: 'resourcedevice',
    },
    {
      title: '资源启动时间',
      dataIndex: 'starttime',
      key: 'starttime',
    },
    {
      title: '资源平台位置坐标',
      dataIndex: 'platformposition',
      key: 'platformposition',
    },
    {
      title: '精度',
      dataIndex: 'accuracy',
      key: 'accuracy',
    },
    {
      title: '消耗',
      dataIndex: 'consume',
      key: 'consume',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '最远分配距离',
      dataIndex: 'longestdistance',
      key: 'longestdistance',
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        return (
          <div>

            <Popconfirm title="确定删除?" onConfirm={handledelete(record.id)}>
              <a>删除</a>
            </Popconfirm>

          </div>
        );
      },
    },

  ];

  const columns2 = [
    {
      title: '类别',
      dataIndex: 'class',
      key: 'class',
    },
    {
      title: '设备id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '目标位置坐标',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: '目标类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '具体设备种类',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '精度阈值',
      dataIndex: 'accuracylimit',
      key: 'accuracylimit',
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        return (
          <div>
            <Popconfirm title="确定删除?" onConfirm={handledelete2(record.id)}>
              <a>删除</a>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const handledelete = (id) => {
    return () => {
      const newbasedata = basedata.filter((item) => {
        return item.id !== id
      })
      setBasedata(newbasedata)
    }
  }
  const handledelete2 = (id) => {
    return () => {
      const newbasedata2 = basedata2.filter((item) => {
        return item.id !== id
      })
      setBasedata2(newbasedata2)
    }
  }

  const handleupdate = () => {

    addFormRef.current.validateFields().then(value => {
      value.class = 'Resource'
      //value.id = nanoid()
      value.id = currentid
      value.key = currentid
      let newdata = value
      setBasedata(basedata.concat(newdata))
      setCurrentid(currentid + 1)
    }
    )
    setVisible(0)
  }

  const handleupdate2 = () => {
    addFormRef2.current.validateFields().then(value => {
      value.class = 'Target'
      //value.id = nanoid()
      value.id = currentid2
      value.key = currentid2
      let newdata = value
      setBasedata2(basedata2.concat(newdata))
      setCurrentid2(currentid2 + 1)
    }
    )
    setVisible(0)
  }

  const handleupdate3 = () => {
    setVisible(0)
  }

  const solve = () => {
    setSunbrustdata(initialdata)
  }

  return (

    <div className="site-layout-background">
      <Modal
        title="添加Resource信息"
        visible={visible === 1}
        onOk={handleupdate}
        onCancel={() => setVisible(0)}
        okText="确定"
        cancelText="取消"
        destroyOnClose
      >
        <AddInfo ref={addFormRef} currentid={currentid} />

      </Modal>
      <Modal
        title="添加Target信息"
        visible={visible === 2}
        onOk={handleupdate2}
        onCancel={() => setVisible(0)}
        okText="确定"
        cancelText="取消"
        destroyOnClose
      >
        <AddInfo2 ref={addFormRef2} currentid={currentid2} />

      </Modal>

      <Modal
        title="测试添加"
        visible={visible === 3}
        onOk={handleupdate3}
        onCancel={() => setVisible(0)}
        okText="确定"
        cancelText="取消"
        destroyOnClose
        width={1500}
      >
        <Adjustadd ref={addFormRef3} />

      </Modal>


      <Button className='button' style={{ margin: '0 24px 16px 0', overflow: 'initial' }} onClick={() => setVisible(1)}>添加一个Resource</Button>
      <Button className='button' style={{ margin: '0 24px 16px 0', overflow: 'initial' }} onClick={() => setVisible(2)}>添加一个Target</Button>
      <Button className='button' style={{ margin: '0 24px 16px 0', overflow: 'initial' }} onClick={solve}>求解</Button>
      <Button className='button' style={{ margin: '0 24px 16px 0', overflow: 'initial' }} onClick={() => setVisible(3)}>测试用添加按钮</Button>

      <Table dataSource={basedata} columns={columns} />
      <Table dataSource={basedata2} columns={columns2} />
      <SunBrust sunbrustdata={sunbrustdata} />
    </div>


  )
}

export default FirstPage