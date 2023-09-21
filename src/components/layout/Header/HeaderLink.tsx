interface Props {
  href: string;
  label: string;
  active: boolean;
}

export function HeaderLink({ href, label, active }: Props) {
  let className = "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ef484d] md:dark:hover:text-[#ef484d] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  if (active) {
    className = "text-white bg-[#ef484d] hover:bg-red-800";
  }

  return (
    <a
        href={href}
        className={`block py-2 px-4 rounded-md ${className}`}
        aria-current="page"
    >
        {label}
    </a>
  );
}