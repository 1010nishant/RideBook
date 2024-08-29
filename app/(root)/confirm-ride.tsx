import { router } from "expo-router";
import { FlatList, View } from "react-native";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import CustomButton from "@/components/CustomButton";
import DriverCard from "@/components/DriverCard";
import RideLayout from "@/components/RideLayout";
import { setSelectedDriver } from "@/features/driverSlice";

const ConfirmRide = () => {
    const dispatch = useAppDispatch();
    // const { drivers, selectedDriver, setSelectedDriver } = useDriverStore();
    const { drivers, selectedDriver } = useAppSelector((state) => state.driverReducer);
    return (
        <RideLayout title={"Choose a Rider"} snapPoints={["65%", "85%"]}>
            <FlatList
                data={drivers}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <DriverCard
                        item={item}
                        selected={selectedDriver!}
                        setSelected={() => dispatch(setSelectedDriver({ driverId: item.id }))}
                    />
                )}
                ListFooterComponent={() => (
                    <View className="mx-5 mt-10">
                        <CustomButton
                            title="Select Ride"
                            onPress={() => router.push("/(root)/book-ride")}
                        />
                    </View>
                )}
            />
        </RideLayout>
    );
};

export default ConfirmRide;
