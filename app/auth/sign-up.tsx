import TextInput from "@/components/input";
import Link from "@/components/link";
import Text from "@/components/text";
import {
	View,
	Pressable,
} from "react-native";
import {
	ArrowLeftIcon,
	EyeIcon,
	EyeOffIcon,
	CheckIcon,
} from "lucide-react-native";
import { useState } from "react";
import { cn } from "@/utils/cn";

const passwordRules = [
	{
		rule: "Minimum of 8 characters",
		validation: (password: string) => password.length >= 8,
	},
	{
		rule: "At least one uppercase letter",
		validation: (password: string) => /[A-Z]/.test(password),
	},
	{
		rule: "At least one number",
		validation: (password: string) => /[0-9]/.test(password),
	},
	{
		rule: "At least one special character (e.g !@#$%^&*)",
		validation: (password: string) => /[!@#$%^&*]/.test(password),
	},
];

const SignUpScreen = () => {
	const [passwordIsVisible, setPasswordIsVisible] = useState(true);
	const [passwordValue, setPasswordValue] = useState("");

	return (
		<View className="flex-1 p-5 gap-5 bg-white">
			<Link
				className="self-start"
				href="/"
				isPlainLink
			>
				<ArrowLeftIcon
					strokeWidth={1.2}
					size={30}
				/>
			</Link>

			<View className="gap-8">
				<View className="gap-2">
					<Text className="text-2xl font-satoshi-medium">
						Create an Account
					</Text>

					<Text className="leading-relaxed">
						Streamline visit process & provide a convenient platform
						to manage utility bills
					</Text>
				</View>

				<View className="gap-6">
					<TextInput
						placeholder="Email Address"
						inputMode="email"
						keyboardType="email-address"
					/>

					<View className="relative flex-row items-center">
						<TextInput
							className="pr-12"
							placeholder="Password"
							secureTextEntry={passwordIsVisible}
							onChangeText={(password) => {
								setPasswordValue(password);
							}}
						/>

						<Pressable
							className="absolute right-4"
							onPress={() =>
								setPasswordIsVisible(!passwordIsVisible)
							}
						>
							{passwordIsVisible && (
								<EyeIcon
									color="#4637ca"
									strokeWidth={1.2}
								/>
							)}

							{!passwordIsVisible && (
								<EyeOffIcon
									color="#4637ca"
									strokeWidth={1.2}
								/>
							)}
						</Pressable>
					</View>

					<View className="gap-5">
						{passwordRules.map(({ rule, validation }) => (
							<View
								className="flex-row gap-2"
								key={rule}
							>
								<View
									className={cn(
										"size-6 p-2.5 rounded-full border flex-row items-center justify-center",
										{
											"bg-brand-purple border-brand-purple":
												validation(passwordValue),
											"bg-white border-brand-gray":
												!validation(passwordValue),
										},
									)}
								>
									<CheckIcon
										color={
											validation(passwordValue)
												? "white"
												: "#e5e7eb"
										}
										size={12}
									/>
								</View>

								<Text>{rule}</Text>
							</View>
						))}
					</View>
				</View>
			</View>

			<Link
				href="/"
				isPlainLink={false}
			>
				Continue
			</Link>
		</View>
	);
};

export default SignUpScreen;
