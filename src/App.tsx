import { HotelListBox } from './components/HotelListBox/HotelListBox';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { ThemeProvider } from './providers/theme';

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <HotelListBox></HotelListBox>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
