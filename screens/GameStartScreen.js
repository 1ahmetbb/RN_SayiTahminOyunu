import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";

export default function GameStartScreen() {
  return (
    <View>
      <Text>Sayi Tahmin Uygulamasi</Text>
      <CustomButton>Temizle</CustomButton>
      <CustomButton>Onayla</CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({});
