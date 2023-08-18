  "use client";

import * as NavMenu from '@radix-ui/react-navigation-menu';
import { useRouter } from 'next/navigation';
import NextLink from 'next/link';
import { clsx } from "clsx";

const Link = ({ href, ...props }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href} passHref legacyBehavior>
      <NavMenu.Link
        className="NavigationMenuLink"
        active={isActive}
        {...props}
      />
    </NextLink>
  );
};

const NavBar = () => {
  return (
    <NavMenu.Root className="relative">
        <NavMenu.List className="flex bg-black p-2 space-x-2">
            <NavMenu.Item>
              <Link className='text-yellow-500' href='/'>Home</Link>
            </NavMenu.Item>
            <NavMenu.Item>
              <Link className='text-yellow-500' href='/games'>Games</Link>
            </NavMenu.Item>
            <NavMenu.Item>
              <Link className='text-yellow-500' href='/runs'>Runs</Link>
            </NavMenu.Item>         
        </NavMenu.List>
        <NavMenu.Viewport />
    </NavMenu.Root>
  );
};

export default NavBar;