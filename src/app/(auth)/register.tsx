import { Text, View, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";

export default function RegisterScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar style="dark" />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                className="flex-1"
            >

                <ScrollView className="flex-1">
                    <View className="px-6 pt-8">
                        {/* Header with back button */}
                        <TouchableOpacity
                            className="w-10 h-10 items-center justify-center rounded-full bg-lightGray mb-8"
                            onPress={() => router.back()}
                        >
                            <Ionicons name="arrow-back" size={24} color="#1E3A8A" />
                        </TouchableOpacity>

                        {/* Registration Form */}
                        <Text className="text-3xl font-bold text-primary mb-2">Crie sua conta</Text>
                        <Text className="text-darkGray mb-8">Comece sua jornada de motivação diária</Text>

                        {/* Name Input */}
                        <View className="mb-4">
                            <Text className="text-darkGray mb-2 text-sm">Nome</Text>
                            <View className="flex-row items-center border border-lightGray rounded-lg px-4 py-3">
                                <Ionicons name="person-outline" size={20} color="#4B5563" />
                                <TextInput
                                    className="flex-1 text-darkGray ml-2"
                                    placeholder="Seu nome completo"
                                    value={name}
                                    onChangeText={setName}
                                />
                            </View>
                        </View>

                        {/* Email Input */}
                        <View className="mb-4">
                            <Text className="text-darkGray mb-2 text-sm">Email</Text>
                            <View className="flex-row items-center border border-lightGray rounded-lg px-4 py-3">
                                <Ionicons name="mail-outline" size={20} color="#4B5563" />
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
                        <View className="mb-4">
                            <Text className="text-darkGray mb-2 text-sm">Senha</Text>
                            <View className="flex-row items-center border border-lightGray rounded-lg px-4 py-3">
                                <Ionicons name="lock-closed-outline" size={20} color="#4B5563" />
                                <TextInput
                                    className="flex-1 text-darkGray ml-2"
                                    placeholder="Crie uma senha"
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry={!passwordVisible}
                                />
                                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                                    <Ionicons
                                        name={passwordVisible ? "eye-outline" : "eye-off-outline"}
                                        size={20}
                                        color="#4B5563"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Confirm Password Input */}
                        <View className="mb-8">
                            <Text className="text-darkGray mb-2 text-sm">Confirmar Senha</Text>
                            <View className="flex-row items-center border border-lightGray rounded-lg px-4 py-3">
                                <Ionicons name="lock-closed-outline" size={20} color="#4B5563" />
                                <TextInput
                                    className="flex-1 text-darkGray ml-2"
                                    placeholder="Confirme sua senha"
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    secureTextEntry={!confirmPasswordVisible}
                                />
                                <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                                    <Ionicons
                                        name={confirmPasswordVisible ? "eye-outline" : "eye-off-outline"}
                                        size={20}
                                        color="#4B5563"
                                    />
                                </TouchableOpacity>u
                            </View>
                        </View>

                        {/* Register Button */}
                        <TouchableOpacity className="bg-primary rounded-full py-4 mb-4">
                            <Text className="text-white font-bold text-center text-lg">
                                Registrar
                            </Text>
                        </TouchableOpacity>

                        {/* Terms and Conditions */}
                        <Text className="text-center text-darkGray text-sm mb-8">
                            Ao se registrar, você concorda com nossos{" "}
                            <Text className="text-secondary">Termos de Serviço</Text> e{" "}
                            <Text className="text-secondary">Política de Privacidade</Text>
                        </Text>

                        {/* Footer */}
                        <View className="flex-row justify-center items-center mb-8">
                            <Text className="text-darkGray">Já tem uma conta? </Text>
                            <TouchableOpacity onPress={() => router.navigate('/(auth)/login')}>
                                <Text className="text-secondary font-bold">Entrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}