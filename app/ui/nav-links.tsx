'use client';

import {
	ChatBubbleLeftEllipsisIcon,
	RectangleStackIcon,
	UserCircleIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
	// { name: 'Home', href: '/', icon: HomeIcon },
	{ name: 'About Me', href: '#aboutme', icon: UserCircleIcon },
	{ name: 'Projects', href: '#projects', icon: RectangleStackIcon },
	{ name: 'Contact', href: '#contact', icon: ChatBubbleLeftEllipsisIcon },
];

export default function NavLinks() {
	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<a
						key={link.name}
						href={link.href}
						className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-cyan-100 p-3 text-sm font-medium hover:bg-cyan-200 hover:text-cyan-800 lg:flex-none lg:justify-start md:p-2 md:px-3'>
						<LinkIcon className='w-6' />
						<p className='hidden md:block'>{link.name}</p>
					</a>
				);
			})}
		</>
	);
}
