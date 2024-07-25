import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
    UserOutlined,
    ShoppingCartOutlined,
    SearchOutlined
} from '@ant-design/icons';

const menus = [
    {
        label: "CATEGORIES",
        href: "/categories",

    },
    {
        label: "SPORT",
        href: "/sport",

    },

    {
        label: 'TABBED',
        href: 'Tabbed'
    },
    {
        label: 'FASHION',
        href: 'fashion'
    },

    {
        label: "SHOP",
        href: "/sport",

    },
    {
        label: 'TABBED',
        href: 'Tabbed'
    },
    {
        label: 'FASHION',
        href: 'fashion'
    },
    {
        label: 'SIMPLE',
        href: 'simple'
    },
    {
        label: 'SIMPLE',
        href: 'simple'
    },
    {
        label: 'COLOR',
        href: 'color'
    }
];


const serchData = [
    {
        label: "Search",
        href: '/',
        icon: <SearchOutlined />
    },

    {
        label: 'Sign in',
        href: '/',
        icon: <UserOutlined />
    },
    {
        label: 'Cart',
        href: '/',
        icon: <ShoppingCartOutlined />
    }

]

const Layout = ({ children, title = "Page title is empty" }) => {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div>
                <div className='bg-black w-full  text-white text-[11px] p-2 tracking-widest flex justify-between'>
                    <span>Sitemap | contacts us</span>
                    <div>
                        <span className='p-1'>English</span>

                        <span className='p-1'>USD &</span>

                        <span className="p-1">Wishilist(0)</span>

                        <span className='p-1'>Compare (0)</span>
                    </div>


                </div>
                <nav className='bg-white flex p-5 justify-between text-black border'>
                    <div className='pt-4 pl-2'>
                        <img src='https://d293e64rvqt2z5.cloudfront.net/ps17/img/warehouse-for-prestashop-17-logo-1496957294.jpg'
                            width={180}
                            height={36}
                        />
                    </div>
                    <div className='flex gap-6 font-bold  pt-2'>
                        {menus.map((item) => (
                            <Link
                                to={item.href}
                                key={item.href}
                                className={`flex items-center gap-2 text-[15px] text-black capitalize ${item.href === pathname ? 'text-red-500' : ''}`}
                            >
                                {item.icon}
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className='flex w-[160px] '>
                        {
                            serchData.map((item, index) => (
                                <div key={index}>
                                    {
                                        <span className='p-3 cursor-auto' style={{ width: "25px" }} >{item.icon}</span>
                                    }
                                    <div className='p-2'>
                                        {
                                            <label className='text-[14px] cursor-auto'>{item.label}</label>
                                        }
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </nav>
                <main className='p-1'>{children}</main>
                <footer className='bg-slate-900 flex p-8 justify-between text-white text-2xl'>
                    Footer
                </footer>
            </div>
        </>
    );
};

export default Layout;
