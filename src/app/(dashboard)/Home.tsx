import React from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Feather } from "@expo/vector-icons";

export default function HomeScreen() {
    // Dados de exemplo para a tela
    const categories = [
        { id: "1", name: "Motivação", color: "#FFD700", icon: "star" },
        { id: "2", name: "Sucesso", color: "#FF6B6B", icon: "award" },
        { id: "3", name: "Superação", color: "#4ECDC4", icon: "trending-up" },
        { id: "4", name: "Foco", color: "#7DCFB6", icon: "target" },
        { id: "5", name: "Criatividade", color: "#6A57D5", icon: "feather" },
    ];

    const topUsers = [
        { id: "1", name: "João Silva", posts: 128, likes: "3.2K", rank: 1 },
        { id: "2", name: "Maria Santos", posts: 104, likes: "2.9K", rank: 2 },
        { id: "3", name: "Lucas Oliveira", posts: 98, likes: "2.5K", rank: 3 },
    ];

    const popularPosts = [
        {
            id: "1",
            quote: "Cada dia é uma nova oportunidade para mudar sua vida.",
            user: "Maria Santos",
            likes: "4.5K",
            comments: "1.2K",
            favorites: "900",
            shares: "1.8K",
            image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=400",
        },
        {
            id: "2",
            quote: "O sucesso nasce do querer, da determinação e persistência.",
            user: "João Almeida",
            likes: "3.8K",
            comments: "950",
            favorites: "780",
            shares: "1.2K",
            image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=400",
        },
        {
            id: "3",
            quote: "Acredite em você mesmo e tudo será possível.",
            user: "Ana Pereira",
            likes: "3.2K",
            comments: "820",
            favorites: "650",
            shares: "980",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400",
        },
    ];

    const recentPosts = [
        {
            id: "1",
            quote: "O caminho do sucesso é a persistência.",
            user: "João Almeida",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            date: "23/03/2025",
            likes: "500",
            comments: "120",
            favorites: "45",
            shares: "78",
            image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=400",
        },
        {
            id: "2",
            quote: "Não espere por circunstâncias ideais. Nunca serão ideais. Comece onde você está.",
            user: "Carla Mendes",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            date: "22/03/2025",
            likes: "432",
            comments: "98",
            favorites: "37",
            shares: "65",
            image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=400",
        },
        {
            id: "3",
            quote: "A persistência é o caminho do êxito.",
            user: "Pedro Costa",
            avatar: "https://randomuser.me/api/portraits/men/67.jpg",
            date: "21/03/2025",
            likes: "387",
            comments: "76",
            favorites: "29",
            shares: "54",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400",
        },
    ];

    return (
        <SafeAreaView className="flex-1 bg-[#F4F4F4]">
            {/* 1. Cabeçalho + Barra de Pesquisa */}
            <View className="px-6 pt-4 flex-row items-center justify-between">
                <Text className="text-3xl font-bold text-[#2D2A32]">ELEVA</Text>
                <TouchableOpacity>
                    <FontAwesome name="user-circle" size={30} color="#6A57D5" />
                </TouchableOpacity>
            </View>

            {/* Barra de Pesquisa */}
            <View className="mx-6 mt-4 flex-row items-center bg-white rounded-full px-4 py-3 shadow-sm">
                <Feather name="search" size={20} color="#A0A0A0" />
                <TextInput
                    placeholder="Buscar inspiração..."
                    placeholderTextColor="#A0A0A0"
                    className="flex-1 ml-3 text-[#2D2A32]"
                />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} className="flex-1 mt-4">
                {/* 2. Categorias de Inspiração */}
                <View className="px-6 mb-6">
                    <Text className="text-xl font-bold text-[#2D2A32] mb-3">Categorias</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pb-2">
                        {categories.map((category) => (
                            <TouchableOpacity
                                key={category.id}
                                className="flex-row items-center rounded-full px-5 py-2.5 mr-3"
                                style={{ backgroundColor: category.color }}
                            >
                                <Feather name={category.icon} size={16} color="white" />
                                <Text className="text-white font-bold ml-2">{category.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* 3. Inspirações do Dia */}
                <View className="px-6 mb-6">
                    <Text className="text-xl font-bold text-[#2D2A32] mb-3">Inspiração do Dia</Text>
                    <View className="bg-white rounded-xl overflow-hidden shadow-md">
                        <Image
                            source={{ uri: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000" }}
                            className="w-full h-40 opacity-80"
                        />
                        <View className="absolute inset-0 bg-black/30" />
                        <View className="absolute inset-0 p-5 justify-center">
                            <Text className="text-white text-xl font-bold text-center">
                                "O sucesso nasce do querer, da determinação e persistência."
                            </Text>
                        </View>
                        <View className="p-4 bg-white">
                            <TouchableOpacity className="bg-[#6A57D5] py-2.5 rounded-full">
                                <Text className="text-white font-bold text-center">Saiba Mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* 4. Ranking dos Usuários Mais Ativos */}
                <View className="px-6 mb-6">
                    <Text className="text-xl font-bold text-[#2D2A32] mb-3">Usuários em Destaque</Text>
                    <View className="bg-white rounded-xl p-4 shadow-md">
                        {topUsers.map((user) => (
                            <View key={user.id} className="flex-row items-center py-3 border-b border-gray-100">
                                <Text className="text-2xl mr-3">
                                    {user.rank === 1 ? "🥇" : user.rank === 2 ? "🥈" : "🥉"}
                                </Text>
                                <View className="w-10 h-10 bg-[#6A57D5] rounded-full items-center justify-center">
                                    <Text className="text-white font-bold">{user.name.charAt(0)}</Text>
                                </View>
                                <View className="ml-3 flex-1">
                                    <Text className="font-bold text-[#2D2A32]">{user.name}</Text>
                                    <Text className="text-gray-500 text-xs">
                                        {user.posts} frases | {user.likes} curtidas
                                    </Text>
                                </View>
                                <Feather name="chevron-right" size={20} color="#A0A0A0" />
                            </View>
                        ))}
                    </View>
                </View>

                {/* 5. Posts Populares */}
                <View className="px-6 mb-6">
                    <Text className="text-xl font-bold text-[#2D2A32] mb-3">Mais Curtidos da Semana</Text>
                    {popularPosts.map((post) => (
                        <View key={post.id} className="bg-white rounded-xl mb-4 overflow-hidden shadow-md">
                            <Image source={{ uri: post.image }} className="w-full h-40" />
                            <View className="p-4">
                                <Text className="text-[#2D2A32] text-lg font-semibold mb-2">
                                    "{post.quote}"
                                </Text>
                                <Text className="text-gray-500 mb-3">Postado por {post.user}</Text>
                                <View className="flex-row justify-between">
                                    <View className="flex-row items-center">
                                        <View className="flex-row items-center mr-3">
                                            <FontAwesome name="heart" size={16} color="#FF6B6B" />
                                            <Text className="ml-1 text-gray-500 text-xs">{post.likes}</Text>
                                        </View>
                                        <View className="flex-row items-center mr-3">
                                            <FontAwesome name="comment" size={16} color="#4ECDC4" />
                                            <Text className="ml-1 text-gray-500 text-xs">{post.comments}</Text>
                                        </View>
                                        <View className="flex-row items-center">
                                            <FontAwesome name="bookmark" size={16} color="#FFD700" />
                                            <Text className="ml-1 text-gray-500 text-xs">{post.favorites}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity>
                                        <Feather name="share-2" size={18} color="#6A57D5" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>

                {/* 6. Lista de Posts Recentes */}
                <View className="px-6 pb-10">
                    <Text className="text-xl font-bold text-[#2D2A32] mb-3">Posts Recentes</Text>
                    {recentPosts.map((post) => (
                        <View key={post.id} className="bg-white rounded-xl mb-4 overflow-hidden shadow-md">
                            <Image source={{ uri: post.image }} className="w-full h-40" />
                            <View className="p-4">
                                <Text className="text-[#2D2A32] text-base font-semibold mb-3">
                                    "{post.quote}"
                                </Text>
                                <View className="flex-row items-center mb-3">
                                    <Image source={{ uri: post.avatar }} className="w-8 h-8 rounded-full" />
                                    <View className="ml-2">
                                        <Text className="font-medium text-[#2D2A32]">{post.user}</Text>
                                        <Text className="text-gray-500 text-xs">{post.date}</Text>
                                    </View>
                                </View>
                                <View className="flex-row justify-between border-t border-gray-100 pt-3">
                                    <TouchableOpacity className="flex-row items-center">
                                        <FontAwesome name="heart-o" size={18} color="#FF6B6B" />
                                        <Text className="ml-1 text-gray-500 text-xs">{post.likes}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity className="flex-row items-center">
                                        <FontAwesome name="comment-o" size={18} color="#4ECDC4" />
                                        <Text className="ml-1 text-gray-500 text-xs">{post.comments}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity className="flex-row items-center">
                                        <FontAwesome name="bookmark-o" size={18} color="#FFD700" />
                                        <Text className="ml-1 text-gray-500 text-xs">{post.favorites}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity className="flex-row items-center">
                                        <Feather name="share-2" size={18} color="#6A57D5" />
                                        <Text className="ml-1 text-gray-500 text-xs">{post.shares}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

            
        </SafeAreaView>
    );
}