import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";


export default function CreateScreen() {
    // Estados para gerenciar os dados do formulário
    const [image, setImage] = useState(null);
    const [quote, setQuote] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isPublic, setIsPublic] = useState(true);
    const [allowComments, setAllowComments] = useState(true);
    const [allowLikes, setAllowLikes] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Categorias disponíveis
    const categories = [
        { id: "1", name: "Motivação", icon: "lightbulb", type: "FontAwesome5", color: "#FFD700" },
        { id: "2", name: "Sucesso", icon: "trophy", type: "FontAwesome5", color: "#FF6B6B" },
        { id: "3", name: "Foco", icon: "target", type: "Feather", color: "#7DCFB6" },
        { id: "4", name: "Superação", icon: "trending-up", type: "Feather", color: "#4ECDC4" },
        { id: "5", name: "Criatividade", icon: "feather", type: "Feather", color: "#6A57D5" },
    ];

    // Função para selecionar imagem da galeria
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    // Função para tirar foto com a câmera
    const takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status === "granted") {
            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [16, 9],
                quality: 0.8,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        }
    };

    // Função para renderizar o ícone correto baseado no tipo
    const renderCategoryIcon = (category) => {
        if (category.type === "FontAwesome5") {
            return (
                <FontAwesome5
                    name={category.icon}
                    size={16}
                    color={selectedCategory === category.id ? "white" : category.color}
                />
            );
        } else {
            return (
                <Feather
                    name={category.icon}
                    size={16}
                    color={selectedCategory === category.id ? "white" : category.color}
                />
            );
        }
    };

    // Função para publicar a frase
    const publishQuote = () => {
        // Validação básica
        if (!quote.trim()) {
            // Em um app real, você mostraria um alerta ou toast
            console.log("Por favor, escreva uma frase antes de publicar");
            return;
        }

        setIsSubmitting(true);

        // Simulando o envio para o servidor
        setTimeout(() => {
            setIsSubmitting(false);
            // Em um app real, você navegaria de volta após o sucesso
            router.back();
        }, 1500);
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="flex-1"
            >
                {/* 1. Cabeçalho Fixo */}
                <View className="flex-row items-center justify-between px-6 py-4 border-b border-gray-100">
                    <TouchableOpacity onPress={() => router.back()}>
                        <Feather name="x-circle" size={24} color="#6A57D5" />
                    </TouchableOpacity>

                    <Text className="text-2xl font-bold text-[#2D2A32] text-center">Nova Frase</Text>

                    <TouchableOpacity onPress={publishQuote} disabled={isSubmitting}>
                        <Feather
                            name="check-circle"
                            size={24}
                            color={isSubmitting ? "#A0A0A0" : "#FFD700"}
                        />
                    </TouchableOpacity>
                </View>

                <ScrollView className="flex-1">
                    {/* 2. Upload de Imagem Inspiradora */}
                    <View className="px-6 py-4">
                        <TouchableOpacity
                            className="w-full h-48 bg-[#F4F4F4] rounded-xl items-center justify-center overflow-hidden"
                            onPress={pickImage}
                        >
                            {image ? (
                                <>
                                    <Image
                                        source={{ uri: image }}
                                        className="absolute w-full h-full"
                                        resizeMode="cover"
                                    />
                                    <View className="absolute w-full h-full bg-black/20" />
                                    <View className="bg-white/70 p-2 rounded-full">
                                        <Feather name="edit-2" size={24} color="#6A57D5" />
                                    </View>
                                </>
                            ) : (
                                <View className="items-center">
                                    <Feather name="camera" size={40} color="#A0A0A0" />
                                    <Text className="text-[#A0A0A0] mt-2 text-center">
                                        Adicione uma imagem inspiradora
                                    </Text>
                                    <View className="flex-row mt-3">
                                        <TouchableOpacity
                                            className="bg-[#6A57D5] px-4 py-2 rounded-full mr-3 flex-row items-center"
                                            onPress={pickImage}
                                        >
                                            <Feather name="image" size={16} color="white" className="mr-1" />
                                            <Text className="text-white">Galeria</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            className="bg-[#6A57D5] px-4 py-2 rounded-full flex-row items-center"
                                            onPress={takePhoto}
                                        >
                                            <Feather name="camera" size={16} color="white" className="mr-1" />
                                            <Text className="text-white">Câmera</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>

                    {/* 3. Campo de Texto para a Frase */}
                    <View className="px-6 py-4">
                        <TextInput
                            className="text-xl text-[#2D2A32] text-center min-h-[100px] bg-[#F9F9F9] p-4 rounded-xl"
                            placeholder="Escreva sua frase inspiradora..."
                            placeholderTextColor="#A0A0A0"
                            multiline
                            textAlignVertical="center"
                            value={quote}
                            onChangeText={setQuote}
                        />
                    </View>

                    {/* 4. Seleção de Categoria */}
                    <View className="px-6 py-4">
                        <Text className="text-lg font-semibold text-[#2D2A32] mb-3">Categoria</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-2">
                            {categories.map((category) => (
                                <TouchableOpacity
                                    key={category.id}
                                    className={`flex-row items-center px-4 py-2 rounded-full mr-3 ${selectedCategory === category.id
                                            ? `bg-[${category.color}]`
                                            : 'bg-white border border-gray-200'
                                        }`}
                                    style={{
                                        backgroundColor: selectedCategory === category.id ? category.color : 'white'
                                    }}
                                    onPress={() => setSelectedCategory(category.id)}
                                >
                                    {renderCategoryIcon(category)}
                                    <Text
                                        className={`ml-2 font-medium ${selectedCategory === category.id ? 'text-white' : 'text-[#2D2A32]'
                                            }`}
                                    >
                                        {category.name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>

                    {/* 5. Opções de Privacidade e Interação */}
                    <View className="px-6 py-4 border-t border-gray-100">
                        <Text className="text-lg font-semibold text-[#2D2A32] mb-3">Configurações</Text>

                        <View className="bg-[#F9F9F9] rounded-xl p-4">
                            {/* Opção de Privacidade */}
                            <TouchableOpacity
                                className="flex-row items-center justify-between py-3 border-b border-gray-200"
                                onPress={() => setIsPublic(!isPublic)}
                            >
                                <View className="flex-row items-center">
                                    <Feather name={isPublic ? "eye" : "lock"} size={20} color="#6A57D5" />
                                    <Text className="ml-3 text-[#2D2A32]">
                                        {isPublic ? "Público" : "Privado"}
                                    </Text>
                                </View>
                                <View
                                    className={`w-12 h-6 rounded-full ${isPublic ? 'bg-[#6A57D5]' : 'bg-gray-300'} 
                  justify-center px-0.5`}
                                >
                                    <View
                                        className={`w-5 h-5 rounded-full bg-white ${isPublic ? 'ml-6' : 'ml-0'
                                            }`}
                                    />
                                </View>
                            </TouchableOpacity>

                            {/* Opção de Comentários */}
                            <TouchableOpacity
                                className="flex-row items-center justify-between py-3 border-b border-gray-200"
                                onPress={() => setAllowComments(!allowComments)}
                            >
                                <View className="flex-row items-center">
                                    <Feather name="message-circle" size={20} color="#4ECDC4" />
                                    <Text className="ml-3 text-[#2D2A32]">Permitir comentários</Text>
                                </View>
                                <View
                                    className={`w-12 h-6 rounded-full ${allowComments ? 'bg-[#4ECDC4]' : 'bg-gray-300'
                                        } justify-center px-0.5`}
                                >
                                    <View
                                        className={`w-5 h-5 rounded-full bg-white ${allowComments ? 'ml-6' : 'ml-0'
                                            }`}
                                    />
                                </View>
                            </TouchableOpacity>

                            {/* Opção de Curtidas */}
                            <TouchableOpacity
                                className="flex-row items-center justify-between py-3"
                                onPress={() => setAllowLikes(!allowLikes)}
                            >
                                <View className="flex-row items-center">
                                    <Feather name="heart" size={20} color="#FF6B6B" />
                                    <Text className="ml-3 text-[#2D2A32]">Permitir curtidas</Text>
                                </View>
                                <View
                                    className={`w-12 h-6 rounded-full ${allowLikes ? 'bg-[#FF6B6B]' : 'bg-gray-300'
                                        } justify-center px-0.5`}
                                >
                                    <View
                                        className={`w-5 h-5 rounded-full bg-white ${allowLikes ? 'ml-6' : 'ml-0'
                                            }`}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

                {/* 6. Botão de Publicação */}
                <View className="px-6 py-4 border-t border-gray-100">
                    <TouchableOpacity
                        className={`bg-[#6A57D5] py-3 rounded-lg shadow-lg flex-row items-center justify-center ${isSubmitting ? 'opacity-70' : 'opacity-100'
                            }`}
                        onPress={publishQuote}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <Text className="text-white text-lg font-bold">Publicando...</Text>
                        ) : (
                            <>
                                <Feather name="send" size={20} color="white" />
                                <Text className="text-white text-lg font-bold ml-2">Publicar Frase</Text>
                            </>
                        )}
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}