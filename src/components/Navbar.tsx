import { authOptions } from '@/lib/auth';
import { Icons } from './Icons';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { buttonVariants } from './ui/Button';
// import { UserAccountNav } from './UserAccountNav';

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* logo */}
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-12 w-12 sm:h-10 sm:w-10" />
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Bargain Finder NZ
          </p>
        </Link>

        {/* actions */}
        {session?.user ? (
          <p>You are login in {session.user.email}</p>
        ) : (
          // <UserAccountNav user={session.user} />
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
