import {
	KeyboardAvoidingView,
	Platform,
	TextInput as RNTextInput,
	TextInputProps,
	View,
} from "react-native";
import { cn } from "@/utils/cn";

type InputProps = TextInputProps & {
	className?: string;
};

const TextInput = ({ className, ...props }: InputProps) => {
	return (
		<View className="w-full">
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<RNTextInput
					{...props}
					className={cn("input", className)}
				/>
			</KeyboardAvoidingView>
		</View>
	);
};

export default TextInput;
