import * as React from 'react' ;

import { Link } from 'react-router-dom';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import LogoImage from '../../../assets/Landing/logo.png' ;

import {
    HeaderDiv,
    LogoImg,
    NavList,
    LinkList,
    MenuList
} from '../Styles/Header.styles' ;

const Header = () => {
    const menuList = [
        {
            label : "Home",
            link : "/#"
        },
        {
            label : 'About Us',
            link : '/#'
        },
        {
            label : "Our NFTs",
            link : '/#'
        },
        {
            label : "Roadmap",
            link : '/#'
        },
        {
            label : "Our Team",
            link : '/#'
        }
    ];

    const linkList = [
        {
            label : 'Follow Us-',
            link : '/#'
        },
        {
            label : <FacebookIcon />,
            link : '/#'
        },
        {
            label : <TwitterIcon />,
            link : '/#'
        },
        {
            label : <InstagramIcon />,
            link : '/#'
        }
    ];

    return (
        <HeaderDiv>
            <LogoImg src={LogoImage} />
            <NavList>
                <LinkList>
                    {
                        linkList.map((item, index) => (
                            <Link key={index} to={item.link}>
                                {item.label}
                            </Link>
                        ))
                    }
                </LinkList>
                <MenuList>
                    {
                        menuList.map((item, index) => (
                            <Link key={index} to={item.link}>
                                {item.label}
                            </Link>
                        ))
                    }
                </MenuList>
            </NavList>
        </HeaderDiv>
    )
}

export default Header ;