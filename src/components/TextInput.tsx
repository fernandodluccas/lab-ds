import { Slot } from '@radix-ui/react-slot';
import { Children, InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="py-4 px-3 h-12 bg-gray-900 rounded w-full focus-within:ring-2 ring-amaranth-300 flex items-center gap-3">
      {children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

TextInputIcon.displayName = 'TextInput.Icon';

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent outline-none flex-1 text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />
  );
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
};