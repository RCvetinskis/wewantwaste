type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="mx-auto w-full max-w-[1400px] pt-4 px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Layout;
