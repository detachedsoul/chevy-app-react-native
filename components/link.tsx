import Text from "@/components/text";
import { Link as ExpoLink, LinkProps } from "expo-router";
import { Pressable, PressableProps } from "react-native";
import { cn } from "@/utils/cn";

type CustomLinkProps = LinkProps &
	PressableProps & {
		isPlainLink?: boolean;
		isCustomChildren?: boolean;
		childrenClassName?: string;
	};

const Link = ({
	children,
	className,
	isPlainLink,
	isCustomChildren,
	childrenClassName,
	...props
}: CustomLinkProps) => {
	return (
		<ExpoLink
			{...props}
			asChild
		>
			<Pressable
				className={cn(
					"p-0",
					{
						btn: !isPlainLink,
					},
					className,
				)}
			>
				{!isCustomChildren && (
					<Text
						className={cn(
							"text-white text-center",
							childrenClassName,
						)}
					>
						{children}
					</Text>
				)}

				{isCustomChildren && children}
			</Pressable>
		</ExpoLink>
	);
};

export default Link;
