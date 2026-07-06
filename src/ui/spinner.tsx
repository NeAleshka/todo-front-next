export const Spinner = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};
