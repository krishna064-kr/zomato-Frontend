import {ScrollView, View} from 'react-native';
import React from 'react';
import FeatureCard from './FeatureCard';
import {featureCardDetails} from '../../../../config/homepageContent'

export default function FeatureCards() {
 
  return (
    <>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom: 20}}>
        <View style={{flexDirection: 'row'}}>
          {featureCardDetails.map((item, i) => (
            <>
              <FeatureCard name={item.name} icon={item.icon} height={100} />
            </>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
