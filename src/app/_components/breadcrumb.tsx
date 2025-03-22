"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm text-gray-500 py-10">
      <ol className="flex space-x-2">
        <li className="flex items-center">
          <Link
            href="/"
            className="text-blue-700 hover:underline font-semibold"
          >
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center">
              <span className="mx-1">/</span>
              {isLast ? (
                <span className="text-gray-700">{value}</span>
              ) : (
                <Link
                  href={to}
                  className="text-blue-700 hover:underline font-semibold"
                >
                  {value}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
