import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { CalendarCheck, FilePen, History } from 'lucide-react-native';
import React from 'react';

import { useColorScheme } from '@/components/useColorScheme';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarActiveBackgroundColor: "#c4c5f3ff",
        tabBarInactiveBackgroundColor: "#0B0C6C",
        tabBarInactiveTintColor: "#c4c5f3ff",
        headerShown: false,
        // // Disable the static render of the header on web
        // // to prevent a hydration error in React Navigation v6.
        // headerShown: useClientOnlyValue(false, true),
      }}>
              <Tabs.Screen
        name="(historyWrite)/history"
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => <History color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Daily',
          tabBarIcon: ({ color }) => <CalendarCheck color={color} />,
        }}
      />
            <Tabs.Screen
        name="(prompting)/prompts"
        options={{
          title: 'Prompts',
          tabBarIcon: ({ color }) => <FilePen color={color} />,
        }}
      />
      <Tabs.Screen
        name="(prompting)/[prompt]"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="(historyWrite)/[writing]"
        options={{
          href: null,
        }}
      />

    </Tabs>
  );
}
