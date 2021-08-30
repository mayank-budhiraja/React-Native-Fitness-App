import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

class Routine extends React.PureComponent{
    shouldComponentupdate(nextprops){
        if(nextprops.item !== this.props.item){
            return true
        } else { return false}
    }
    render(){
        return(
                <View>
                    <Text> Routines Screen {this.props.route.params.item} </Text>
                    
                    <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Exercise', {item: this.props.route.params.item})
                    }}>
                        <Text style={{margin: 10}}> Next is exercise screen </Text>
                    </TouchableOpacity> 
                </View>
            
        )
    }
}

export default Routine