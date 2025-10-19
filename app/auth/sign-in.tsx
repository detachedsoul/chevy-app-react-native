import Text from "@/components/text";
import { Link, Stack } from "expo-router";
import { View } from "react-native";

const SignInScreen = () => {
	return (
		<View className="">
			<Stack.Screen options={{ headerShown: false }} />

			<Text>Sign In</Text>

			<Link href="/">Go back</Link>
		</View>
	);
};

export default SignInScreen;
