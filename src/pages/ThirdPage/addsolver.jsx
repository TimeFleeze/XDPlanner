import React, { forwardRef } from 'react';
import { Form, Input, Button, Space, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


const Addsolver = forwardRef((props, ref) => {
  const [form] = Form.useForm();
  const { Option } = Select;

  return (
    <Form form={form} ref={ref} >

      <Form.List name="sights">

        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (

              <Space key={field.key} align="baseline">

                <Form.Item label="请选择大类" name="mainclass" rules={[{ required: true }]}>
                  <Select defaultValue="shiti" style={{ width: 100 }} >
                    <Option value="shiti">规划实体</Option>
                    <Option value="shishi">问题事实</Option>
                  </Select>
                </Form.Item>

                <Form.Item label="字段名" name='resourcedevice' rules={[{ required: true }]}>
                  <Input placeholder='请输入字段名' />

                </Form.Item>

                <Form.Item label="字段类型" name='starttime' rules={[{ required: true }]}>
                  <Input placeholder='请输入字段类型' />
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

export default Addsolver