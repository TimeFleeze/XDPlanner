import React, { forwardRef } from 'react';
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


const Adjustadd = forwardRef((props, ref) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} ref={ref} >

      <Form.List name="sights">

        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (

              <Space key={field.key} align="baseline">

                <Form.Item label="大类" name='class' >
                  <span className="ant-form-text">Resource</span>
                </Form.Item>

                <Form.Item label="资源平台种类" name="resourceplatform" rules={[{ required: true }]}>
                  <Input placeholder="请输入资源平台种类" />
                </Form.Item>

                <Form.Item label="资源设备种类" name='resourcedevice' rules={[{ required: true }]}>
                  <Input placeholder='请输入资源设备种类' />

                </Form.Item>

                <Form.Item label="资源启动时间" name='starttime' rules={[{ required: true }]}>
                  <Input placeholder='请输入资源启动时间' />
                </Form.Item>

                <Form.Item label="资源平台位置坐标" name='platformposition' rules={[{ required: true }]}>
                  <Input placeholder='请输入平台位置坐标' />
                </Form.Item>

                <Form.Item label="精度" name='accuracy' rules={[{ required: true }]}>
                  <Input placeholder='请输入精度' />
                </Form.Item>

                <Form.Item label="消耗" name='consume' rules={[{ required: true }]}>
                  <Input placeholder='请输入消耗' />
                </Form.Item>

                <Form.Item label="状态" name='status' rules={[{ required: true }]}>
                  <Input placeholder='请输入状态' />
                </Form.Item>

                <Form.Item label="最远分配距离" name='longestdistance' rules={[{ required: true }]}>
                  <Input placeholder='请输入最远分配距离' />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}

            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add
              </Button>
            </Form.Item>

          </>
        )}

      </Form.List>



    </Form>
  );
})

export default Adjustadd