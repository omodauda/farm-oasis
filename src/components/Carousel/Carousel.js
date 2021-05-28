import React, {useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from '@components/Carousel/CarouselItem';
import Colors from '@constants/Colors';

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
    marginTop: '10%',
    height: '65%',
  },
  paginationDots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
  },
});
