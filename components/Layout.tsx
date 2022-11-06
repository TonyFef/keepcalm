import { LayoutProps } from "../types/types";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
        {children}
    <Footer />
  </>
);

export default Layout;
