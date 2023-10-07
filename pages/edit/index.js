import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image, TextInput, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
function EditScreen({ navigation }) {
    const showAlert = () => {
        Alert.alert(
            'Info',
            'Data Berhasil Disimpan.',
            [
                {
                    text: 'OK',
                    onPress: () => navigation.navigate('Profile'),
                },
            ],
            { cancelable: false }
        );

    };
    useEffect(() => {
        // Set navigation options dynamically
        navigation.setOptions({

            headerRight: () => (
                <TouchableOpacity
                    style={{ marginLeft: 5, }}
                    onPress={showAlert}
                >
                    <MaterialCommunityIcons name="check" size={24} color="#1e90ff" />
                </TouchableOpacity>
            ),
            headerTitle: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, marginRight: 8, marginLeft: 30 }}>Edit Profil</Text>
                </View>
            ),
        });
    }, [navigation]);
    return (
        <SafeAreaView style={style.safeArea}>
            <ScrollView>
                <View style={style.container} >
                    <View style={[style.row, { marginTop: 20, justifyContent: 'center' }]}>
                        <View >
                            <Image source={require('../../assets/ido.png')} style={[style.circularImage]} />
                        </View>
                    </View>
                    <View style={[style.row, { marginTop: 10, justifyContent: 'center' }]}>
                        <TouchableOpacity>
                            <Text style={[style.followText, { color: '#00bfff' }]}>Edit Gambar</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: 'gray', marginTop: 20 }}>Nama</Text>
                    <View style={style.row}>
                        <View style={style.inputContainer}>
                            <TextInput
                                style={[style.input, { fontWeight: 'bold' }]}
                                value='Idohutagalung'
                                placeholderTextColor="gray" />
                        </View>
                    </View>
                    <Text style={{ marginTop: 20, color: 'gray' }}>Nama pengguna</Text>
                    <View style={style.row}>
                        <View style={style.inputContainer}>
                            <TextInput
                                style={[style.input, { fontWeight: 'bold' }]}
                                value='Idoraden28'
                                placeholderTextColor="gray" />
                        </View>
                    </View>
                    <Text style={{ marginTop: 20, color: 'gray' }}>Kata ganti</Text>
                    <View style={style.row}>
                        <View style={style.inputContainer}>
                            <TextInput
                                style={[style.input, { fontWeight: 'bold' }]}
                                placeholderTextColor="gray" />
                        </View>
                    </View>
                    <Text style={{ marginTop: 20, color: 'gray' }}>Bio</Text>
                    <View style={style.row}>
                        <View style={style.inputContainer}>
                            <TextInput
                                style={[style.input, { fontWeight: 'bold' }]}
                                value='?'
                                placeholderTextColor="gray" />
                        </View>
                    </View>



                    <TouchableOpacity>
                        <Text style={[style.link, { marginTop: 50 }]}>Beralih ke akun Profesional</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[style.link, { marginTop: 10 }]}>Pengaturan Informasi pribadi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[style.link, { marginTop: 10 }]}>Data verifikasi Meta</Text>
                    </TouchableOpacity>

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
    followText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    circularImage: {
        width: 100, // Set the width of the image
        height: 100, // Set the height of the image
        borderRadius: 50, // Half of the width and height to create a circular shape
        // Border color

    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',


    },
    input: {
        flex: 1,
        height: 30,
        color: 'black'

    },
    link: {
        fontSize: 14,
        color: '#00bfff',
        fontWeight: 'bold',

    }

})




export default EditScreen;
