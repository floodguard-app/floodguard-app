import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';

import { styles } from './styles';
import { HeaderButtons } from '../../components/HeaderButtons';
import { ForumComment } from '../../components/ForumComment';
import { WriteCommentButton } from '../../components/WriteCommentButton';

export function Forum({ navigation }: any) {

    const [forumMessages, setForumMessages] = useState<Array<any>>([
        {
            'id': 1,
            'sender': 'bruno',
            'datetime': '2025-1-13 18:09:11',
            'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit eget aenean ipsum convallis laoreet ultricies. Fermentum, nibh quis in tellus amet arcu egestas massa. Amet et consectetur purus sagittis mauris, nunc est aliquam.'
        },
        {
            'id': 2,
            'sender': 'lucena',
            'datetime': '2025-1-13 19:1:26',
            'message': 'Ac turpis egestas integer eget aliquet. Mattis rhoncus urna neque viverra. Mattis rhoncus urna neque viverra. Facilisis mauris sit amet massa vitae. Lacus luctus accumsan tortor posuere..'
        },
        {
            'id': 3,
            'sender': 'gustavo',
            'datetime': '2025-1-13 19:27:58',
            'message': 'Amet cursus sit amet dictum sit amet. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Morbi blandit cursus risus at. Elit scelerisque mauris pellentesque pulvinar pellentesque. At quis risus sed vulputate odio. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor.'
        },
        {
            'id': 4,
            'sender': 'leonardo',
            'datetime': '2025-1-13 22:30:51',
            'message': 'Amet cursus sit amet dictum sit amet. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Morbi blandit cursus risus at. Elit scelerisque mauris pellentesque pulvinar pellentesque. At quis risus sed vulputate odio. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor.'
        }
    ])

    return (
        <View style={styles.container}>
            <HeaderButtons navigation={navigation} />
            <FlatList 
                style={styles.flatList}
                contentContainerStyle={{ alignItems: 'center', justifyContent: 'flex-start' }}
                data={forumMessages}
                renderItem={({ item }) => <ForumComment commentData={item} />}
                keyExtractor={item => item.id} 
            />
            <WriteCommentButton navigation={navigation} />
        </View>
    );
}