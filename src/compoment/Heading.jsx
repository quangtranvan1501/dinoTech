import React from 'react';
import { Menu, Space, theme } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

function getItem(icon, label, key, children,) {
    return {
        icon,
        children,
        label,
        key,
    }
}

const item = [
    getItem(<UserOutlined />, '', '1', [
        getItem(<LogoutOutlined />, 'Đăng xuất')
    ]),
];

function Heading() {
    return (
        <Space size={20} wrap style={{ position: 'absolute', top: 0, right: 50 }}>
            <Menu items={item} />
        </Space>
    );
}

export default Heading;