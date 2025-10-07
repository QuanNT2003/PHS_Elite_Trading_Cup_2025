import FooterComp from "../footer";
import HeaderComp from "../header";

type DefaultLayoutProps = {
  children?: React.ReactNode;
};

function defaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="min-h-screen select-none">
      <HeaderComp />
      {children}
      <FooterComp />
    </div>
  );
}

export default defaultLayout;
