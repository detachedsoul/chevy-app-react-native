import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Stack } from "expo-router";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "@/assets/globals.css";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const [loaded, error] = useFonts({
		"Satoshi-Bold": require("../assets/fonts/Satoshi-Bold.otf"),
		"Satoshi-Medium": require("../assets/fonts/Satoshi-Medium.otf"),
		"Satoshi-Regular": require("../assets/fonts/Satoshi-Regular.otf"),
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return (
		<TouchableWithoutFeedback
			className="flex-1 font-satoshi"
			onPress={() => Keyboard.dismiss()}
		>
			<SafeAreaView className="flex-1 bg-white">
				<StatusBar animated />
				<Stack
					screenOptions={{
						animation: "ios_from_left",
						headerShown: false,
					}}
				>
					<Stack.Screen name="auth/sign-in" />
					<Stack.Screen name="auth/sign-up" />
				</Stack>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
};

export default RootLayout;
