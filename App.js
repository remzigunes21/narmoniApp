import React from 'react';
import {Easing, Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomHeader} from '@Components';
import {Colors, Screen} from './app/theme';

import Login from '.app/screens/Authentication/Login';
import ForgotPassword from './app/screens/Authentication/ForgotPassword';

import Home from './app/screens/Main/Home ';
import ProductDetail from '@Screens/Main/ProductDetail';
import ProductDetailFromLocal from '@Screens/Main/ProductDetail/fromLocal';

import SharedList from '@Screens/Main/SharedList';
import Settings from '@Screens/Main/Settings';

////////////////////Continer

import ListActionsModal from './app/Containers/Modals/ListActionsModal';
import ProductImageModal from './app/Containers/Modals/ProductImageModal';
import SelectListModal from './app/Containers/Modals/SelectListModal';
import EditPurchaseModal from './app/Containers/Modals/EditPurchaseModal';
import ChangeSkuAmountModal from './app/Containers/Modals/ChangeSkuAmountModal';
import WhyNarmoniModal from './app/Containers/Modals/WhyNarmoniModal';
import ReplacedSkuModal from './app/Containers/Modals/ReplacedSkuModal';
import AreYouSureModal from './app/Containers/Modals/AreYouSureModal';
import ChangePasswordModal from './app/Containers/Modals/ChangePasswordModal';
import PurchasedProductsPage from './app/Containers/PurchasedProductsPage';
///////////////////Container

import ProfileSettings from './app/Screens/Main/Settings/ProfileSettings';

import LocationSettings from './app/Screens/Main/Settings/LocationSettings';
import BottomTabBar from '@Components/BottomTabBar';

import MyList from './app/Screens/Main/MyList';
import Search from './app/Screens/Main/Search/Search';
import MarketFilterModal from './app/Screens/Main/Search/MarketFilterModal';
import SortModal from './app/Screens/Main/Search/SortModal';
import ScanBarcode from './app/Screens/Main/Search/ScanBarcode';
import WebViews from '../../Screens/Main/Webview/index';
import KeyChainScreen from '../../Screens/BuyForMe/KeyChainScreen';

const HomeStack = createStackNavigator();

const ListStack = createStackNavigator();

const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MainTabs = createBottomTabNavigator();

const AuthStack = createStackNavigator();

const RootStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator mode="modal">
      <HomeStack.Screen name="Home" component={Home} options={() => ({})} />
      <HomeStack.Screen name="Home" component={Home} options={() => ({})} />
      <HomeStack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={() => ({})}
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

const ListStackNavigator = () => {
  return (
    <ListStack.Navigator mode="modal">
      <ListStack.Screen name="List" component={MyList} options={() => ({})} />
      <ListStack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={() => ({
          gesturesEnabled: true,
          gestureDirection: 'horizontal',
          gestureResponseDistance: {horizontal: 300},
        })}
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
    </ListStack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator mode="modal">
      <SearchStack
        name="Search"
        component={Search}
        options={() => ({headerShown: false})}
      />
      <SearchStack
        name="SearchBarcode"
        component={SearchBarcode}
        options={() => ({})}
      />
      <SearchStack
        name="SearchMarketFilterModal"
        component={SearchMarketFilterModal}
        options={() => ({headerShown: false})}
      />
      <SearchStack
        name="SortModal"
        component={SortModal}
        options={() => ({headerShown: false})}
      />
      <SearchStack
        name="ProductDetail"
        component={ProductDetail}
        options={() => ({
          gesturesEnabled: true,
          gestureDirection: 'horizontal',
          gestureResponseDistance: {horizontal: 300},
        })}
      />
      <SearchStack
        name="ProductDetailFromLocal"
        component={ProductDetailFromLocal}
        options={() => ({
          gesturesEnabled: true,
          gestureDirection: 'horizontal',
          gestureResponseDistance: {horizontal: 300},
        })}
      />
      <SearchStack
        name="ProductImageModal"
        component={ProductImageModal}
        options={() => ({headerShown: false})}
      />
    </SearchStack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="PurchasedProductsPage"
        component={PurchasedProductsPage}
        options={() => ({})}
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
        options={() => ({})}
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
    <MainTabs.Navigator tabBar={props => <BottomTabBar {...props} />}>
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
        options={() => ({headerTitle: "Şifremi Unuttum'"})}
      />
    </AuthStack.Navigator>
  );
};

const CreateMainNavigator = initialRouteName => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        mode="card"
        headerMode="none"
        initialRouteName={initialRouteName}>
        <RootStack.Screen
          name="Auth"
          component={AuthStackNavigator}
          options={() => ({})}
        />
        <RootStack.Screen
          name="Main"
          component={MainTabsNavigator}
          options={() => ({})}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export const createNavigator = initialRouteName =>
  CreateMainNavigator(initialRouteName);
