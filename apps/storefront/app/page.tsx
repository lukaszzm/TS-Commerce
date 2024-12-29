import { getStatus } from "@/data/get-status";
import { Button } from "@workspace/ui/components/button";

export default async function Page() {
  const status = await getStatus();

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello from TS-Commerce</h1>
        <p className="text-center">
          Status from API:{" "}
          <span className="font-bold">{status.ok ? "OK" : "ERROR"}</span>
        </p>
        <Button size="sm">Click me</Button>
      </div>
    </div>
  );
}
