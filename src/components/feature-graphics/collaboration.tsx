import { User, Users, UserCheck, UserCog, UserPlus, Shield } from "lucide-react";

// Utility function to combine class names
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function Collaboration() {
  // Array of lucide user/collaboration icons
  const icons = [
    User, Users, UserCheck, UserCog, UserPlus, Shield,
    User, Users, UserCheck, UserCog, UserPlus, Shield,
    User, Users, UserCheck, UserCog, UserPlus, Shield,
    User, Users, UserCheck, UserCog, UserPlus, Shield,
    User, Users, UserCheck, UserCog, UserPlus, Shield,
    User, Users, UserCheck, UserCog, UserPlus, Shield,
  ];

  // Colors for variety
  const colors = [
    "text-blue-600",
    "text-green-600",
    "text-purple-600",
    "text-pink-600",
    "text-indigo-600",
    "text-teal-600",
  ];

  return (
    <div
      className="size-full pt-5 [mask-image:linear-gradient(black_50%,transparent)]"
      aria-hidden
    >
      <div className="relative size-full rounded-t-2xl border-x-2 border-t-2 border-orange-600 bg-white/70">
        <div className="absolute -top-px left-1/2 flex h-7 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_2px_4px_#EA590D80]">
          <BadgeCap />
          <div className="-mx-px flex h-full items-center bg-orange-600 px-2 font-mono text-sm tracking-wide text-white">
            SAML SSO
          </div>
          <BadgeCap className="-scale-x-100" />
        </div>
        <div className="grid grid-cols-6 gap-4 p-8">
          {icons.map((Icon, idx) => (
            <div
              key={idx}
              className={cn(
                "aspect-square rounded-lg bg-neutral-100 transition-transform hover:scale-110 sm:rounded-xl flex items-center justify-center",
                colors[idx % colors.length]
              )}
            >
              <Icon className="size-8" strokeWidth={1.5} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BadgeCap({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="30"
      fill="none"
      viewBox="0 0 28 30"
      className={cn("h-full text-orange-600", className)}
    >
      <path
        fill="currentColor"
        d="M25.658.14h5.337v29.572h-5.337a9.24 9.24 0 0 1-6.626-2.8l-4.327-4.45A26.2 26.2 0 0 0 .5 14.926a26.2 26.2 0 0 0 14.205-7.535l4.327-4.451a9.24 9.24 0 0 1 6.626-2.8"
      />
    </svg>
  );
}