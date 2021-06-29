import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

const Post = ({navigation}) => {
    
    const image = { uri:
        'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27​'
    };
    const [gallery, setgallery] = useState([
        { image: {uri:
           'https://www.fodors.com/wp-content/uploads/2019/03/20GorgeousSidetownsinItaly__HERO_shutterstock_688078159.jpg'}, title: 'Italy',  key: '1' },
           { image: {uri:
            'https://www.kkhotels.com/wp-content/uploads/2020/01/Paris-City-Eiffeltower-View.jpg'}, title: 'Paris',  key: '2' },
            { image: {uri:
                'https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg'}, title: 'Rome',  key: '3' },
            { image: {uri:
                    'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/04/Where-to-stay-in-Tokyo-a-neighbourhood-guide.jpg'}, title: 'Tokyo',  key: '4' },
                 ]);
                 const goBack = () => {
                    navigation.goBack();
                }
             

                    
                 
    return (
        <View style={{ backgroundColor: 'white', flex:1}} >
            <ImageBackground
            source={image}
            style={styles.image}
            imageStyle={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
           <Text style={styles.Tagline}> Discover Kosovo</Text>
           <Text style={styles.placename}> Visit and explore the beautiful  country d  </Text>
            <TouchableOpacity  onPress={goBack} style={{position:'absolute', left: 20, top: 40, backgroundColor:'#ff6200', padding:10, borderRadius: 40}}>
                <Feather name='arrow-left' size={24} color='#fff'/>
            </TouchableOpacity>

            <TouchableOpacity style={{position:'absolute', right: 20, top: 40, backgroundColor:'#ff6200', padding:10, borderRadius: 40}}>
                <Feather name='heart' size={24} color='#fff'/>
            </TouchableOpacity>
            </ImageBackground>

            <TouchableOpacity style={styles.BookTicketBtn}>
                <Text style={styles.BookTicketText}>Book now</Text>
            </TouchableOpacity>
            <ScrollView style={{ backgroundColor:'white'}}>
                <Text style={{padding:14, fontSize:20 , fontWeight:'bold'}}>
                    About the place
                </Text>
                <Text style={{ fontSize:14 , paddingHorizontal:14 , fontWeight:'normal', opacity:0.3,justifyContent: 'flex-start', textAlign:'justify' , lineHeight:26}}>
                to cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country is also known for its ski resorts and hiking trails. Banking and finance are key industries, and Swiss watches and chocolate are world renowned.
                </Text>


               
            
            <View>
                <Text style={{padding: 14, fontSize: 20, fontWeight:'bold'}}>
                    Suggested Places
                </Text>
                <FlatList 
                data={gallery}
                horizontal={true}
                renderItem={({item}) => {
                    return(
                    <View style={{paddingBottom:40}}>
                        <View >
                            <Image source={item.image} style={{width: 150, height: 150, marginHorizontal: 10, borderRadius:10}}/>
                            <View style={styles.DarkOverlay}></View>
                        <Feather name='map-pin' size={16} color='white'
                        style={{marginHorizontal:14, marginTop: 4, position:'absolute', left:10, bottom:10}}/>
                       <Text style={{marginHorizontal:14, marginTop: 4, position:'absolute', left:30, bottom:10, color:'white', fontSize: 14}}> {item.title}</Text>
                       
                        </View>
                    </View>
                        )
                }}
                />
                    
                
            </View>
            </ScrollView>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        height: 380,
        justifyContent: 'flex-end'
    },
    image2:{
        height: 380,
        justifyContent: 'flex-end'
    },
    Tagline:{
        color:'white',
        fontSize: 16,
        fontWeight:'bold',
        paddingHorizontal:14,
        marginVertical: 10

    },
    placename:{
        color:'white',
        paddingHorizontal:14,
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 30


    },
    BookTicketBtn: {
        position: 'absolute',
        top: 350,
        right:12,
        backgroundColor:'#ff6200',
        padding:16,
        borderRadius:40,
        elevation: 5

    },
    BookTicketText:{
        color:'white',
        fontSize:14
    },
    DarkOverlay: {
        position:'absolute',
        height:150,
        width:150,
        top: 0,
        right: 0,
        left : 0,
        bottom: 0,
        backgroundColor: '#000',
        opacity: 0.2,
        borderRadius: 10,
        marginHorizontal: 10
        
    }

});
export default Post;
