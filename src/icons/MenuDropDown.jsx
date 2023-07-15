export default function MenuDropDown({ onClick }) {
  return (
    <svg
      onClick={onClick}
      className="text-3xl text-gray-100 cursor-pointer md:hidden"
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      version="1.1"
      viewBox="0 0 22 16"
      height="auto"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 3h14v3h-14v-3zM0 7h14v3h-14v-3zM0 11h14v3h-14v-3z"></path>
      <path d="M15.5 7l3 3 3-3z"></path>
    </svg>
  );
}
