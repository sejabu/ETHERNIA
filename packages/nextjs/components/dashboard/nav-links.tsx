'use client';

import {
  UserGroupIcon,
  HomeIcon,
  HandRaisedIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  TrashIcon,
  UserIcon,
  UserCircleIcon,
  TableCellsIcon,
  ArrowDownOnSquareIcon,
  WindowIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';




// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dashboard',
    href: '/dashboard',
    icon: WindowIcon,
  },
  {
    name: 'Create Will',
    href: '/dashboard/createwill',
    icon: DocumentTextIcon,
  },
  { name: 'I´m Alive!',
    href: '/dashboard/lifeproof',
    icon: HandRaisedIcon,
  },
  { name: 'Succesors',
    href: '/dashboard/successors',
    icon: UserGroupIcon
  },
  { name: 'Assets',
    href: '/dashboard/cryptoassets',
    icon: CurrencyDollarIcon
  },
  { name: 'Delete Will',
    href: '/dashboard/deletewill',
    icon: TrashIcon
  },
  { name: 'Claim Will',
    href: '/dashboard/claimwill',
    icon: ArrowDownOnSquareIcon
  },
  { name: 'User info',
    href: '/dashboard/useraccount',
    icon: UserCircleIcon
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
