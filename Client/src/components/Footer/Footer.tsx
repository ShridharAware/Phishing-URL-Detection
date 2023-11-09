import FooterCSS from "./Footer.module.css";
const Footer: React.FC = () => {
  return (
    <>
      <footer className={FooterCSS.footer}>
        <div className={FooterCSS.links}>
          <div className={FooterCSS.footerContent}>
            <h4>Link 1</h4>
            <h4>Link 2</h4>
            <h4>Link 3</h4>
          </div>
          <div className={FooterCSS.footerContent}>
            <h4>Link 1</h4>
            <h4>Link 2</h4>
            <h4>Link 3</h4>
          </div>
          <div className={FooterCSS.footerContent}>
            <h4>Link 1</h4>
            <h4>Link 2</h4>
            <h4>Link 3</h4>
          </div>
        </div>
        <div className={FooterCSS.copyrights}>© 2023. All Rights Reserved.</div>
      </footer>
    </>
  );
};
export default Footer;
