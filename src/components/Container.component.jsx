const Container = ({ children }) => {
  return (
    <main className=' flex min-h-screen justify-center items-center flex-col'>
      {children}
    </main>
  );
};

export default Container;
