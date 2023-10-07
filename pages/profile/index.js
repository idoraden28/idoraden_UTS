import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image, Button } from 'react-native';
import React, { useEffect } from 'react';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
import { colors } from '../../config/Colors';
function ProfileScreen({ navigation }) {
    useEffect(() => {
        // Set navigation options dynamically
        navigation.setOptions({
            headerTitle: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, marginRight: 8 }}>Idoraden28</Text>
                    <MaterialCommunityIcons name="check-decagram" size={18} color="#1e90ff" />
                </View>
            ),
            headerRight: () => (
                <View style={{ flexDirection: 'row', marginRight: 5 }}>
                    <TouchableOpacity
                        style={{ marginRight: 16 }}
                        onPress={() => navigation.navigate('Message')}
                    >
                        <MaterialCommunityIcons name="message-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginRight: 16 }}

                    >
                        {/* Add your second icon here */}
                        <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            ),

        });
    }, []);
    return (

        <SafeAreaView style={style.safeArea}>
            <ScrollView>
                <View style={style.container} >
                    <View style={style.row}>
                        <TouchableOpacity>
                            <View style={style.doubleBorder}>
                                <Image source={require('../../assets/ido.png')} style={style.circularImage} />

                            </View>
                            <Text style={style.headerText}>Idohutagalung</Text>
                        </TouchableOpacity>
                        <View style={[style.textContainer, { marginLeft: 35 }]}>
                            <Text style={style.followText}>0</Text>
                            <Text style={style.postsText}>Postingan</Text>
                        </View>
                        <View style={style.textContainer}>
                            <Text style={style.followText}>715</Text>
                            <Text style={style.postsText}>Pengikut</Text>
                        </View>
                        <View style={style.textContainer}>
                            <Text style={style.followText}>899</Text>
                            <Text style={style.postsText}>Mengikuti</Text>
                        </View>
                    </View>
                    <View style={[style.row, { marginTop: 20 }]} >
                        <TouchableOpacity style={[style.button, { width: 152 }]} onPress={() => navigation.push('Edit')}>
                            <Text style={style.postsText}>Edit Profil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.button, { width: 152 }]}>
                            <Text style={style.postsText}>Bagikan Profil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.button, { width: 35, }]} >
                            <MaterialCommunityIcons name="account-outline" size={24} color="black" />
                        </TouchableOpacity>
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
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: colors.gray1,
        borderBottomWidth: 1,
        backgroundColor: colors,
    },
    leftHeaderWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    followText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    postsText: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    doubleBorder: {
        borderRadius: 60, // Half of the total width (2 * borderWidth + width)
        borderWidth: 3,
        borderColor: 'purple', // Outer border color
        // Margin between the outer and inner borders
    },
    circularImage: {
        width: 90, // Set the width of the image
        height: 90, // Set the height of the image
        borderRadius: 50, // Half of the width and height to create a circular shape
        borderWidth: 4, // Border width
        borderColor: 'white',
        // Border color

    },

    button: {
        marginRight: 5,
        height: 30, // Set the height of the button
        backgroundColor: '#e6e6e6', // Example background color
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    }
})




export default ProfileScreen;
