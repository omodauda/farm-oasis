import React, {useRef, useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from '@components/Carousel/CarouselItem';
import Colors from '@constants/Colors';

const {height} = Dimensions.get('window');

export default function Slider({data}) {
  const isCarousel = useRef(null);
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.carousel}>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        onSnapToItem={indexs => setIndex(indexs)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={styles.paginationDots}
        inactiveDotOpacity={0.2}
        inactiveDotScale={1}
        tappableDots={true}
        dotColor={Colors.primary}
        inactiveDotColor={Colors.secondary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carousel: {
    paddingTop: '10%',
    height: height <= 640 ? height * 0.8 : height * 0.7,
  },
  paginationDots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
  },
});
