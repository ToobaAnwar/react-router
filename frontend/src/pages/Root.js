import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout(){

    // for checking if we are currently waiting for data.
    // const navigation = useNavigation();
    return(
        <>
        <MainNavigation />
        <main>
            {/* { navigation.state === 'loading' && <p>Loading...</p> } */}
            <Outlet />
        </main>
        </>
    );
}

export default RootLayout;