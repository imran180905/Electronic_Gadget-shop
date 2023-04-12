import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main>
        <div>{children}</div>
      </main>
    </div>
  );
};
export default Layout;
