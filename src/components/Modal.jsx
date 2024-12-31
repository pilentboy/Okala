const Modal = ({ children }) => {
  return (
    <div className="h-screen flex items-end pb-4 justify-center fixed bottom-0  left-1/2 translate-x-[-50%] z-[500] backdrop-blur-sm	 w-full md:w-[600px]">
      {children}
    </div>
  );
};

export default Modal;
