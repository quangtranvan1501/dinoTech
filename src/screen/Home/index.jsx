import React from 'react';
import "./index.css";
import { Avatar, Breadcrumb, Descriptions, Layout, Menu, Space, theme } from 'antd';
import NarBar from '../../compoment/NarBar';
import Heading from '../../compoment/Heading';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import Column from 'antd/es/table/Column';
const { Header, Content, Footer } = Layout;


const profile1 = [
    {
        key: '1',
        label: 'Họ và tên',
        span: 4,
        children: 'Trần Văn Quang',
    },
    {
        key: '2',
        label: 'Ngày sinh',
        span: 4,
        children: '15/10/2001',
    },
    {
        key: '3',
        label: 'CCCD',
        span: 4,
        children: '1234567990',
    },
    {
        key: '4',
        label: 'Số điện thoại',
        span: 4,
        children: '1234560',
    },
    {
        key: '5',
        label: 'Địa chỉ',
        children: 'Số a, đường B, xã C, huyện D, Hà nội',
        span: 2,
    },
]

const profile2 = [

    {
        key: '6',
        label: 'Mã giáo viên',
        children: '16542A',
    },
    {
        key: '7',
        label: 'Email',
        children: '123@gmail.com',
        span: 2,
    },
    {
        key: '8',
        label: 'Chức vụ',
        children: 'Giáo viên cao cấp',
    },
    {
        key: '9',
        label: 'Đơn vị công tác',
        children: 'Khoa khoa học máy tính',
        span: 2,
    },
]

function Home() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <NarBar></NarBar>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Heading></Heading>
                </Header>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                            fontSize: 24,
                            fontWeight: 700
                        }}
                    >
                        <Breadcrumb.Item>Thông tin cá nhân</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='wrappContentProfile1' style={{
                        padding: 24,
                        minHeight: 360,
                        background: colorBgContainer,
                    }}>
                        <div className='contentProfile1' >
                            <div style={{ flex: 2, display: 'flex', justifyContent: 'center', borderRight: 2, borderRightColor: '#333', borderRightStyle: 'solid' }}>
                                <Avatar shape="square" size={120} icon={<UserOutlined style={{}} />} style={{ width: 100, height: 200 }} />
                            </div>
                            <div style={{ flex: 8 }}>
                                <Descriptions bordered items={profile1} />
                            </div>
                        </div>
                    </div>

                    <div className='wrappContentProfile2'
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <div style={{
                            flex: 1,
                            backgroundColor:colorBgContainer,
                            borderRadius: 8,
                            paddingBottom: 100
                        }}>
                            <Descriptions bordered items={profile2} style={{ padding: 20, fontColor: '#fff' }} />

                        </div>
                    </div>

                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Home;