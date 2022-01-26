import { FilterBox } from './components/FilterBox/FilterBox';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { HotelPage } from './pages/HotelPage';
import { ThemeProvider } from './providers/theme';
function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <FilterBox />
        <HotelPage />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
