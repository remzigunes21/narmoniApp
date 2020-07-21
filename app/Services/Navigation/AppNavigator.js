import React from 'react';
import {Easing, Animated, TouchableOpacity, Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
////////////////////Continer
import ListActionsModal from '../../Containers/Modals/ListActionsModal';
import ProductImageModal from '../../Containers/Modals/ProductImageModal';
import SelectListModal from '../../Containers/Modals/SelectListModal';
import EditPurchaseModal from '../../Containers/Modals/EditPurchaseModal';
import ChangeSkuAmountModal from '../../Containers/Modals/ChangeSkuAmountModal';
import WhyNarmoniModal from '../../Containers/Modals/WhyNarmoniModal';
import ReplacedSkuModal from '../../Containers/Modals/ReplacedSkuModal';
import AreYouSureModal from '../../Containers/Modals/AreYouSureModal';
import ChangePasswordModal from '../../Containers/Modals/ChangePasswordModal';
import PurchasedProductsPage from '../../Containers/PurchasedProductsPage';
///////////////////Container//////

//////////////////Screens/////////
import ProfileSettings from '../../Screens/Main/Settings/ProfileSettings';
import LocationSettings from '../../Screens/Main/Settings/LocationSettings';
import MyList from '../../Screens/Main/MyList';
import Search from '../../Screens/Main/Search/Search';
import MarketFilterModal from '../../Screens/Main/Search/MarketFilterModal';
import SortModal from '../../Screens/Main/Search/SortModal';
import ScanBarcode from '../../Screens/Main/Search/ScanBarcode';
import Login from '../../Screens/Authentication/Login';
import ForgotPassword from '../../Screens/Authentication/ForgotPassword';
import ProductDetailFromLocal from '../../Screens/Main/ProductDetail/fromLocal';
import Home from '../../Screens/Main/Home';
import ProductDetail from '../../Screens/Main/ProductDetail';
import SharedList from '../../Screens/Main/SharedList';
import Settings from '../../Screens/Main/Settings';
//////////////////Screens/////////
import BottomTabBar from '../../Components/BottomTabBar';
import {CustomHeader} from '../../Components/CustomHeader';
import {Screen, Colors, Images} from '../../Theme';
import {NrmHeader} from '../../Components';
import VendorPage from '../../Containers/ProductPreview/VendorPage';
import ProductPageColor from '../../Containers/ProductPages/ProductPageColor';
import SearchCategory from '../../Screens/Main/Search/SearchCategory';

const isSelect = false;

const HomeStack = createStackNavigator();

const ListStack = createStackNavigator();

const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MainTabs = createBottomTabNavigator();

const AuthStack = createStackNavigator();

const RootStack = createStackNavigator();

const HomeStackNavigator = ({navigation, route}) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <HomeStack.Navigator
      mode="modal"
      screenOptions={() => ({
        gesturesEnabled: true,
        gestureDirection: 'horizontal',
        gestureResponseDistance: {horizontal: 300},

        headerTintColor: Colors.GREY_DARK,
        headerBackTitle: 'Geri',
        headerStyle: {
          backgroundColor: Colors.WHITE,
        },
      })}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={() => ({headerShown: false})}
      />

      <HomeStack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={() => ({headerShown: false})}
      />
      <HomeStack.Screen
        name="ListActionsModal"
        component={ListActionsModal}
        options={() => ({})}
      />
      <HomeStack.Screen
        name="ProductImageModal"
        component={ProductImageModal}
        options={() => ({headerShown: false})}
      />
      <HomeStack.Screen
        name="SelectListModal"
        component={SelectListModal}
        options={() => ({})}
      />
      <HomeStack.Screen
        name="EditPurchaseModal"
        component={EditPurchaseModal}
        options={() => ({})}
      />
      <HomeStack.Screen
        name="Vendor"
        component={VendorPage}
        options={() => ({
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'vertical',
        })}
      />
      <HomeStack.Screen
        name="ChangeSkuAmountModal"
        component={ChangeSkuAmountModal}
        options={() => ({})}
      />
      <HomeStack.Screen
        name="ReplacedSkuModal"
        component={ReplacedSkuModal}
        options={() => ({})}
      />
    </HomeStack.Navigator>
  );
};

const ListStackNavigator = ({navigation, route}) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <ListStack.Navigator initialRouteName="List" mode="modal">
      <ListStack.Screen name="List" component={MyList} options={() => ({})} />
      <ListStack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({navigation}) => (
          {
            gesturesEnabled: true,
            gestureDirection: 'horizontal',
            gestureResponseDistance: {horizontal: 300},
            headerShown: false,

            // headerTintColor: Colors.GREY_COLOR_LIGHT,
            // headerStyle: {
            //   backgroundColor: Colors.GREY_LIGHT,
            // },

            // title: '',
            // headerStatusBarHeight: 60,
            // headerLeft: () => (
            //   <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            //     <Image
            //       source={Images.leftIcon}
            //       style={{width: 20, height: 20}}
            //       resizeMode="contain"
            //       style={{marginVertical: 12, marginHorizontal: 3}}
            //     />
            //   </TouchableOpacity>
            // ),

            // headerRight: () => (
            //   <View
            //     style={{
            //       flexDirection: 'row',

            //       justifyContent: 'center',
            //       alignItems: 'center',
            //     }}>
            //     <TouchableOpacity
            //       onPress={() => navigation.navigate('ProductImageModal')}>
            //       <Image
            //         source={Images.alertIcon}
            //         style={{width: 20, height: 20}}
            //         resizeMode="contain"
            //         style={{marginVertical: 12}}
            //       />
            //     </TouchableOpacity>

            //     <TouchableOpacity>
            //       <Image
            //         source={Images.heart}
            //         style={{width: 20, height: 20}}
            //         resizeMode="contain"
            //         style={{marginVertical: 12, marginHorizontal: 4}}
            //       />
            //     </TouchableOpacity>
            //   </View>
            // ),
          },
          ({navigation}) => {
            let tabBarVisible = true;
            let routeName =
              navigation.state.routes[navigation.state.index].routeName;

            if (routeName == 'ProductDetails') {
              tabBarVisible = false;
            }

            return {
              tabBarVisible,
            };
          }
        )}
      />

      <ListStack.Screen
        name="ListActionsModal"
        component={ListActionsModal}
        options={() => ({})}
      />
      <ListStack.Screen
        name="ProductImageModal"
        component={ProductImageModal}
        options={() => ({headerShown: false})}
      />
      <ListStack.Screen
        name="SelectListModal"
        component={SelectListModal}
        options={() => ({})}
      />
      <ListStack.Screen
        name="EditPurchaseModal"
        component={EditPurchaseModal}
        options={() => ({})}
      />
      <ListStack.Screen
        name="ChangeSkuAmountModal"
        component={ChangeSkuAmountModal}
        options={() => ({})}
      />
      <ListStack.Screen
        name="ReplacedSkuModal"
        component={ReplacedSkuModal}
        options={() => ({})}
      />
      <ListStack.Screen
        name="ProductPageColor"
        component={ProductPageColor}
        options={() => ({headerShown: false})}
      />
    </ListStack.Navigator>
  );
};

const SearchStackNavigator = ({navigation, route}) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <SearchStack.Navigator mode="modal">
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={() => ({headerShown: false})}
      />
      <SearchStack.Screen
        name="SearchBarcode"
        component={ScanBarcode}
        options={() => ({})}
      />
      <SearchStack.Screen
        name="SearchMarketFilterModal"
        component={MarketFilterModal}
        options={() => ({headerShown: false})}
      />
      <SearchStack.Screen
        name="SortModal"
        component={SortModal}
        options={() => ({headerShown: false})}
      />
      <SearchStack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={() => ({
          gesturesEnabled: true,
          gestureDirection: 'horizontal',
          gestureResponseDistance: {horizontal: 300},
        })}
      />
      <SearchStack.Screen
        name="ProductDetailFromLocal"
        component={ProductDetailFromLocal}
        options={() => ({
          gesturesEnabled: true,
          gestureDirection: 'horizontal',
          gestureResponseDistance: {horizontal: 300},
        })}
      />

      <SearchStack.Screen
        name="ProductImageModal"
        component={ProductImageModal}
        options={() => ({headerShown: false})}
      />
      <SearchStack.Screen
        name="SearchCategory"
        component={SearchCategory}
        options={() => ({headerShown: false})}
      />
    </SearchStack.Navigator>
  );
};

const ProfileStackNavigator = ({navigation, route}) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="PurchasedProductsPage"
        component={PurchasedProductsPage}
        options={() => ({
          title: '',
          headerLeft: () => (
            <NrmHeader
              onBack={() => navigation.navigate('Home')}
              iconName="chevron-left"
              iconSize={32}
              iconColor={Colors.GREY_COLOR_LIGHT}
              iconType="FontAwesome5"
            />
          ),
        })}
      />
      <ProfileStack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={() => ({
          gesturesEnabled: true,
          gestureDirection: 'horizontal',
          gestureResponseDistance: {horizontal: 300},
        })}
      />
      <ProfileStack.Screen
        name="Settings"
        component={Settings}
        options={() => ({})}
      />
      <ProfileStack.Screen
        name="ProfileSettings"
        component={ProfileSettings}
        options={({navigation}) => ({
          title: '',
          gestureDirection: 'vertical',
          headerLeft: () => (
            <NrmHeader
              onBack={() => navigation.pop()}
              iconName="chevron-left"
              iconSize={32}
              iconColor={Colors.GREY_COLOR_LIGHT}
              iconType="FontAwesome5"
            />
          ),
        })}
      />
      <ProfileStack.Screen
        name="LocationSettings"
        component={LocationSettings}
        options={() => ({})}
      />
      <ProfileStack.Screen
        name="AreYouSureModal"
        component={AreYouSureModal}
        options={() => ({})}
      />
      <ProfileStack.Screen
        name="ChangePasswordModal"
        component={ChangePasswordModal}
        options={() => ({})}
      />
      <ProfileStack.Screen
        name="WhyNarmoniModal"
        component={WhyNarmoniModal}
        options={() => ({})}
      />
      <ProfileStack.Screen
        name="EditPurchaseModal"
        component={EditPurchaseModal}
        options={() => ({headerShown: false})}
      />
    </ProfileStack.Navigator>
  );
};

const MainTabsNavigator = () => {
  return (
    <MainTabs.Navigator
      tabBarOptions={() => ({})}
      screenOptions={({navigation}) => ({})}
      tabBar={props => <BottomTabBar {...props} />}>
      <MainTabs.Screen
        name="Home"
        component={HomeStackNavigator}
        options={() => ({})}
      />

      <MainTabs.Screen
        name="Search"
        component={SearchStackNavigator}
        options={() => ({})}
      />
      <MainTabs.Screen
        name="MyList"
        component={ListStackNavigator}
        options={() => ({})}
      />
      <MainTabs.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={() => ({})}
      />
    </MainTabs.Navigator>
  );
};

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={() => ({headerTitle: 'Şifremi Unuttum'})}
      />
    </AuthStack.Navigator>
  );
};

const Navigation = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  return (
    <>
      <RootStack.Navigator mode="card" headerMode="none">
        {isLogin ? (
          <RootStack.Screen name="Main" component={MainTabsNavigator} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthStackNavigator} />
        )}
      </RootStack.Navigator>
    </>
  );
};

export default Navigation;

// const SCREEN_NAMES = {
//   //Stacks name
//   Main: 'Main',

//   Auth: 'Auth',
//   //Screens name

//   Home: 'Home',
//   Profile: 'Profile',
//   MyList: 'MyList',
//   Search: 'Search',
//   EditPurchaseModal: 'EditPurchaseModal',
//   WhyNarmoniModal: 'WhyNarmoniModal',
//   ChangePasswordModal: 'ChangePasswordModal',
//   AreYouSureModal: 'AreYouSureModal',
//   LocationSettings: 'LocationSettings',
//   Webview: 'Webview',
//   ProfileSettings: 'ProfileSettings',
//   Settings: 'Settings',
//   PurchasedProductsPage: 'PurchasedProductsPage',
//   Login: 'Login',
//   ProductImageModal: 'ProductImageModal',
//   ForgotPassword: 'ForgotPassword',
//   ProductDetailFromLocal: 'ProductDetailFromLocal',
//   ProductDetail: 'ProductDetail',
//   SortModal: 'SortModal',
//   ReplacedSkuModal: 'ReplacedSkuModal',
//   ListActionsModal: 'ListActionsModal',
//   SelectListModal: 'SelectListModal',
//   Vendor: 'Vendor',
//   SearchBarcode: 'SearchBarcode',
//   ChangeSkuAmountModal: 'ChangeSkuAmountModal',
//   SearchCategory: 'SearchCategory',
//   SearchMarketFilterModal: 'SearchMarketFilterModal',
// };
// export {SCREEN_NAMES};
