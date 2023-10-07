import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';
function SplashScreen({ navigation }) {
    useEffect(() => {
        const delay = setTimeout(() => {
            navigation.replace('Login'); // Ganti 'Home' dengan nama halaman utama Anda
        }, 2000); // Delay selama 2 detik

        return () => clearTimeout(delay); // Membersihkan timeout jika komponen unmount
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image
                    style={styles.icon}
                    source={require('../../assets/ig.png')}
                />
            </View>
            <View style={styles.logoContainer}>
                <Text style={styles.from}>from</Text>
                <View style={styles.logoTextWrapper}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/fb.png')}
                    />
                </View>
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    iconContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logoContainer: {
        display: 'flex',
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignSelf: 'center',
        marginBottom: 30,
    },
    logoTextWrapper: {
        width: '100%',
        height: '10%',
    },
    icon: {
        width: 100,
        height: 100,
    },
    logo: {
        flex: 1,
        alignSelf: 'center',
        height: '100%',
        width: '80%',
    },
    from: {
        color: 'gray',
        marginBottom: 15,
        textAlign: 'center',
    },
});
export default SplashScreen;
