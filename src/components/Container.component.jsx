function Container({ children }) {
  return (
    <main className=' flex bg-gray-800 min-h-screen justify-center items-center flex-col'>
      {children}
    </main>
  );
}

export default Container;
