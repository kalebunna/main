import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const router = useRouter();
  const path = usePathname();
  const onCLickUrl = (url: string) => {
    router.push(url);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link ${path == "/" ? "active" : ""}`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${path == "/dashboard" ? "active" : ""}`}
                aria-current="page"
                href="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${path == "/setting" ? "active" : ""}`}
                aria-current="page"
                onClick={() => onCLickUrl("/setting")}
              >
                Setting
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${path == "/calculator" ? "active" : ""}`}
                aria-current="page"
                onClick={() => onCLickUrl("/calculator")}
              >
                Calculator
              </a>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${path == "/user" ? "active" : ""}`}
                aria-current="page"
                href="/user"
              >
                User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
