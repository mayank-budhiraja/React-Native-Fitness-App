import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

class Home extends React.PureComponent{
    shouldComponentupdate(nextprops){
        if(nextprops.item !== this.props.item){
            return true
        } else { return false}
    }
    
    render(){
        return(
            <>
                <View style={{marginBottom: 10}}>
                    <Text>My Home Screen</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Routine', {item: 'Routine1'})
                }}>
                    <Text style={{marginBottom: 10}}> Routine 1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Routine', {item: 'Routine2'})
                }}>
                    <Text style={{marginBottom: 10}}> Routine 2</Text>
                </TouchableOpacity>   
            </>
        )
    }
}

export default Home;