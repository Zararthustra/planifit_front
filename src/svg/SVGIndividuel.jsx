export const SVGIndividuel = ({ selected }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 57.8125C61.2183 57.8125 70.3125 48.7183 70.3125 37.5C70.3125 26.2817 61.2183 17.1875 50 17.1875C38.7817 17.1875 29.6875 26.2817 29.6875 37.5C29.6875 48.7183 38.7817 57.8125 50 57.8125Z"
      stroke={selected ? "white" : "var(--dark-text)"}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.1875 89.0625C17.1875 73.4375 29.6875 57.8125 50 57.8125C70.3125 57.8125 82.8125 73.4375 82.8125 89.0625"
      stroke={selected ? "white" : "var(--dark-text)"}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
