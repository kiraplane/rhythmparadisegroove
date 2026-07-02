import { CalendarDays } from 'lucide-react';

export function LastUpdated({ date }: { date: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-[#201736]/15 bg-white px-3 py-2 font-medium text-[#5F5378] text-xs">
      <CalendarDays className="size-4 text-[#F24C7C]" />
      Last checked {date}
    </div>
  );
}
