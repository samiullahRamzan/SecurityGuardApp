import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/Feather";
import Icon4 from "react-native-vector-icons/FontAwesome5";

const Bottom=createBottomTabNavigator();
// screens
import HomeScreen from "../BottomTabScreens/Home";
import ChatScreen from "../BottomTabScreens/Chat";
import CreateTaskScreen from "../BottomTabScreens/CreateTask";
import ServicesScreen from "../BottomTabScreens/Services";
import ProfileScreen from "../BottomTabScreens/Profile";

export const BottomNavigator=()=>{
    return(
    <Bottom.Navigator   screenOptions= {{
                                        "tabBarActiveTintColor": "#4D4545",
                                        "tabBarStyle": [
                                            {
                                             "display": "flex"
                                            }
                                        ],
                                        // "tabBarLabelStyle":{
                                        //     'fontWeight':'bold'
                                        // }
                                        }}>
    <Bottom.Screen 
      name="Home" 
      component={HomeScreen}
      options={{headerShown:false,
                tabBarIcon: (tabinfo) => {
                         return(     
                         <Icon name="home" size={25}/>  
                          );
                                  }
               }}        
     /> 

    <Bottom.Screen 
      name="Chat" 
      component={ChatScreen} 
      options={{headerShown:false,
                tabBarIcon: (tabinfo) => {
                         return(     
                         <Icon1 name="chatbubble-ellipses-outline" size={25}/>  
                          );
                                  }
             }}        
     /> 
     <Bottom.Screen 
      name="CreateTask" 
      component={CreateTaskScreen}   
      options={{headerShown:false,
                tabBarLabelStyle:{'display':'none'},
                tabBarIcon: () => {
                         return(
                         <Icon4 name="plus-circle" size={40}/>  
                          );
                }
             }}        
     />
     
     <Bottom.Screen 
      name="Services" 
      component={ServicesScreen} 
      options={{headerShown:false,
                tabBarIcon: () => {
                        return(
                        <Icon2 name="dots-grid" size={25}/>  
                        );
                  }
               }}
     />           


      <Bottom.Screen 
      name="Profile" 
      component={ProfileScreen}   
      options={{headerShown:false,
                tabBarIcon: () => {
                         return(
                         <Icon3 name="user" size={25}/>  
                          );
                                  }
             }}        
     />  
    
    </Bottom.Navigator>

    )
}