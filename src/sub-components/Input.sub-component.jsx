import SVGIcon from "./SVGIcon.sub-component";
const Input = (props) => {
  const { label, labelFor, type, id, placeholder, svg } = props;
  return (
    <>
      <label
        for={labelFor}
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <SVGIcon name={svg} />
        </div>
        <input
          type={type}
          id={id}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
