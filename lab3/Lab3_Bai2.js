import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const data = Array.from({ length: 20 }, (_, index) => ({
  id: index.toString(),
}));

const ListItem = React.memo(({ item, viewableItems }) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter((vItem) => vItem.isViewable)
        .find((vItem) => vItem.item.id === item.id)
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0, { duration: 700 }),
      transform: [
        {
          translateY: withTiming(isVisible ? 0 : 100, { duration: 700 }),
        },
        {
          scale: withTiming(isVisible ? 1 : 0.8, { duration: 700 }),
        },
      ],
    };
  }, []);

  return <Animated.View style={[styles.item, rStyle]} />;
});

// Component chính chứa FlatList
const Lab3_Bai2 = () => {
  const viewableItems = useSharedValue([]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems;
        }}
        renderItem={({ item }) => (
          <ListItem item={item} viewableItems={viewableItems} />
        )}
      />
    </View>
  );
};

export default Lab3_Bai2;

// Style cho giao diện
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  item: {
    height: 80,
    backgroundColor: "#ff7b00",
    borderRadius: 10,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
