import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

// Pages
import Home from '@/pages/home';
import History from '@/pages/history';
import Places from '@/pages/places';
import Visit from '@/pages/visit';
import Food from '@/pages/food';
import Culture from '@/pages/culture';

// Components
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ScrollProgress } from '@/components/scroll-progress';
import { BackToTop } from '@/components/back-to-top';

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      <div className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/history" component={History} />
          <Route path="/places" component={Places} />
          <Route path="/food" component={Food} />
          <Route path="/culture" component={Culture} />
          <Route path="/visit" component={Visit} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
