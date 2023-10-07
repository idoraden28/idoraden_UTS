import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';



function MessageScreen({ navigation }) {
    useEffect(() => {
        // Set navigation options dynamically
        navigation.setOptions({
            headerTitle: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, marginRight: 8 }}>Pesan</Text>
                </View>
            ),
        });
    }, []);
    return (
        <SafeAreaView style={style.safeArea}>
            <ScrollView>
                <View style={style.container} >
                    <View style={style.row}>
                        <View style={style.inputContainer}>

                            <TextInput
                                style={style.input}
                                placeholder="cari obrolan"
                                placeholderTextColor="gray" />
                        </View>
                    </View>
                    <View style={[style.row, { marginTop: 30 }]}>
                        <View >
                            <Image source={require('../../assets/profil/ipan.png')} style={style.circularImage} />
                        </View>
                        <View style={[style.textContainer, { marginLeft: 20 }]}>
                            <Text style={style.followText}>Irfan_artiyadi</Text>
                            <Text style={style.postsText}>aktif 21 mnt lalu</Text>
                        </View>
                    </View>


                    <View style={[style.row, { marginTop: 30 }]}>

                        <View >
                            <Image source={require('../../assets/profil/guna.png')} style={style.circularImage} />
                        </View>

                        <View style={[style.textContainer, { marginLeft: 20 }]}>
                            <Text style={style.followText}>styaadi_g</Text>
                            <Text style={style.postsText}>aktif 21 mnt lalu</Text>
                        </View>
                    </View>

                    <View style={[style.row, { marginTop: 30 }]}>

                        <View >
                            <Image source={require('../../assets/profil/edo.png')} style={style.circularImage} />
                        </View>

                        <View style={[style.textContainer, { marginLeft: 20 }]}>
                            <Text style={style.followText}>Alfredo</Text>
                            <Text style={style.postsText}>aktif 21 mnt lalu</Text>
                        </View>
                    </View>
                    <View style={[style.row, { marginTop: 30 }]}>

                        <View >
                            <Image source={require('../../assets/profil/rizky.png')} style={style.circularImage} />
                        </View>

                        <View style={[style.textContainer, { marginLeft: 20 }]}>
                            <Text style={style.followText}>Rizky_joestar</Text>
                            <Text style={style.postsText}>aktif 21 mnt lalu</Text>
                        </View>
                    </View>
                    <View style={[style.row, { marginTop: 30 }]}>

                        <View >
                            <Image source={require('../../assets/profil/rahut.png')} style={style.circularImage} />
                        </View>

                        <View style={[style.textContainer, { marginLeft: 20 }]}>
                            <Text style={style.followText}>Oranggakjelass</Text>
                            <Text style={style.postsText}>aktif 21 mnt lalu</Text>
                        </View>
                    </View>
                    <View style={[style.row, { marginTop: 30 }]}>

                        <View >
                            <Image source={require('../../assets/profil/adil.png')} style={style.circularImage} />
                        </View>

                        <View style={[style.textContainer, { marginLeft: 20 }]}>
                            <Text style={style.followText}>Adil_Muchayari</Text>
                            <Text style={style.postsText}>aktif 21 mnt lalu</Text>
                        </View>
                    </View>
                    <View style={[style.row, { marginTop: 30 }]}>

                        <View >
                            <Image source={require('../../assets/profil/ido.png')} style={style.circularImage} />
                        </View>

                        <View style={[style.textContainer, { marginLeft: 20 }]}>
                            <Text style={style.followText}>doo~</Text>
                            <Text style={style.postsText}>aktif 21 mnt lalu</Text>
                        </View>
                    </View>
                    <View style={[style.row, { marginTop: 30 }]}>

                        <View >
                            <Image source={require('../../assets/profil/owen.png')} style={style.circularImage} />
                        </View>

                        <View style={[style.textContainer, { marginLeft: 20 }]}>
                            <Text style={style.followText}>owen_Mulya</Text>
                            <Text style={style.postsText}>aktif 21 mnt lalu</Text>
                        </View>
                    </View>
                    <View style={[style.row, { marginTop: 30 }]}>

                        <View >
                            <Image source={require('../../assets/profil/rehan.png')} style={style.circularImage} />
                        </View>

                        <View style={[style.textContainer, { marginLeft: 20 }]}>
                            <Text style={style.followText}>Ryhn_saputra</Text>
                            <Text style={style.postsText}>aktif 21 mnt lalu</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white', // Set the background color for the entire screen
    },
    container: {
        margin: 18,
    },

    row: {

        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'column',
        marginRight: 20,
        alignItems: 'left',
        justifyContent: 'flex-end',
    },
    followText: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    postsText: {
        fontSize: 14,

    },
    circularImage: {
        width: 65, // Set the width of the image
        height: 65, // Set the height of the image
        borderRadius: 50, // Half of the width and height to create a circular shape
        // Border color

    },
    button: {
        marginRight: 5,
        height: 30, // Set the height of the button
        backgroundColor: '#e6e6e6', // Example background color
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderRadius: 5,
        marginTop: 10,
        paddingHorizontal: 10,
        backgroundColor: '#e6e6e6',
    },

    input: {
        flex: 1,
        height: 40,
        color: 'black',
        marginLeft: 15,
    },

})




export default MessageScreen;
