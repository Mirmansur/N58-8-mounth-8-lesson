const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative">
        <div className="absolute w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin">
          loading...
        </div>
        <div className="absolute w-24 h-24 border-4 border-blue-300 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
