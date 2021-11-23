import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Landingpage from "../screens/landingpage";
import Infopage from "../screens/infoscreen";
import Settingpage from "../screens/settings";



const screens = {
  Landing: {
    screen: Landingpage
  },
  Info:{
    screen: Infopage
  },
  Settings:{
    screen: Settingpage
  }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack)