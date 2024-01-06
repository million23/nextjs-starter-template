import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";

const HomePage = () => {
	const { theme, setTheme } = useTheme();

	return (
		<main className="min-h-screen flex flex-col gap-2 justify-center items-center text-center px-5 lg:px-0">
			<h1>
				Welcome to{" "}
				<code className="text-pink-400 dark:text-pink-500">
					@million23/nextjs
				</code>{" "}
				template
			</h1>
			<p className="mb-10">
				This is a <Link href="https://nextjs.org/">Next.js</Link>{" "}
				template with{" "}
				<Link
					className="underline underline-offset-4 hover:text-pink-500 transition-all"
					href="https://www.typescriptlang.org/"
				>
					TypeScript
				</Link>
				,{" "}
				<Link
					className="underline underline-offset-4 hover:text-pink-500 transition-all"
					href="https://ui.shadcn.com/"
				>
					ShadcnUI Components
				</Link>
				,{" "}
				<Link
					className="underline underline-offset-4 hover:text-pink-500 transition-all"
					href="https://tailwindcss.com/"
				>
					Tailwind
				</Link>
				,{" "}
				<Link
					className="underline underline-offset-4 hover:text-pink-500 transition-all"
					href="https://www.framer.com/motion/"
				>
					Framer Motion
				</Link>
				, and{" "}
				<Link
					className="underline underline-offset-4 hover:text-pink-500 transition-all"
					href="https://github.com/pacocoursey/next-themes"
				>
					Next Themes
				</Link>
				.
			</p>

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button>Select Theme</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56">
					<DropdownMenuLabel>Theme</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuRadioGroup
						value={theme}
						onValueChange={setTheme}
					>
						<DropdownMenuRadioItem value="system">
							System
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="dark">
							Dark
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="light">
							Light
						</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</main>
	);
};

export default HomePage;
