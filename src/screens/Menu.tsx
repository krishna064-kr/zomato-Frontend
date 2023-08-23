import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MenuCard from '../components/cards/menuCard/MenuCard'
import { useSelector } from 'react-redux';

export default function Menu() {
    const {restaursnt,menu} = useSelector((state:any)=>state.reducer)
    
  return (
    <>
        <View style={styles.topContainer}>
            <Text style={styles.name}>{restaursnt.name}</Text>
            <Text style={styles.cusine}>{restaursnt.cuisine}</Text>
        </View>
        
        <FlatList showsVerticalScrollIndicator={false} data={menu} renderItem={(menuDetail:any)=>{            
            return(
                <MenuCard category={menuDetail.item.category} description={menuDetail.item.description} imageUrl={menuDetail.item.imageUrl} name={menuDetail.item.name} price={menuDetail.item.price} restroId={menuDetail.item.restroId} />
            )
        }}/>
    </>
  )
}

const styles = StyleSheet.create({
    topContainer:{
        justifyContent:'center', 
        alignItems:'center', 
        paddingHorizontal:'10%',
        marginVertical:15
    },
    name:{
        fontSize:30,
        fontWeight:'600',
    },
    cusine:{
        fontSize:18,
        fontWeight:'300',
    }
})