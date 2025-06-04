import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from './styles';
import { getUserMessages } from '../../services/messages';
import { HeaderButtons } from '../../components/HeaderButtons';
import { ForumComment } from '../../components/ForumComment';
import { WriteCommentButton } from '../../components/WriteCommentButton';
import { CommentObject } from '../../types/api';

import comments from '../../data/comments.json'

export function Forum({ navigation }: any) {

    const [forumMessages, setForumMessages] = useState<Array<CommentObject>>(comments);    

    useEffect(() => {
        const loadUserMessages = async () => {
            const data = await getUserMessages();
            setForumMessages(prev => [ ...prev, ...data ])
        }
        loadUserMessages()
    }, [])

    return (
        <View style={styles.container}>
            <HeaderButtons navigation={navigation} />
            <FlatList 
                style={styles.flatList}
                contentContainerStyle={{ alignItems: 'center', justifyContent: 'flex-start' }}
                data={forumMessages}
                renderItem={({ item }) => <ForumComment commentData={item} />}
                keyExtractor={item => `comment-${item.id}`} 
            />
            <WriteCommentButton navigation={navigation} />
        </View>
    );
}