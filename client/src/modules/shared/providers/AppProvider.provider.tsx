import ThemeProvider from "./ThemeProvider.provider";
import HydrationBoundary from "./HydrationBoundary";
import LayoutProvider from "./LayoutProvider.provider";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <HydrationBoundary>
        <LayoutProvider>{children}</LayoutProvider>
      </HydrationBoundary>
    </ThemeProvider>
  );
}
