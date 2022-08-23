import React from 'react'
import {View,Text, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import data from '../../const/data';

export default class Medicines extends React.Component{
  state = {
    medicines:[]
}
componentDidMount(){
  this.setState({medicines:data[this.props.route.params.selectedCategoryIndex][this.props.route.params.pet.id - 1][2]})
}
    render(){
        return(
          <View style={{flex:1,}}>
          <View style={{flexDirection: 'row',
padding: 20,
justifyContent: 'space-between',}}>
     <Icon
       name="arrow-left"
       size={28}
       color={"black"}
       onPress={()=>this.props.navigation.goBack(null)}
     />
     <Icon name="dots-vertical" size={28} color={"black"} />
   </View>



         <ScrollView>

         <View style={{padding:20}}>
         <Text style={{color:"orange",fontWeight:"bold",fontSize:22}}>{this.state.medicines[0]}</Text>


         <Text style={{width:"90%"}}>{this.state.medicines[1]}</Text>
         <Text style={{width:"90%"}}>{this.state.medicines[2]}</Text>
         <Text style={{width:"90%"}}>{this.state.medicines[3]}</Text>
         <Text style={{width:"90%"}}>{this.state.medicines[4]}</Text>

         
         </View>
         </ScrollView>

     </View>
        )
    }
}