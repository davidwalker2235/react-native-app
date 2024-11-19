import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DrawerModal from '../../components/drawerModal';

const Main = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity onPress={handleOpenBottomSheet} className="w-11/12 items-center justify-center border border-gray-500 py-3 rounded-lg">
        <Text>Open Drawer</Text>
      </TouchableOpacity>
      <DrawerModal isOpen={isBottomSheetOpen} onClose={handleOpenBottomSheet}/>
    </View>
  );
}

export default Main;