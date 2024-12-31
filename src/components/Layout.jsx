const Layout = ({ children }) => {
  return (
    <main className="bg-gray-100  flex flex-col relative items-center justify-between   min-h-screen w-screen md:w-[600px] mx-auto p-5">
      {children}
    </main>
  );
};
export default Layout;
