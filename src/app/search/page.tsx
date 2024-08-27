type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

const Search: React.FC<Props> = ({ value, onChange, onSubmit }) => {
  return (
    <div className="flex justify-center items-center mt-28">
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg">
        <form onSubmit={onSubmit} className="flex">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={value}
            onChange={onChange}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
