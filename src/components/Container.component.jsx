const Container = ({ children }) => {
  return (
    <main className=' flex bg-gray-900 min-h-screen justify-center items-center flex-col'>
      {children}
    </main>
  );
}

export default Container;
