import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

class Exercise extends React.PureComponent{
    shouldComponentupdate(nextprops){
        if(nextprops.item !== this.props.item){
            return true
        } else { return false}
    }
    render(){
        return(
            <View style={{margin: 10}}>
                <Text> Exercise Screen </Text>
                <Text style={{margin: 10}} >{this.props.route.params.item}</Text>
            </View>
        )
    }
}

export default Exercise;