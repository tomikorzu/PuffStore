import ThemeProvider from "./ThemeProvider.provider";
import HydrationBoundary from "./HydrationBoundary";
import LayoutProvider from "./LayoutProvider.provider";
import AuthProvider from "./AuthProvider.provider";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <HydrationBoundary>
        <AuthProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </AuthProvider>
      </HydrationBoundary>
    </ThemeProvider>
  );
}
