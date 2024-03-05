'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import classnames from 'classnames';

const NavBar = () => {
  return <NavLinks />;
};

const NavLinks = () => {
  const currentPath = usePathname();
  const links = [
    { label: 'fleury.lol', href: '/' },
    { label: 'milo monday', href: '/milo' },
    { label: 'guitar mapper', href: '/fretmapper' },
  ];
  return (
    <ul className="flex space-x-3 md:space-x-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={classnames({
              'nav-link': true,
              '!underline': link.href === currentPath,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
