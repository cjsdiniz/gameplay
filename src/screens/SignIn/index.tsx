// import React, { useState } from 'react';
import React from 'react';
import { 
    View, 
    Text, 
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';


export function SignIn(){
    // const [text, setText] = useState('...');
    const navigation= useNavigation();

    function handleSignIn() {
        navigation.navigate('Home')
    }

    return(
        <View style={styles.container}>
            <Image 
                source={IllustrationImg}
                style={styles.image}
                resizeMode='stretch'
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Ligue-se {`\n`}
                    e  Organize {`\n`}
                    os seus {`\n`}
                    jogos
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar os seus jogos {`\n`}
                    favoritos com os seus amigos
                </Text> 

                <ButtonIcon 
                    title="Entrar com Discord"
                    activeOpacity={0.7}
                    onPress={handleSignIn}
                />
            </View>
        </View>
    );
}