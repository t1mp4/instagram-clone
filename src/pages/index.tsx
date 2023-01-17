import InstagramTextLogo from '../components/icons/InstagramTextLogo';
import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <main className="mx-auto flex min-h-screen w-[min(75%,20rem)] flex-col items-center justify-center">
      <InstagramTextLogo />

      <button className="mt-8 w-full rounded-lg bg-brand-secondary p-2 font-medium text-accent-primary hover:bg-brand-secondary/90">
        Log in with Google
      </button>

      <div className="my-4 grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="h-[0.0625rem] bg-accent-tertiary/50"></div>
        <span className="text-sm font-medium uppercase text-accent-tertiary">
          Or
        </span>
        <div className="h-[0.0625rem] bg-accent-tertiary/50"></div>
      </div>

      <button className="w-full rounded-lg bg-brand-secondary p-2 font-medium text-accent-primary hover:bg-brand-secondary/90">
        Log in with demo account
      </button>
    </main>
  );
};

export default Index;
