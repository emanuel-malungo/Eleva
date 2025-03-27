import { Text, View, TouchableOpacity, ImageBackground, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="light" backgroundColor="rgba(30, 58, 138, 0.3)" />
      <ImageBackground
        source={require("../assets/img/welcome-bg.jpg")}
        className="flex-1 justify-between"
      >
        <LinearGradient
          colors={['rgba(30, 58, 138, 0.3)', 'rgba(139, 92, 246, 0.7)']}
          className="absolute inset-0"
        />

        <View className="items-center pt-10">
          <Image
            source={require("../assets/img/logo.png")}
            className="w-28 h-28"
          />
        </View>

        <View className="px-6 items-center">
          <Text className="text-white text-4xl font-bold text-center mb-2">
            Inspire
          </Text>
          <Text className="text-white text-lg text-center mb-8">
            Transforme seu dia com frases motivacionais
          </Text>

          <View className="bg-white/20 p-6 rounded-xl mb-8">
            <Text className="text-white text-xl italic text-center">
              "O sucesso nasce do querer, da determinação e persistência."
            </Text>
          </View>
        </View>

        <View className="px-6 pb-12">
          <TouchableOpacity className="bg-accent rounded-full py-4 mb-4" onPress={() => router.push("/(dashboard)/Home")}>
            <Text className="text-primary font-bold text-center text-lg">
              Começar agora
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white/10 rounded-full py-4 mb-6" onPress={() => router.push("/(auth)/register")}>
            <Text className="text-white font-bold text-center text-lg">
              Criar um conta
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}