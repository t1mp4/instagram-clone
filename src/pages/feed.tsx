import Link from 'next/link';
import InstagramTextLogo from '../components/icons/InstagramTextLogo';
import type { NextPage } from 'next';

const Feed: NextPage = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 px-6 py-3">
        <InstagramTextLogo width="8rem" />
      </div>

      <nav className="fixed bottom-0 left-0 right-0 px-6 py-3">
        <ul className="grid auto-cols-[minmax(1.5rem,2rem)] grid-flow-col items-center justify-between gap-2">
          <li>
            <Link href="/feed" className="flex items-center">
              <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path className="fill-none" d="M0 0h24v24H0z" />
                <path
                  className="fill-brand-primary"
                  d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-10-7v6h2v-6h-2z"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/explore" className="flex items-center">
              <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path className="fill-none" d="M0 0h24v24H0z" />
                <path
                  className="fill-brand-primary"
                  d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                />
              </svg>
            </Link>
          </li>
          <li>
            <button className="flex items-center">
              <span className="sr-only">Add new post</span>
              <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path className="fill-none" d="M0 0h24v24H0z" />
                <path
                  className="fill-brand-primary"
                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11H7v2h4v4h2v-4h4v-2h-4V7h-2v4z"
                />
              </svg>
            </button>
          </li>
          <li>
            <Link href="/activity" className="flex items-center">
              <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path className="fill-none" d="M0 0H24V24H0z" />
                <path
                  className="fill-brand-primary"
                  d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center">
              <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path className="fill-none" d="M0 0h24v24H0z" />
                <path
                  className="fill-brand-primary"
                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Feed;
