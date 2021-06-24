// import React, { useState } from 'react';
import React from 'react';
import { 
    View, 
    Text, 
    Image,
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';


export function SignIn(){
    // const [text, setText] = useState('...');


    return (
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
                    activeOpacity={0.5}
                />
            {/* <ButtonIcon title="Entrar com Outro"/> */}


            </View>
        </View>
    );
}