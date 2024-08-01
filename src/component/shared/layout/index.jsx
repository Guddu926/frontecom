import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { DownOutlined, HeartOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet';
import { Dropdown, Space, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom, faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const menus = [
    { label: "CATEGORIES", href: "/categories" },
    { label: "SPORT", href: "/sport" },
    { label: 'TABBED', href: 'Tabbed' },
    { label: 'FASHION', href: 'fashion' },
    { label: "SHOP", href: "/sport" },
    { label: 'SIMPLE', href: 'simple' },
    { label: 'COLOR', href: 'color' }
];

const serchData = [
    { label: "Search", href: '/', icon: <FontAwesomeIcon icon={faSearch} className="fa-2x hover:opacity-100 cursor-pointer tracking-wide opacity-65" /> },
    { label: 'Sign in', href: '/', icon: <FontAwesomeIcon icon={faUser} className="fa-2x hover:opacity-100 cursor-pointer tracking-wide opacity-65" /> },
    { label: 'Cart', href: '/', icon: <FontAwesomeIcon icon={faShoppingCart} className="fa-2x ml-[-8px] hover:opacity-100 cursor-pointer tracking-wide opacity-65 " /> }
];

const items = [
    {
        label: (
            <div>
                <a className='flex' href="https://iqit-commerce.com/ps17/pl/" rel="alternate" hrefLang="pl">
                    <img
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        src="https://d293e64rvqt2z5.cloudfront.net/ps17/img/l/1.jpg"
                        alt="English"
                        className="img-fluid lang-flag pt-1"
                    />
                    <span className='ml-1 text-xs'>English</span>
                </a>
            </div>
        ),
        key: '1'
    },
    {
        label: (
            <div>
                <a className='flex' href="https://iqit-commerce.com/ps17/pl/" rel="alternate" hrefLang="pl">
                    <img
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        src="https://d293e64rvqt2z5.cloudfront.net/ps17/img/l/2.jpg"
                        alt="Polski" className="img-fluid lang-flag"
                    />
                    <span className='ml-1 text-xs'>Polski</span>
                </a>
            </div>
        ),
        key: '2'
    }
];

const usitem = (
    <Menu>
        <Menu.Item key="1"><span className='text-xs'>PLN zl</span></Menu.Item>
        <Menu.Item key="2"><span className='text-xs'>USD $</span></Menu.Item>
    </Menu>
);

const Layout = ({ children, title = "ecommerce" }) => {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div>
                <div className='bg-black w-full h-8 text-white text-[12px] p-1 flex justify-between pl-4 '>
                    <div className='pt-1'>
                        <span className='font-sans leading-3 hover:opacity-100 cursor-pointer tracking-wide opacity-65 text-xs'> Sitemap</span>
                        <span className='font-sans leading-3 hover:opacity-100 cursor-pointer tracking-wide opacity-25 text-xs ml-2'>|</span>
                        <span className='font-sans leading-3 hover:opacity-100 cursor-pointer tracking-wide opacity-65 text-xs pl-2'>Contact us</span>
                    </div>

                    <div className='flex row w-[380px]'>
                        <div className='font-sans leading-3 hover:opacity-100 cursor-pointer tracking-wide opacity-65 text-xs'>
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <div className='flex row mt-1 cursor-pointer'>
                                            <img
                                                width="16"
                                                height="11"
                                                src="https://d293e64rvqt2z5.cloudfront.net/ps17/img/l/1.jpg"
                                                alt="English"
                                                className="img-fluid lang-flag"
                                            />
                                            <span className='ml-1'>English</span>
                                        </div>
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <span className='font-sans leading-3 hover:opacity-100 cursor-pointer tracking-wide opacity-25 text-xs ml-2'>|</span>
                        <div className='font-sans leading-3 ml-2 hover:opacity-100 cursor-pointer tracking-wide opacity-65 text-xs'>
                            <Dropdown overlay={usitem} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <div className='flex row mt-1 cursor-pointer'>
                                            <span className='ml-1'>USD $</span>
                                        </div>
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <span className='font-sans leading-3 hover:opacity-100 cursor-pointer tracking-wide opacity-25 text-xs ml-1'>|</span>
                        <span className="p-1 font-sans leading-3 ml-2 hover:opacity-100 cursor-pointer tracking-wide opacity-65 text-xs">
                            <span className='p-1'><HeartOutlined /></span>
                            Wishlist <span className='font-sans leading-3 p-1 hover:opacity-100 cursor-pointer tracking-wide opacity-65 text-xs'>(0)</span>
                        </span>
                        <span className='font-sans leading-3 hover:opacity-100 cursor-pointer tracking-wide opacity-25 text-xs '>|</span>
                        <span className='p-1 font-sans leading-3 hover:opacity-100 cursor-pointer tracking-wide opacity-65 text-xs pl-2'>
                            <FontAwesomeIcon icon={faRandom} /><span className='p-1'>Compare</span>(0)
                        </span>
                    </div>
                </div>
                <nav className='bg-white flex flex-col md:flex-row p-5 justify-between text-black border h-[86px]'>
                    <div className='pt-2 pl-2 ml-[-12px]'>
                        <img
                            src='https://d293e64rvqt2z5.cloudfront.net/ps17/img/warehouse-for-prestashop-17-logo-1496957294.jpg'
                            width={218}
                            height={34}
                        />
                    </div>
                    <div className='flex gap-5 pt-2 p-2  font-bold opacity-65'>
                        {menus.map((item) => (
                            <Link
                                to={item.href}
                                key={item.href}
                                className={`flex items-center gap-2 text-[15px] text-black capitalize ${item.href === pathname ? 'text-red-500' : ''}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className='flex flex-col md:flex-row'>
                        {serchData.map((item, index) => (
                            <div key={index} className=' items-center'>

                                <div className='pl-3'>
                                    <span className=' cursor-auto text-xs'>{item.icon}</span>
                                </div>
                                <div className='p-2'>
                                    <label className='text-[14px] cursor-auto '>{item.label}</label>
                                </div>
                            </div>
                        ))}
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
