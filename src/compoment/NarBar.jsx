import React, { useState } from "react";
import {
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Avatar, Layout, Menu, Button, Space } from 'antd';
const { Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Thông tin cá nhân', 'sub1', <UserOutlined />),
    getItem('Quản lý lớp học', 'sub2', <TeamOutlined />, [
        getItem('Danh sách lớp', '6'),
        getItem('Danh sách học sinh', '8'
        )]),
];
function NarBar() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider theme="light" defaultCollapsed collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{
            backgroundColor: '#52c41a',
            color: '#FFFFFF'
        }}>
            <Space wrap size={0} style={{
                margin: 20,
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Avatar size={150} icon={<UserOutlined />} />
                <p style={{ marginLeft: 18, fontSize: 17, fontWeight: 700 }}>Trần Văn Quang</p>
            </Space>
            <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} style={{
                backgroundColor: '#52c41a',
                color: '#FFFFFF'
            }} />
            {/* <Space wrap style={{
                bottom: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Button type="dashed">Primary Button</Button>
            </Space> */}
        </Sider>);
}

export default NarBar;