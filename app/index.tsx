import OnboardingImage from "@/assets/images/onboarding-image.png";
import Link from "@/components/link";
import Text from "@/components/text";
import { Image } from "expo-image";
import { View } from "react-native";

const OnboardingScreen = () => {
	return (
		<View className="flex-1 h-dvh relative bg-[#f1f1f1]">
			<View className="mx-[15%] h-screen pt-20">
				<Image
					source={OnboardingImage}
					contentFit="contain"
					contentPosition="top center"
					style={{ width: "100%", height: "100%" }}
				/>
			</View>

			<View className="bg-white pt-6 px-5 pb-10 absolute bottom-0 w-full gap-4">
				<View className="w-4/5 mx-auto gap-2">
					<Text className="font-satoshi-bold text-center text-2xl">
						Making Estate & Utility Services Convenient For You
					</Text>

					<Text className="text-center text-black/80">
						Strealine visit process & provide a convenient platform
						for you to manage utility bills.
					</Text>
				</View>

				<Link href="/auth/sign-up">Create an Account</Link>

				<View className="flex-row items-center justify-center gap-2 mt-6">
					<Text className="text-center">
						Already have an account?
					</Text>

					<Link
						href="/auth/sign-in"
						isPlainLink
						className="leading-none"
					>
						<Text className="text-brand-purple">
							Sign In instead
						</Text>
					</Link>
				</View>
			</View>
		</View>
	);
};

export default OnboardingScreen;
