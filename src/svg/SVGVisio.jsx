export const SVGVisio = ({ selected }) => (
  <svg
    width="110"
    height="100"
    viewBox="0 0 150 114"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 71.8125C111.218 71.8125 120.312 62.7183 120.312 51.5C120.312 40.2817 111.218 31.1875 100 31.1875C88.7817 31.1875 79.6875 40.2817 79.6875 51.5C79.6875 62.7183 88.7817 71.8125 100 71.8125Z"
      stroke={selected ? "white" : "var(--dark-text)"}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M67.1875 103.062C67.1875 87.4375 79.6875 71.8125 100 71.8125C120.312 71.8125 132.812 87.4375 132.812 103.062"
      stroke={selected ? "white" : "var(--dark-text)"}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M68 92H9C5.13401 92 2 88.866 2 85V9C2 5.13401 5.13401 2 9 2H133C136.866 2 140 5.13401 140 9V85C140 88.866 136.866 92 133 92H131.5"
      stroke={selected ? "white" : "var(--dark-text)"}
      strokeWidth="4"
      strokeLinejoin="round"
    />
  </svg>
);
