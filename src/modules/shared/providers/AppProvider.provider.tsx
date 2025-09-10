import ThemeProvider from "./ThemeProvider.provider";
import HydrationBoundary from "./HydrationBoundary";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <HydrationBoundary>{children}</HydrationBoundary>
    </ThemeProvider>
  );
}
