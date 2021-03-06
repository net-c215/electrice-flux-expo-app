import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Products from "./Products/Products";
import Login from "./Login";
import Signup from "./Signup";
import { useDispatch, useSelector } from "react-redux";
import Firebase from "../services/firebase";
import { resetLogin, userLoggedin } from "../reducers/authReducer";
import tw from "tailwind-react-native-classnames";
import ProductAction from "./Products/ProductAction";
import Services from "./Services/Services";
import ServiceAction from "./Services/ServiceAction";
import Settings from "./Settings";
import CreateInvoice from "./Invoice/CreateInvoice";
import BillPreviewScreen from "./BillPreview";

const Stack = createNativeStackNavigator();

const DrawerHeaderStyle = {
    drawerLableShow: false,
    headerStyle: {
        backgroundColor: "#7B61F8",
    },
    headerTintColor: "white",
};

export default function Screens() {
    const { isLogin } = useSelector((state) => state.loginReducer);
    // const [isLogin] = useState(true)
    const dispatch = useDispatch();

    // useEffect(() => {
    //     Firebase.auth().onAuthStateChanged((user) => {
    //         console.log(user);
    //         if (user) return dispatch(userLoggedin(user));
    //         return dispatch(resetLogin());
    //     });
    // }, [dispatch]);

    // useEffect(() => {
    //     console.log(isLogin);
    // }, [isLogin]);

    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    drawerActiveTintColor: "white",
                    drawerStyle: {
                        backgroundColor: "#9AC4F8",
                        width: 240,
                    },
                    headerBackTitle: "Back",
                }}
                initialRouteName="CreateInvoiceScreen"
            >
                <Stack.Screen
                    name="LoginScreen"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="SignupScreen"
                    component={Signup}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="HomeScreen" component={Home} />
                <Stack.Screen
                    name="CreateInvoiceScreen"
                    component={CreateInvoice}
                />
                <Stack.Screen name="ProductScreen" component={Products} />
                <Stack.Screen
                    name="ProductActionScreen"
                    component={ProductAction}
                />
                <Stack.Screen name="ServicesScreen" component={Services} />
                <Stack.Screen
                    name="ServiceActionScreen"
                    component={ServiceAction}
                />
                <Stack.Screen name="SettingsScreen" component={Settings} />
                <Stack.Screen name="BillPreviewScreen" component={BillPreviewScreen} />
            </Stack.Navigator>
        </>
    );
}
