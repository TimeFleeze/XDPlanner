import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import { initialdata } from '../SunBrust/initialdata'
import SunBrust from '../SunBrust'
const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

export default function Secondpage () {

  let columns = [
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
      editable: true,
    },
    {
      title: '资源设备种类',
      dataIndex: 'resourcedevice',
      key: 'resourcedevice',
      editable: true,
    },
    {
      title: '资源启动时间',
      dataIndex: 'starttime',
      key: 'starttime',
      editable: true,
    },
    {
      title: '资源平台位置坐标',
      dataIndex: 'platformposition',
      key: 'platformposition',
      editable: true,
    },
    {
      title: '精度',
      dataIndex: 'accuracy',
      key: 'accuracy',
      editable: true,
    },
    {
      title: '消耗',
      dataIndex: 'consume',
      key: 'consume',
      editable: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      editable: true,
    },
    {
      title: '最远分配距离',
      dataIndex: 'longestdistance',
      key: 'longestdistance',
      editable: true,
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="确定删除?" onConfirm={() => handleDelete(record.key)}>
            <a>删除</a>
          </Popconfirm>
        ) : null,
    },
  ];

  let columns2 = [
    {
      title: '类别',
      dataIndex: 'class',
      key: 'class',
    },
    {
      title: '设备id',
      dataIndex: 'id',
      key: 'id',
      editable: true,
    },
    {
      title: '目标位置坐标',
      dataIndex: 'position',
      key: 'position',
      editable: true,
    },
    {
      title: '目标类型',
      dataIndex: 'type',
      key: 'type',
      editable: true,
    },
    {
      title: '具体设备种类',
      dataIndex: 'name',
      key: 'name',
      editable: true,
    },
    {
      title: '精度阈值',
      dataIndex: 'accuracylimit',
      key: 'accuracylimit',
      editable: true,
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) =>
        dataSource2.length >= 1 ? (
          <Popconfirm title="确定删除?" onConfirm={() => handleDelete2(record.key)}>
            <a>删除</a>
          </Popconfirm>
        ) : null,
    },
  ];



  const [dataSource, setDataSource] = useState([])
  const [dataSource2, setDataSource2] = useState([])
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [sunbrustdata, setSunbrustdata] = useState()


  const handleDelete = (key) => {
    setDataSource(dataSource.filter((item) => item.key !== key));
  };

  const handleDelete2 = (key) => {
    setDataSource2(dataSource2.filter((item) => item.key !== key));
  };

  const handleAdd = () => {
    const newData = {
      key: count,
      class: 'Resource',
      id: count + 1,
      resourceplatform: '天',
      resourcedevice: '飞机',
      starttime: 100,
      platformposition: '0E 0S',
      accuracy: 100,
      consume: 100,
      status: '可启用',
      longestdistance: '100km',
    };

    setDataSource([...dataSource, newData])
    setCount(count + 1)
  };

  const handleAdd2 = () => {
    const newData = {
      key: count2,
      class: 'Target',
      id: count2 + 1,
      position: '0E 0S',
      type: '地',
      name: '雷达',
      accuracylimit: 100,
    };

    setDataSource2([...dataSource2, newData])
    setCount2(count2 + 1)
  };

  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setDataSource(newData)
  };

  const handleSave2 = (row) => {
    const newData = [...dataSource2];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setDataSource2(newData)
  };


  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  columns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave,
      }),
    };
  });

  columns2 = columns2.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave2,
      }),
    };
  });

  const solve = () => {
    setSunbrustdata(initialdata)
  }
  return (
    <div>
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16, }}>
        添加一个Resource
      </Button>
      <Button onClick={() => { console.log(dataSource) }}>
        展示Resource数据
      </Button>

      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={columns}
      />

      <Button onClick={handleAdd2} type="primary" style={{ marginBottom: 16, }}>
        添加一个Target
      </Button>
      <Button onClick={() => { console.log(dataSource2) }}>
        展示Target数据
      </Button>

      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource2}
        columns={columns2}
      />
      <Button className='button' style={{ marginBottom: 16, }} onClick={solve}>求解</Button>
      <SunBrust sunbrustdata={sunbrustdata} />
    </div>
  );

}


