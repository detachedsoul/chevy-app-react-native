import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { cn } from "@/utils/cn";

type TextProps = RNTextProps & {
	className?: string;
};

const Text = ({ className, children, ...props }: TextProps) => {
	return (
		<RNText
			className={cn("font-satoshi text-lg text-black", className)}
			{...props}
		>
			{children}
		</RNText>
	);
};

export default Text;
