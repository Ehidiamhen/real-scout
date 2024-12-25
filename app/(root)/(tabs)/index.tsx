import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold font-rubik my-10 text-3xl " >Welcome to Real Scout</Text>
      <Link href="/sign-in" className="text-blue-200 font-bold"> Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile"> Profile </Link>
      <Link href="/properties/1"> Properties</Link>
    </View>
  );
}
