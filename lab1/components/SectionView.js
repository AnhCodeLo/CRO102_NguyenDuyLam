import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import styles from "../styles/SectionView";

const SectionView = ({
  title,
  data,
  onPressDetail,
  showButton = true,
  showGo = true,
}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.container}>
        {data.location && (
          <View style={styles.row}>
            <Text style={styles.label}>Địa điểm:</Text>
            <Text style={styles.value}>{"\n" + data.location}</Text>
          </View>
        )}

        {data.time && (
          <View style={styles.row}>
            <Text style={styles.label}>Thời gian:</Text>
            <Text style={styles.value}>{"\n" + data.time}</Text>
          </View>
        )}

        {data.transport && (
          <View style={styles.row}>
            <Text style={styles.label}>Phương tiện di chuyển:</Text>
            <Text style={styles.value}>{"\n" + data.transport}</Text>
          </View>
        )}

        {showGo && data.go && (
          <View style={styles.row}>
            <Text style={styles.label}>Thời gian:</Text>
            <Text style={styles.value}>{"\n" + data.go}</Text>
          </View>
        )}

        {data.image && (
          <Image source={{ uri: data.image }} style={styles.image} />
        )}

        {showButton && onPressDetail && (
          <TouchableOpacity style={styles.button} onPress={onPressDetail}>
            <Text style={styles.buttonText}>CHI TIẾT</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SectionView;
