import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  AppstoreAddOutlined,
  SettingOutlined,
} from "@ant-design/icons";
// import "antd/dist/antd.css"; // Import Ant Design CSS
import "./style.css";
import { useNavigate, useNavigation } from "react-router-dom";
// CustomButton.propTypes = {
//   marginLeft: PropTypes.string,
// };

// CustomButton.defaultProps = {
//   marginLeft: "",
// };

function NavBar(props) {
  const navigate = useNavigate();

  return (
    <Menu mode="horizontal" theme="dark" >
      <Menu.Item
        key="home"
        icon={<HomeOutlined />}
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </Menu.Item>
      <Menu.Item
        key="profile"
        icon={<UserOutlined />}
        onClick={() => {
          navigate("/screenshot");
        }}
      >
        Screenshot match
      </Menu.Item>
      <Menu.Item key="projects" icon={<AppstoreAddOutlined />}>
        Projects
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
    </Menu>
  );
}

export default NavBar;
