import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    Alert,
    Pressable
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { router } from 'expo-router';

export default function ProfileScreen() {
    // Estados para gerenciar a tela
    const [activeTab, setActiveTab] = useState("posts"); // "posts" ou "saved"

    // Dados de exemplo do usuário
    const user = {
        name: "Maria Santos",
        username: "mariamotivadora",
        bio: "Compartilhando inspiração diária para ajudar você a alcançar seu potencial máximo. ✨ Escritora | Coach | Entusiasta da vida",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        stats: {
            posts: 87,
            likes: 3240,
            followers: 1250,
            following: 365
        }
    };

    // Dados de exemplo para as postagens do usuário
    const userPosts = [
        {
            id: "1",
            quote: "A persistência é o caminho do êxito.",
            category: "Motivação",
            date: "24/03/2025",
            likes: 540,
            comments: 32,
            image: "https://images.unsplash.com/photo-1539593395743-7da5ee10ff07?q=80&w=1000",
        },
        {
            id: "2",
            quote: "Acredite em você mesmo e tudo será possível.",
            category: "Superação",
            date: "20/03/2025",
            likes: 428,
            comments: 24,
            image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000",
        },
        {
            id: "3",
            quote: "Sua única limitação é aquela que você impõe em sua própria mente.",
            category: "Foco",
            date: "15/03/2025",
            likes: 376,
            comments: 18,
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000",
        },
        {
            id: "4",
            quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
            category: "Sucesso",
            date: "10/03/2025",
            likes: 312,
            comments: 15,
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000",
        },
    ];

    // Dados de exemplo para as frases salvas
    const savedPosts = [
        {
            id: "1",
            quote: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
            author: "John Lennon",
            category: "Reflexão",
            likes: 1240,
            comments: 87,
            image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000",
        },
        {
            id: "2",
            quote: "Não conte os dias, faça os dias contarem.",
            author: "Muhammad Ali",
            category: "Motivação",
            likes: 980,
            comments: 45,
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000",
        },
        {
            id: "3",
            quote: "O melhor momento para plantar uma árvore foi há 20 anos. O segundo melhor momento é agora.",
            author: "Provérbio Chinês",
            category: "Sabedoria",
            likes: 870,
            comments: 38,
            image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000",
        },
    ];

    // Função para mostrar opções de um post
    const showPostOptions = (postId) => {
        Alert.alert(
            "Opções",
            "O que você deseja fazer com esta frase?",
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Editar", onPress: () => console.log(`Edit post ${postId}`) },
                {
                    text: "Excluir",
                    style: "destructive",
                    onPress: () => confirmDeletePost(postId)
                }
            ]
        );
    };

    // Função para confirmar exclusão de post
    const confirmDeletePost = (postId) => {
        Alert.alert(
            "Excluir Frase",
            "Tem certeza que deseja excluir esta frase? Esta ação não pode ser desfeita.",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Excluir",
                    style: "destructive",
                    onPress: () => console.log(`Delete post ${postId}`)
                }
            ]
        );
    };

    // Função para fazer logout
    const handleLogout = () => {
        Alert.alert(
            "Sair da Conta",
            "Tem certeza que deseja sair da sua conta?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Sair",
                    style: "destructive",
                    onPress: () => console.log("User logged out")
                }
            ]
        );
    };

    // Função para navegar para a tela de edição de perfil
    const navigateToEditProfile = () => {
        console.log("Navigate to edit profile");
        // Em um app real: navigation.navigate("EditProfile");
    };

    // Função para navegar para a tela de configurações
    const navigateToSettings = () => {
        console.log("Navigate to settings");
        // Em um app real: navigation.navigate("Settings");
    };

    // Função para navegar para a lista de seguidores
    const navigateToFollowers = () => {
        console.log("Navigate to followers");
        // Em um app real: navigation.navigate("Followers");
    };

    // Função para navegar para a lista de pessoas que o usuário segue
    const navigateToFollowing = () => {
        console.log("Navigate to following");
        // Em um app real: navigation.navigate("Following");
    };

    // Renderiza um post do usuário
    const renderUserPost = ({ item }) => (
        <View className="bg-white rounded-xl overflow-hidden shadow-sm mb-4">
            <View className="relative">
                <Image
                    source={{ uri: item.image }}
                    className="w-full h-36"
                />
                <View className="absolute inset-0 bg-black/40" />

                <View className="absolute bottom-0 left-0 right-0 p-4">
                    <Text className="text-white text-lg font-semibold">
                        "{item.quote}"
                    </Text>
                    <View className="flex-row justify-between items-center mt-1">
                        <View className="flex-row items-center">
                            <Text className="text-white/80 text-xs">
                                {item.category} • {item.date}
                            </Text>
                        </View>

                        <View className="flex-row">
                            <View className="flex-row items-center mr-3">
                                <Feather name="heart" size={16} color="#FF6B6B" />
                                <Text className="ml-1 text-white/80 text-xs">{item.likes}</Text>
                            </View>

                            <View className="flex-row items-center">
                                <Feather name="message-circle" size={16} color="#6A57D5" />
                                <Text className="ml-1 text-white/80 text-xs">{item.comments}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    className="absolute top-2 right-2 bg-black/30 rounded-full p-1.5"
                    onPress={() => showPostOptions(item.id)}
                >
                    <Feather name="more-vertical" size={18} color="#FFD700" />
                </TouchableOpacity>
            </View>
        </View>
    );

    // Renderiza um post salvo
    const renderSavedPost = ({ item }) => (
        <View className="bg-white rounded-xl overflow-hidden shadow-sm mb-4">
            <View className="relative">
                <Image
                    source={{ uri: item.image }}
                    className="w-full h-36"
                />
                <View className="absolute inset-0 bg-black/40" />

                <View className="absolute bottom-0 left-0 right-0 p-4">
                    <Text className="text-white text-lg font-semibold">
                        "{item.quote}"
                    </Text>
                    <View className="flex-row justify-between items-center mt-1">
                        <View className="flex-row items-center">
                            <Text className="text-white/80 text-xs">
                                {item.author} • {item.category}
                            </Text>
                        </View>

                        <View className="flex-row">
                            <View className="flex-row items-center mr-3">
                                <Feather name="heart" size={16} color="#FF6B6B" />
                                <Text className="ml-1 text-white/80 text-xs">{item.likes}</Text>
                            </View>

                            <View className="flex-row items-center">
                                <Feather name="message-circle" size={16} color="#6A57D5" />
                                <Text className="ml-1 text-white/80 text-xs">{item.comments}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    className="absolute top-2 right-2 bg-black/30 rounded-full p-1.5"
                >
                    <Feather name="bookmark" size={18} color="#FFD700" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView className="flex-1 bg-[#F4F4F4]">
            {/* 1. Cabeçalho Fixo */}
            <View className="flex-row items-center justify-between px-6 py-4">
                <TouchableOpacity onPress={() => router.back()}>
                    <Feather name="arrow-left" size={24} color="#6A57D5" />
                </TouchableOpacity>

                <Text className="text-2xl font-bold text-[#2D2A32]">Meu Perfil</Text>

                <TouchableOpacity onPress={navigateToSettings}>
                    <Feather name="settings" size={24} color="#6A57D5" />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* 2. Seção de Informações do Usuário */}
                <View className="pt-4 pb-6">
                    <Image
                        source={{ uri: user.avatar }}
                        className="rounded-full w-24 h-24 border-4 border-[#6A57D5] mx-auto"
                    />

                    <Text className="text-xl font-semibold text-[#2D2A32] text-center mt-3">
                        {user.name}
                    </Text>

                    <Text className="text-sm text-[#6A57D5] text-center">
                        @{user.username}
                    </Text>

                    <Text className="text-center text-sm text-[#2D2A32]/70 px-6 mt-1">
                        {user.bio}
                    </Text>

                    <TouchableOpacity
                        className="bg-[#6A57D5] py-2 px-4 rounded-lg mx-auto mt-3"
                        onPress={navigateToEditProfile}
                    >
                        <Text className="text-white font-medium">Editar Perfil</Text>
                    </TouchableOpacity>
                </View>

                {/* 3. Estatísticas do Usuário */}
                <View className="flex-row justify-around bg-white py-4 mb-4 shadow-sm">
                    <View className="items-center">
                        <Text className="text-lg font-bold text-[#FFD700]">{user.stats.posts}</Text>
                        <Text className="text-sm text-[#2D2A32]/70">Frases</Text>
                    </View>

                    <View className="items-center">
                        <Text className="text-lg font-bold text-[#FF6B6B]">{user.stats.likes}</Text>
                        <Text className="text-sm text-[#2D2A32]/70">Curtidas</Text>
                    </View>

                    <TouchableOpacity className="items-center" onPress={navigateToFollowers}>
                        <Text className="text-lg font-bold text-[#6A57D5]">{user.stats.followers}</Text>
                        <Text className="text-sm text-[#2D2A32]/70">Seguidores</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="items-center" onPress={navigateToFollowing}>
                        <Text className="text-lg font-bold text-[#6A57D5]">{user.stats.following}</Text>
                        <Text className="text-sm text-[#2D2A32]/70">Seguindo</Text>
                    </TouchableOpacity>
                </View>

                {/* 4. Botões de Ação */}
                <View className="flex-row px-6 mb-4">
                    <TouchableOpacity
                        className={`flex-1 py-2.5 rounded-lg mr-2 ${activeTab === 'posts' ? 'bg-[#6A57D5]' : 'bg-white border border-[#6A57D5]'
                            }`}
                        onPress={() => setActiveTab('posts')}
                    >
                        <Text
                            className={`text-center font-medium ${activeTab === 'posts' ? 'text-white' : 'text-[#6A57D5]'
                                }`}
                        >
                            Minhas Postagens
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className={`flex-1 py-2.5 rounded-lg ml-2 ${activeTab === 'saved' ? 'bg-[#FFD700]' : 'bg-white border border-[#FFD700]'
                            }`}
                        onPress={() => setActiveTab('saved')}
                    >
                        <Text
                            className={`text-center font-medium ${activeTab === 'saved' ? 'text-white' : 'text-[#FFD700]'
                                }`}
                        >
                            Frases Salvas
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* 5. Lista de Postagens do Usuário */}
                <View className="px-6 pb-4">
                    {activeTab === 'posts' ? (
                        <>
                            {userPosts.map(post => renderUserPost({ item: post }))}

                            <TouchableOpacity
                                className="bg-[#6A57D5]/10 py-3 rounded-lg mb-4"
                            >
                                <Text className="text-[#6A57D5] font-medium text-center">Ver Mais</Text>
                            </TouchableOpacity>
                        </>
                    ) : (
                        <>
                            {savedPosts.map(post => renderSavedPost({ item: post }))}

                            <TouchableOpacity
                                className="bg-[#FFD700]/10 py-3 rounded-lg mb-4"
                                onPress={() => router.replace('/(dashboard)/Saved')}
                            >
                                <Text className="text-[#FFD700] font-medium text-center">Ver Todos</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </View>

                {/* 6. Botão de Logout */}
                <View className="px-6 pb-10">
                    <TouchableOpacity
                        className="bg-[#FF6B6B] py-3 rounded-lg shadow-sm"
                        onPress={handleLogout}
                    >
                        <Text className="text-white font-bold text-center">Sair da Conta</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}