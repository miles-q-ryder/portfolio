import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import SideNav from '@/app/ui/sidenav';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'M.Q. Ryder',
	description: 'Generated by create next app',
	// manifest: '/site.webmanifest',
	// icons: {
	// 	icon: [
	// 		{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
	// 		{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
	// 	],
	// 	apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
	// },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<div className='flex h-screen flex-col lg:flex-row overflow-hidden bg-cyan-50'>
					<div className='w-full flex-none lg:w-64'>
						<SideNav />
					</div>
					<div className='flex-grow overflow-y-auto'>{children}</div>
				</div>
			</body>
		</html>
	);
}
