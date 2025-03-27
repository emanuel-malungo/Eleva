import { Text, View, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar style="dark" />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="flex-1"
            >
                <View className="px-6 pt-8 flex-1 justify-between">
                    <TouchableOpacity
                        className="w-10 h-10 items-center justify-center rounded-full bg-lightGray"
                        onPress={() => router.back()}
                    >
                        <Ionicons name="arrow-back" size={24} color="#1E3A8A" />
                    </TouchableOpacity>

                    {/* Login Form */}
                    <View className="flex-1 justify-center">
                        <Text className="text-3xl font-bold text-primary mb-2">Bem-vindo de volta</Text>
                        <Text className="text-darkGray mb-8">Entre para continuar sua jornada motivacional</Text>

                        {/* Email Input */}
                        <View className="mb-4 relative">
                            <Text className="text-darkGray mb-2 text-sm">Email</Text>
                            <View className="flex-row items-center border border-lightGray rounded-lg px-4 py-3">
                                <Ionicons name="mail-outline" size={20} color="#4B5563" className="mr-2" />
                                <TextInput
                                    className="flex-1 text-darkGray ml-2"
                                    placeholder="Seu email"
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>

                        {/* Password Input */}
                        <View className="mb-6 relative">
                            <Text className="text-darkGray mb-2 text-sm">Senha</Text>
                            <View className="flex-row items-center border border-lightGray rounded-lg px-4 py-3">
                                <Ionicons name="lock-closed-outline" size={20} color="#4B5563" className="mr-2" />
                                <TextInput
                                    className="flex-1 text-darkGray ml-2"
                                    placeholder="Sua senha"
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry={!passwordVisible}
                                />
                                <TouchableOpacity onPress={togglePasswordVisibility}>
                                    <Ionicons
                                        name={passwordVisible ? "eye-outline" : "eye-off-outline"}
                                        size={20}
                                        color="#4B5563"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Forgot Password */}
                        <TouchableOpacity className="self-end mb-6">
                            <Text className="text-secondary">Esqueceu a senha?</Text>
                        </TouchableOpacity>

                        {/* Login Button */}
                        <TouchableOpacity className="bg-primary rounded-full py-4 mb-4">
                            <Text className="text-white font-bold text-center text-lg">
                                Entrar
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Footer */}
                    <View className="flex-row justify-center items-center mb-8">
                        <Text className="text-darkGray">Não tem uma conta? </Text>
                        <TouchableOpacity onPress={() => router.replace('/(auth)/register')}>
                            <Text className="text-secondary font-bold">Registre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}