import React from 'react'
import {View,Text, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import data from '../../const/data';

export default class GoodChart extends React.Component{
    state = {
        foodChart:[]
    }
    componentDidMount(){
        this.setState({foodChart:data[this.props.route.params.selectedCategoryIndex][this.props.route.params.pet.id - 1][0]})
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
                <Text style={{color:"orange",fontWeight:"bold",fontSize:22}}>{this.state.foodChart[0]}</Text>

                <Text style={{color:"black",fontWeight:"bold"}}>{this.state.foodChart[1]}</Text>
                <Text style={{width:"90%"}}>{this.state.foodChart[2]}</Text>
                
                <Text style={{color:"black",fontWeight:"bold",marginTop:20}}>{this.state.foodChart[3]}</Text>
                <Text style={{width:"90%"}}>{this.state.foodChart[4]}</Text>


                
                <Text style={{color:"black",fontWeight:"bold",marginTop:20}}>{this.state.foodChart[5]}</Text>
                <Text style={{width:"90%"}}>{this.state.foodChart[6]}</Text>





                <Text style={{color:"black",fontWeight:"bold",marginTop:20}}>{this.state.foodChart[7]}</Text>
                <Text style={{width:"90%"}}>{this.state.foodChart[8]}</Text>




                <Text style={{color:"black",fontWeight:"bold",marginTop:20}}>{this.state.foodChart[9]}</Text>
                <Text style={{width:"90%"}}>
                {this.state.foodChart[10]}

                </Text>



                <Text style={{color:"black",fontWeight:"bold",marginTop:20}}>{this.state.foodChart[11]}</Text>
                <Text style={{width:"90%"}}>
                {this.state.foodChart[12]}

                </Text>



                <Text style={{color:"black",fontWeight:"bold",marginTop:20}}>{this.state.foodChart[13]}</Text>
                <Text style={{width:"90%"}}>
                {this.state.foodChart[14]}


                </Text>




                <Text style={{color:"black",fontWeight:"bold",marginTop:20}}>{this.state.foodChart[15]}</Text>
                <Text style={{width:"90%"}}>
                {this.state.foodChart[16]}

                </Text>

                </View>
                </ScrollView>

            </View>
        )
    }
}