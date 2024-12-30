import { Skeleton } from "@workspace/ui/components/skeleton";

export default function ProductLoading() {
  return (
    <>
      <Skeleton className="w-44 h-10" />
      <div className="grid md:grid-cols-2 gap-8">
        <Skeleton className="w-[600px] h-[400px]" />
        <div className="flex-1 space-y-6">
          <Skeleton className="w-44 h-12" />
          <Skeleton className="w-12 h-10" />
          <Skeleton className="w-56 h-8" />
          <Skeleton className="w-24 h-10" />
        </div>
      </div>
    </>
  );
}
