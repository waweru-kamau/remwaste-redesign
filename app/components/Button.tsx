interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

export function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  const styles = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
    secondary: "", // add other button styles
    danger: "",
  };

  return (
    <button
      className={`border dark:border-transparent font-medium text-sm text-black dark:text-white py-2 px-4 rounded mx-4 mb-4 ${
        props.disabled
          ? "border-gray-200 bg-gray-100 opacity-50 hover:cursor-not-allowed dark:bg-gray-800 dark:opacity-50"
          : "border-gray-300 hover:bg-gray-50 hover:cursor-pointer dark:bg-gray-900 dark:hover:bg-gray-700 shadow-sm"
      } ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
