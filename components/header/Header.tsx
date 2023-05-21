
import type { Image } from "deco-sites/std/components/types.ts";



import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  image?: {
    src?: Image;
    alt?: string;
  };
}

export interface Props {
  alerts: string[];

  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];

  /**
   * @title Product suggestions
   * @description Product suggestions displayed on search
   */


  /**
   * @title Enable Top Search terms
   */

}

function Header(
  {
    alerts,
  
    navItems = [],
  
  }: Props,
) {
 
  return (
    <>
      <header style={{ height: headerHeight }}>
        <div class="bg-base-100 fixed w-full z-50">
          <Alert alerts={alerts} />
          <Navbar items={navItems}  />
        </div>

      
      </header>
    </>
  );
}

export default Header;
