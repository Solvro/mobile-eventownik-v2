import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

export function HomePage() {
  return <div>Hello from eventownik</div>;
}
