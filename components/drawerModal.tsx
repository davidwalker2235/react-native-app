import React from 'react';
import { Modal, View, Text, Dimensions, TouchableOpacity } from 'react-native';

const DrawerModal = ({ isOpen = false, onClose }: { isOpen: boolean, onClose: any }) => {
	const windowHeight = Dimensions.get('window').height;

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={isOpen}
			onRequestClose={onClose}>

			<View className="absolute left-0 right-0 justify-start items-center bg-white rounded-t-lg py-6 px-6 bottom-0 border border-red-500" style={{ height: windowHeight * 0.6 }}>
				<View className="flex-0 w-full justify-between flex-row">
					<Text>Preview</Text>
					<TouchableOpacity onPress={onClose}>
						<Text>Close</Text>
					</TouchableOpacity>
				</View>
				<View className="py-4">
					<Text>Modal</Text>
					<Text>This is an empty modal</Text>
					<View className="opacity-20 h-px border border-gray-500 my-4" />
					<View className="pt-4"></View>
					<View style={{ paddingTop: 16 }}>
						<TouchableOpacity onPress={onClose} style={{ width: '90%', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#86827e', paddingVertical: 12, borderRadius: 8 }}>
							<Text>Log out</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	);
}

export default DrawerModal;