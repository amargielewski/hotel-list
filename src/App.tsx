import { FilterBox } from './components/FilterBox/FilterBox';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { HotelPage } from './pages/HotelPage';
import { StateContextProvider } from './providers/state';
import { ThemeProvider } from './providers/theme';
function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <StateContextProvider>
          <FilterBox />
          <HotelPage />
        </StateContextProvider>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
