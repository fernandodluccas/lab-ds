import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={clsx(
        'py-4 px-3 bg-amaranth-500 rounded font-semibold text-white text-sm w-full hover:bg-amaranth-300 transition-colors focus:outline-none focus:ring-2'
      )}
    >
      {children}
    </Comp>
  );
}
