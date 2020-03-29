import React from 'react';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
  

import logoImg from '../../assets/logo.png';

import styles from './styles'

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Olá ONG, estou entrando em contato pois gostaria de ajudar no caso "CASO DE TESTE" com o valor de R$ 120,00';

    function navigationBack() {
        navigation.goBack()
    }
    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Herói do Caso: Caso 1',
            recipients: ['teste@rocketseat.com.br'],
            body: message,
        });
    }
    function sendWhatssap() {
            Linking.openURL(`whatsapp://send?phone=63999893364&text=${message}`);
    }
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity
                    onPress={navigationBack}
                >
                    <Feather
                        name="arrow-left"
                        size={28}
                        color="#e02041"
                    >

                    </Feather>
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={styles.incidentProperty, { marginTop: 0 }}>ONG:</Text>
                <Text style={styles.incidentValue}>Apad</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>Apad</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>R$ 124,00</Text>

            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>
                    Entre em contato
                </Text>
                <View style={styles.actions} >
                    <TouchableOpacity style={styles.action} onPress={sendWhatssap} >
                        <Text style={styles.actionText}>Whatssap</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail} >
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );


}