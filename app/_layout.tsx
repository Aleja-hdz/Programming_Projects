import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { GestureEventPayload, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { useColorScheme } from '@/hooks/useColorScheme';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="(ahomescreen)"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
            drawerIcon: ({ color, size }) => (
              <Entypo name="home" size={24} color="white" />
            ),
          }}
        />
        <Drawer.Screen
          name="(characters)"
          options={{
            drawerLabel: 'Characters',
            title: 'Characters',
            drawerIcon: ({ color, size }) => (
              <Entypo name="users" size={24} color="white" />
            ),
          }}
        />
        <Drawer.Screen
          name="(episodes)"
          options={{
            drawerLabel: 'Episodes',
            title: 'Episodios',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="video-collection" size={24} color="white" />
            ),
          }}
        />
        <Drawer.Screen
          name="(locations)"
          options={{
            drawerLabel: 'Locations',
            title: 'Locations',
            drawerIcon: ({ color, size }) => (
              <FontAwesome6 name="location-dot" size={24} color="white" />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
    </ThemeProvider>
  );
}
