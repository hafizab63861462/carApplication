import { Controller } from 'react-hook-form';
import { Row, Col, Input, Button, Select, Radio, Upload } from 'antd';
import { Fragment } from 'react';
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';

function CommonForm({ formSchema, control, onSubmit, submitButtonText }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Row
        justify="center"
        align="middle"
        style={{
          maxWidth: 300,
          padding: 20,
          border: '1px solid #ddd',
          borderRadius: 10,
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        {formSchema.map((item) => (
          <Fragment key={item.name}>
            {item.type === 'password' ? (
              <Col span={24} style={{ marginBottom: 16 }}>
                <Controller
                  name={item.name}
                  control={control}
                  render={({ field }) => (
                    <Input.Password
                      {...field}
                      placeholder={"password"}
                      type={"password"}
                      style={{ width: '100%' }}
                      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                  )}
                />
              </Col>
            ) : item.type === 'select' ? (
              <Col span={24} style={{ marginBottom: 16 }}>
                <Controller
                  name={item.name}
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      showSearch
                      style={{ width: '100%' }}
                      placeholder={item.placeholder}
                      optionFilterProp="label"
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                      }
                      options={item.options}
                    />
                  )}
                />
              </Col>
            ) : item.type === 'checkBox' ? (
              <Col span={24} style={{ marginBottom: 16 }}>
                <label style={{ marginRight: 10 }} >{item.header}</label>
                <Controller
                  name={item.name}
                  control={control}
                  render={({ field }) => (
                    <Radio.Group
                      {...field}
                      options={item.options}
                    />
                  )}
                />
              </Col>
            ) : item.type === 'image' ? (
              <Col span={24} style={{ marginBottom: 16 }}>
                <label style={{ marginRight: 10 }} >{item.header}</label>
                <Controller
                  name={item.name}
                  control={control}
                  render={({ field }) => (
                    <Upload
                      {...field}
                      multiple
                      listType="picture-card"
                    >
                      {item.condition() && '+ Upload'}
                    </Upload>
                  )}
                />
              </Col>
            ) : (
              <Col span={24} style={{ marginBottom: 16 }}>
                <Controller
                  name={item.name}
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder={item.placeholder}
                      type={item.type}
                      style={{ width: '100%' }}
                      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                  )}
                />
              </Col>
            )
            }
          </Fragment>
        ))}
        <Col span={24}>
          <Button
            type="primary"
            onClick={onSubmit}
            style={{ width: '100%' }}
          >
            {submitButtonText}
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default CommonForm;
