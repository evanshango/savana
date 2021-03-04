import styles from './Sidebar.module.css'
import CloseIcon from '@material-ui/icons/Close';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {Link, withRouter} from "react-router-dom";

const menus = [
    {
        group: 'Overview',
        items: [
            {
                name: 'Dashboard',
                icon: <DashboardIcon/>,
                link: '/'
            }
        ]
    },
    {
        group: 'Management',
        items: [
            {
                name: 'Admins',
                icon: <SupervisorAccountOutlinedIcon/>,
                link: '/admins'
            },
            {
                name: 'Organizations',
                icon: <AccountBalanceIcon/>,
                link: '/organizations'
            },
            {
                name: 'Users',
                icon: <GroupOutlinedIcon/>,
                link: '/users'
            }
        ]
    },
    {
        group: 'Actions',
        items: [
            {
                name: 'Sections',
                icon: <HourglassEmptyIcon/>,
                link: '/sections'
            },
            {
                name: 'Products',
                icon: <BusinessCenterIcon/>,
                link: '/products'
            },
            {
                name: 'Orders',
                icon: <ShoppingCartOutlinedIcon/>,
                link: '/orders'
            },
            {
                name: 'Payments',
                icon: <AttachMoneyOutlinedIcon/>,
                link: '/payments'
            },
            {
                name: 'Emails',
                icon: <MailOutlineIcon/>,
                link: '/emails'
            },
            {
                name: 'Messages',
                icon: <QuestionAnswerOutlinedIcon/>,
                link: '/messages'
            }
        ]
    },
    {
        group: 'Settings',
        items: [{
            name: 'Site Settings',
            icon: <SettingsOutlinedIcon/>,
            link: '/settings'
        }]
    }
]

const Sidebar = ({sidebarOpen, closeSidebar, location: {pathname}}) => {

    return (
        <div className={sidebarOpen ? `${styles.sidebar} ${styles.sidebar_responsive}` : `${styles.sidebar}`}>
            <div className={styles.sidebar_title}>
                <div className={styles.sidebar_img}>
                    <h3>OSHO<span>P</span></h3>
                </div>
                <span className={sidebarOpen ? `${styles.sidebar_icon} ${styles.open}` : `${styles.sidebar_icon}`}
                      onClick={() => closeSidebar()}>
                    <CloseIcon/>
                </span>
            </div>
            <div className={styles.sidebar_menu}>
                {menus.map((menu, index) => (
                    <span key={index}>
                        <h2>{menu.group}</h2>
                        {menu.items.map((item, ind) => (
                            <li className={pathname === `${item.link}` ?
                                `${styles.sidebar_link} ${styles.active_menu}` : `${styles.sidebar_link}`}
                                key={ind} onClick={() => sidebarOpen && closeSidebar()}>
                                <Link to={item.link}>
                                    <span>{item.icon}{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default withRouter(Sidebar)