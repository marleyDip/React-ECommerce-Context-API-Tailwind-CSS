const getPages = (current, total) => {
  const pages = [];

  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, "...", total);
    } else if (current >= total - 2) {
      pages.push(1, "...", total - 2, total - 1, total);
    } else {
      pages.push(1, "...", current - 1, current, current + 1, "...", total);
    }
  }

  return pages;
};

const Pagination = ({ page, dynamicPage, pageHandler }) => {
  return (
    <div className="mt-10 space-x-4">
      <button
        disabled={page === 1}
        className={`${
          page === 1
            ? "bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-blue-500 hover:to-emerald-500"
            : "bg-gradient-to-br from-emerald-600 to-blue-600 hover:from-blue-600 hover:to-emerald-600"
        } text-white px-3 py-1.5 rounded-md shadow-md hover:rounded-lg hover:shadow-lg cursor-pointer`}
        onClick={() => pageHandler(page - 1)}
      >
        Prev
      </button>

      {getPages(page, dynamicPage)?.map((item, index) => {
        return (
          <span
            key={index}
            onClick={() => typeof item === "number" && pageHandler(item)}
            className={`cursor-pointer ${
              item === page
                ? "font-bold text-red-600"
                : "font-medium text-black"
            }`}
          >
            {item}
          </span>
        );
      })}

      <button
        disabled={page === dynamicPage}
        className={`${
          page === dynamicPage
            ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500"
            : "bg-gradient-to-br from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600"
        } text-white px-3 py-1.5 rounded-md shadow-md hover:rounded-lg hover:shadow-lg cursor-pointer`}
        onClick={() => pageHandler(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
