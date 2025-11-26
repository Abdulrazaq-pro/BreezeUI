"use client";

import {
  Image,
  TrendingUp,
  Clock,
  Target,
  Lock,
} from "lucide-react";
import { useState } from "react";

// Utility function to combine class names
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Custom Switch component
function Switch({
  checked,
  fn,
  trackDimensions,
}: {
  checked: boolean;
  fn: (checked: boolean) => void;
  trackDimensions?: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => fn(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        checked ? "bg-orange-600" : "bg-neutral-300",
        checked && "focus-visible:ring-orange-500",
        !checked && "focus-visible:ring-neutral-500",
        trackDimensions
      )}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
          checked ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  );
}

const OPTIONS = [
  {
    label: "Link Preview",
    icon: Image,
    checked: true,
  },
  {
    label: "UTM",
    icon: TrendingUp,
    checked: true,
  },
  {
    label: "Expiration",
    icon: Clock,
    checked: false,
  },
  {
    label: "Targeting",
    icon: Target,
    checked: true,
  },
  {
    label: "Password",
    icon: Lock,
    checked: true,
  },
];

export function Personalization() {
  return (
    <div
      className="size-full overflow-clip [mask-image:linear-gradient(black_70%,transparent)]"
      aria-hidden
      tabIndex={-1}
    >
      <div className="mx-3.5 flex cursor-default flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-5 shadow-[0_20px_20px_0_#00000017]">
        <h3 className="text-base font-medium">Link customization</h3>

        <div className="flex flex-col gap-2.5">
          {OPTIONS.map(({ label, icon: Icon, checked }) => (
            <div
              key={label}
              className="flex items-center justify-between gap-2 rounded-lg border border-neutral-200 p-2.5"
            >
              <div className="flex items-center gap-2 text-neutral-800">
                <Icon className="size-5" />
                <span className="text-sm font-medium">{label}</span>
              </div>
              <div>
                <DummySwitch checked={checked} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DummySwitch({ checked }: { checked: boolean }) {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <Switch
      checked={isChecked}
      fn={setIsChecked}
      trackDimensions="radix-state-checked:bg-orange-600 focus-visible:ring-orange-500"
    />
  );
}