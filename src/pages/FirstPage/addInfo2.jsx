import React, { forwardRef } from 'react'
import { Form, Input } from 'antd';


const addInfo2 = forwardRef((props, ref) => {

  return (
    <div>
      <Form
        name="validate_other"
        ref={ref}
      >
        <Form.Item label="大类" name='class' >
          <span className="ant-form-text">Target</span>
        </Form.Item>

        <Form.Item label="目标位置坐标" name="position" rules={[{ required: true }]}>
          <Input placeholder="请输入目标位置坐标" />
        </Form.Item>

        <Form.Item label="目标类型" name='type' rules={[{ required: true }]}>
          <Input placeholder='请输入目标类型' />
        </Form.Item>

        <Form.Item label="具体设备种类" name='name' rules={[{ required: true }]}>
          <Input placeholder='请输入设备种类' />
        </Form.Item>

        <Form.Item label="精度阈值" name='accuracylimit' rules={[{ required: true }]}>
          <Input placeholder='请输入精度阈值' />
        </Form.Item>


      </Form>
    </div>
  )
})

export default addInfo2