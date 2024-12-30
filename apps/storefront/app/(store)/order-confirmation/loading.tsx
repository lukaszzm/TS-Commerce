import { Skeleton } from "@workspace/ui/components/skeleton";

export default function OrderConfirmationLoading() {
  return (
    <>
      <Skeleton className="h-10 w-96" />
      <Skeleton className="h-8 w-96" />
      <Skeleton className="h-12 w-36 mx-auto" />
    </>
  );
}
