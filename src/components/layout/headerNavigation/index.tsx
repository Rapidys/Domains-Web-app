import React from 'react';
import Navigation from "src/components/navigation";
import s from './index.module.scss'

const NavItems = [
    {id: 1, title: 'დომენი', href: '/'},
    {id: 2, title: 'ტრანსფერი', href: '/'},
    {id: 3, title: 'ჰოსტინგი', href: '/'},
    {id: 4, title: 'Gmail', href: '/'},
    {id: 5, title: 'ვებგვერდი', href: '/'},
    {id: 7, title: 'დომენის მარკეტი', href: '/'},
]
const NavItems2 = [
    {id: 1, title: 'ჩვენს შესახებ', href: '/'},
    {id: 2, title: 'ფასები', href: '/'},
    {id: 3, title: 'ბლოგი', href: '/'},
    {id: 4, title: 'დახმარება', href: '/'},
]
const HeaderNavigation = () => {
    return (
        <div className = {[s.wrapper].join(' ')}>
            <nav className = {`container ${s.nav}`}>
                <Navigation navItems={NavItems}/>
                <Navigation navItems={NavItems2}/>
            </nav>
        </div>

    );
};

export default  HeaderNavigation;
