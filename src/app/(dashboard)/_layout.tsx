import { Tabs } from "expo-router";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "white",
                    height: 60,
                    paddingBottom: 8,
                    paddingTop: 8,
                    borderTopWidth: 1,
                    borderTopColor: "#F0F0F0",
                    elevation: 8,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 0.05,
                    shadowRadius: 3,
                },
                tabBarActiveTintColor: "#6A57D5",
                tabBarInactiveTintColor: "#A0A0A0",
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "500",
                },
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="Home"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    ),
                    tabBarLabel: "Início",
                }}
            />

            <Tabs.Screen
                name="Explore"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="compass" size={size} color={color} />
                    ),
                    tabBarLabel: "Explorar",
                }}
            />

            <Tabs.Screen
                name="Create"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View className="bg-[#6A57D5] w-12 h-12 rounded-full items-center justify-center -mt-4">
                            <Feather name="plus" size={24} color="white" />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text className={`text-xs ${focused ? "text-[#6A57D5]" : "text-[#A0A0A0]"} -mt-1`}>
                            Criar
                        </Text>
                    ),
                }}
            />

            <Tabs.Screen
                name="Saved"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="bookmark" size={size} color={color} />
                    ),
                    tabBarLabel: "Salvos",
                }}
            />

            <Tabs.Screen
                name="Profile"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" size={size} color={color} />
                    ),
                    tabBarLabel: "Perfil",
                }}
            />
        </Tabs>
    );
}