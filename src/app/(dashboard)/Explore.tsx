import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default function ExploreScreen() {
    const [activeCategory, setActiveCategory] = useState(null);

    // Dados de exemplo para a tela
    const categories = [
        { id: "1", name: "Motivação", icon: "lightbulb", type: "FontAwesome5", color: "#FFD700" },
        { id: "2", name: "Sucesso", icon: "trophy", type: "FontAwesome5", color: "#FF6B6B" },
        { id: "3", name: "Foco", icon: "target", type: "Feather", color: "#7DCFB6" },
        { id: "4", name: "Superação", icon: "trending-up", type: "Feather", color: "#4ECDC4" },
        { id: "5", name: "Criatividade", icon: "paint-brush", type: "FontAwesome5", color: "#6A57D5" },
        { id: "6", name: "Espiritualidade", icon: "pray", type: "FontAwesome5", color: "#9B59B6" },
    ];

    const trendingPosts = [
        {
            id: "1",
            quote: "A persistência realiza o impossível.",
            author: "Albert Einstein",
            likes: "1.2K",
            comments: "320",
            shares: "480",
            image: "https://images.unsplash.com/photo-1539593395743-7da5ee10ff07?q=80&w=1000",
        },
        {
            id: "2",
            quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
            author: "Robert Collier",
            likes: "980",
            comments: "245",
            shares: "390",
            image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000",
        },
        {
            id: "3",
            quote: "Não é sobre ter tempo, é sobre fazer tempo.",
            author: "Desconhecido",
            likes: "870",
            comments: "190",
            shares: "320",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000",
        },
    ];

    const recommendedAuthors = [
        {
            id: "1",
            name: "João Inspirador",
            posts: 120,
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            following: false,
        },
        {
            id: "2",
            name: "Maria Motivadora",
            posts: 98,
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            following: true,
        },
        {
            id: "3",
            name: "Carlos Positivo",
            posts: 156,
            avatar: "https://randomuser.me/api/portraits/men/67.jpg",
            following: false,
        },
        {
            id: "4",
            name: "Ana Superação",
            posts: 87,
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            following: false,
        },
    ];

    const popularHashtags = [
        { id: "1", name: "Foco", posts: "2.4K" },
        { id: "2", name: "Gratidão", posts: "3.1K" },
        { id: "3", name: "Sucesso", posts: "4.7K" },
        { id: "4", name: "Motivação", posts: "5.2K" },
        { id: "5", name: "Superação", posts: "2.8K" },
    ];

    const recentPosts = [
        {
            id: "1",
            quote: "Acredite na sua jornada, cada passo te aproxima do seu sonho.",
            author: "Maria Santos",
            date: "24/03/2025",
            likes: "890",
            comments: "220",
            favorites: "150",
            shares: "340",
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000",
        },
        {
            id: "2",
            quote: "Sua única limitação é aquela que você impõe em sua própria mente.",
            author: "Pedro Alves",
            date: "23/03/2025",
            likes: "760",
            comments: "180",
            favorites: "120",
            shares: "290",
            image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000",
        },
    ];

    // Função para renderizar o ícone correto baseado no tipo
    const renderCategoryIcon = (category) => {
        if (category.type === "FontAwesome5") {
            return <FontAwesome5 name={category.icon} size={24} color="white" />;
        } else {
            return <Feather name={category.icon} size={24} color="white" />;
        }
    };

    // Função para alternar o estado de seguir um autor
    const toggleFollow = (id) => {
        const updatedAuthors = recommendedAuthors.map(author =>
            author.id === id ? { ...author, following: !author.following } : author
        );
        // Em um app real, você atualizaria o estado aqui
    };

    return (
        <SafeAreaView className="flex-1 bg-[#F4F4F4]">
            {/* 1. Cabeçalho + Barra de Pesquisa */}
            <View className="px-6 pt-4 flex-row items-center justify-between">
                <Text className="text-3xl font-bold text-[#2D2A32]">Explorar</Text>
                <TouchableOpacity className="p-2">
                    <Feather name="filter" size={24} color="#6A57D5" />
                </TouchableOpacity>
            </View>

            {/* Barra de Pesquisa */}
            <View className="mx-6 mt-4 flex-row items-center bg-white rounded-full px-4 py-3 shadow-sm">
                <Feather name="search" size={20} color="#A0A0A0" />
                <TextInput
                    placeholder="Encontre frases inspiradoras..."
                    placeholderTextColor="#A0A0A0"
                    className="flex-1 ml-3 text-[#2D2A32]"
                />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} className="flex-1 mt-4">
                {/* 2. Categorias de Exploração */}
                <View className="mt-2 mb-6">
                    <Text className="text-xl font-bold text-[#2D2A32] px-6 mb-3">Categorias</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
                        {categories.map((category) => (
                            <TouchableOpacity
                                key={category.id}
                                className="items-center mx-3"
                                onPress={() => setActiveCategory(category.id)}
                            >
                                <View
                                    className="w-16 h-16 rounded-full items-center justify-center mb-2"
                                    style={{ backgroundColor: category.color }}
                                >
                                    {renderCategoryIcon(category)}
                                </View>
                                <Text className="text-[#2D2A32] text-sm font-medium">{category.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* 3. Frases em Destaque (Tendências) */}
                <View className="mb-6">
                    <View className="flex-row items-center justify-between px-6 mb-3">
                        <Text className="text-xl font-bold text-[#2D2A32]">Tendências</Text>
                        <TouchableOpacity>
                            <Text className="text-[#6A57D5] font-medium">Ver todos</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
                        {trendingPosts.map((post) => (
                            <View key={post.id} className="w-300 mr-4 bg-white rounded-xl overflow-hidden shadow-md">
                                <Image source={{ uri: post.image }} className="w-300 h-150" />
                                <View className="p-4">
                                    <Text className="text-[#2D2A32] text-lg font-semibold mb-1">"{post.quote}"</Text>
                                    <Text className="text-gray-500 mb-3">— {post.author}</Text>

                                    <View className="flex-row justify-between">
                                        <TouchableOpacity className="flex-row items-center">
                                            <Feather name="heart" size={18} color="#FF6B6B" />
                                            <Text className="ml-1 text-gray-500 text-xs">{post.likes}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity className="flex-row items-center">
                                            <Feather name="message-circle" size={18} color="#4ECDC4" />
                                            <Text className="ml-1 text-gray-500 text-xs">{post.comments}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity className="flex-row items-center">
                                            <Feather name="share" size={18} color="#6A57D5" />
                                            <Text className="ml-1 text-gray-500 text-xs">{post.shares}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* 4. Descubra Novos Autores */}
                <View className="mb-6">
                    <View className="flex-row items-center justify-between px-6 mb-3">
                        <Text className="text-xl font-bold text-[#2D2A32]">Descubra Autores</Text>
                        <TouchableOpacity>
                            <Text className="text-[#6A57D5] font-medium">Ver todos</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
                        {recommendedAuthors.map((author) => (
                            <View key={author.id} className="w-120 mr-4 bg-white rounded-xl p-4 items-center shadow-sm">
                                <Image source={{ uri: author.avatar }} className="w-16 h-16 rounded-full mb-2" />
                                <Text className="text-[#2D2A32] font-semibold text-center">{author.name}</Text>
                                <Text className="text-gray-500 text-xs mb-3">{author.posts} frases</Text>

                                <TouchableOpacity
                                    className={`px-4 py-1.5 rounded-full ${author.following ? 'bg-gray-200' : 'bg-[#6A57D5]'}`}
                                    onPress={() => toggleFollow(author.id)}
                                >
                                    <Text className={author.following ? 'text-[#2D2A32]' : 'text-white'}>
                                        {author.following ? 'Seguindo' : 'Seguir'}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* 5. Exploração por Hashtags */}
                <View className="px-6 mb-6">
                    <Text className="text-xl font-bold text-[#2D2A32] mb-3">Hashtags Populares</Text>

                    <View className="bg-white rounded-xl p-4 shadow-sm">
                        {popularHashtags.map((hashtag, index) => (
                            <TouchableOpacity
                                key={hashtag.id}
                                className={`flex-row items-center py-3 ${index < popularHashtags.length - 1 ? 'border-b border-gray-100' : ''
                                    }`}
                            >
                                <FontAwesome5 name="hashtag" size={16} color="#6A57D5" />
                                <Text className="ml-2 text-[#2D2A32] font-medium flex-1">#{hashtag.name}</Text>
                                <Text className="text-gray-500 text-sm">{hashtag.posts} postagens</Text>
                                <Feather name="chevron-right" size={20} color="#A0A0A0" className="ml-2" />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* 6. Lista de Novos Posts */}
                <View className="px-6 pb-10">
                    <Text className="text-xl font-bold text-[#2D2A32] mb-3">Novos Posts</Text>

                    {recentPosts.map((post) => (
                        <View key={post.id} className="bg-white rounded-xl mb-4 overflow-hidden shadow-md">
                            <Image source={{ uri: post.image }} className="w-full h-40" />
                            <View className="p-4">
                                <Text className="text-[#2D2A32] text-base font-semibold mb-2">"{post.quote}"</Text>
                                <View className="flex-row justify-between mb-3">
                                    <Text className="text-gray-500">— {post.author}</Text>
                                    <Text className="text-gray-400 text-sm">{post.date}</Text>
                                </View>

                                <View className="flex-row justify-between border-t border-gray-100 pt-3">
                                    <TouchableOpacity className="flex-row items-center">
                                        <Feather name="heart" size={18} color="#FF6B6B" />
                                        <Text className="ml-1 text-gray-500 text-xs">{post.likes}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity className="flex-row items-center">
                                        <Feather name="message-circle" size={18} color="#4ECDC4" />
                                        <Text className="ml-1 text-gray-500 text-xs">{post.comments}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity className="flex-row items-center">
                                        <Feather name="bookmark" size={18} color="#FFD700" />
                                        <Text className="ml-1 text-gray-500 text-xs">{post.favorites}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity className="flex-row items-center">
                                        <Feather name="share" size={18} color="#6A57D5" />
                                        <Text className="ml-1 text-gray-500 text-xs">{post.shares}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))}

                    <TouchableOpacity className="bg-[#6A57D5] py-3 rounded-full mb-4">
                        <Text className="text-white font-bold text-center">Carregar mais</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}