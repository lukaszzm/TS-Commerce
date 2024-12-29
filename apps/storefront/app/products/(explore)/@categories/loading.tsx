import { Skeleton } from "@workspace/ui/components/skeleton";

export default function CategoriesLoading() {
  return (
    <>
      <li>
        <Skeleton className="h-6 w-32" />
      </li>
      <li>
        <Skeleton className="h-6 w-28" />
      </li>
      <li>
        <Skeleton className="h-6 w-32" />
      </li>
    </>
  );
}
