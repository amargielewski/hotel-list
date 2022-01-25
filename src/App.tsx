import { HotelListBox } from './components/HotelListBox/HotelListBox';
import { HotelListImage } from './components/HotelListImage/HotelListImage';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { ThemeProvider } from './providers/theme';

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <HotelListBox />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
