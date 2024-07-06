import { Controller } from 'react-hook-form';
import { Row, Col, Input, Button } from 'antd';
import { Fragment } from 'react';

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
                  />
                )}
              />
            </Col>
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
