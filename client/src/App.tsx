import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import { useBrowserLocation } from "wouter/use-browser-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

// GitHub Pages 배포 시 /personal-website/ base path를 Wouter에 알려줌
const base = import.meta.env.BASE_URL.replace(/\/$/, ""); // e.g. "/personal-website"

function Router() {
  const [location, navigate] = useBrowserLocation();
  // base 경로를 제거한 상대 경로로 라우팅
  const strippedLocation = location.startsWith(base)
    ? location.slice(base.length) || "/"
    : location;

  return (
    <Switch location={strippedLocation}>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
