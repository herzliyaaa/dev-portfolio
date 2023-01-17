const getViewBox = (name) => {
  switch (name) {
    case "message":
      return "0 0 20 20";
    case "person":
      return "0 0 24 24";
    case "email":
      return "0 0 24 24";
    default:
      return "";
  }
};

const getPath = (name) => {
  switch (name) {
    case "message":
      return (
        <>
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
        </>
      );
    case "person":
      return (
        <path d="M 12 2 C 9.800781 2 7.6875 2.804688 6.1875 4.40625 C 4.789063 5.90625 4 7.898438 4 10 L 4 10.40625 C 3 11.207031 3 12.507813 3 12.90625 C 3 14.207031 3.988281 15.289063 5.1875 15.6875 C 6.1875 19.585938 9.398438 21.90625 12 21.90625 C 14.601563 21.90625 17.8125 19.585938 18.8125 15.6875 C 20.011719 15.386719 21 14.300781 21 13 C 21 12.5 21 11.300781 20 10.5 L 20 10.09375 C 20 7.992188 19.210938 6 17.8125 4.5 C 16.3125 2.800781 14.199219 2 12 2 Z M 9 7 C 12.5 11.5 15.601563 5.894531 18 11.59375 C 18 11.59375 19.199219 11.898438 19 13 C 18.800781 14.398438 17.1875 14.09375 17.1875 14.09375 L 17 14.8125 C 16.300781 18.210938 13.601563 20 12 20 C 10.398438 20 7.699219 18.210938 7 14.8125 L 6.90625 14.09375 C 6.90625 14.09375 5.09375 14.199219 5.09375 13 C 5.09375 11.699219 6.09375 11.59375 6.09375 11.59375 L 7 12 C 7 9.898438 7.800781 7.5 9 7 Z M 9.5 11 C 8.671875 11 8 11.671875 8 12.5 C 8 13.328125 8.671875 14 9.5 14 C 10.328125 14 11 13.328125 11 12.5 C 11 11.671875 10.328125 11 9.5 11 Z M 14.5 11 C 13.671875 11 13 11.671875 13 12.5 C 13 13.328125 13.671875 14 14.5 14 C 15.328125 14 16 13.328125 16 12.5 C 16 11.671875 15.328125 11 14.5 11 Z"></path>
      );
    case "email":
      return (
        <path d="M 7 4 C 4.2504839 4 2 6.2504839 2 9 L 2 18 C 2 19.093063 2.9069372 20 4 20 L 10 20 L 20 20 C 21.105 20 22 19.105 22 18 L 22 9 C 22 6.239 19.761 4 17 4 L 7 4 z M 7 6 C 8.657 6 10 7.343 10 9 L 10 18 L 4 18 L 4 9 C 4 7.3315161 5.3315161 6 7 6 z M 6 9 L 6 11 L 8 11 L 8 9 L 6 9 z M 13 9 L 19 9 L 19 13 L 17 13 L 17 11 L 13 11 L 13 9 z"></path>
      );
    default:
      return <path></path>;
  }
};

const SVGIcon = (props) => {
  const { viewBox, name } = props;
  return (
    <svg
      aria-hidden="true"
      class="w-5 h-5 text-gray-500 dark:text-gray-400"
      fill="currentColor"
      viewBox={viewBox || getViewBox(name)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {getPath(name)}
    </svg>
  );
};

export default SVGIcon;
