import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ExclusiveCard from './ExclusiveCard'

export default function OfferCards() {
  return (
    <>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom:20}}>
      <ExclusiveCard/>
      <ExclusiveCard/>
      <ExclusiveCard/>
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({})