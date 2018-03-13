import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {value:''};
    userName = "";
    passWord = "";
  }

  static navigationOptions = ({navigation,screenProps}) =>({
    headerTitle:'Login',
    hearderBackTitle:null,
    headerStyle:styles.headerStyle,
    headerTitleStyle:styles.headerTitleStyle,
  });

//check username and password
  judgeLogin=()=>{
    // if(this.state.userName =="bob"&&this.state.passWord =="123"){
    //     this.props.navigation.navigate('MainPage',{key: 'MainPage'});
    //   alert("登录成功");
    // }else{
    //   alert("用户名或者密码有误");
    // }
    this.props.navigation.navigate('MainPage',{key: 'MainPage'});
}

  render(){
    return (
      <View style={{backgroundColor:'#f4f4f4',flex:1}}>
      <Image style = {styles.style_image} source={require('./image/login.png')}/>
      <TextInput
      style={styles.style_user_input}
      placeholder = "用户名"
      numberOfLines = {1}
      clearButtonMode = {'unless-editing'}
      textAlign='center'
      onChange={(event) => this.setState({userName: event.nativeEvent.text})}
      value={this.state.userName}
      />
      <View
          style={{height:1,backgroundColor:'#f4f4f4'}}
      />
      <TextInput
          style={styles.style_pwd_input}
          placeholder='密码'
          numberOfLines={1}
          secureTextEntry={true}
          textAlign='center'
          onChange={(event) => this.setState({passWord: event.nativeEvent.text})}
          value={this.state.passWord}
      />
      <TouchableOpacity
        onPress={this.judgeLogin}
        style={styles.style_view_commit}>
        <Text style={{color:'#fff'}}>
            登录
        </Text>
      </TouchableOpacity>
      </View>

    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#f4f4f4',
        alignItems:'center',
    },
    style_image: {
        borderRadius: 35,
        height: 70,
        width: 70,
        marginTop: 40,
        alignSelf: 'center',
    },
    button: {
        width: 240,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4398ff',
    },
    headerStyle: {
        backgroundColor: '#4398ff',
    },
    headerTitleStyle: {
        //标题的文字颜色
        color: 'white',
        //设置标题的大小
        fontSize: 18,
        //居中显示
        alignSelf: 'center',
    },
    style_user_input: {
        backgroundColor: '#fff',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        height: 35,
    },
    style_pwd_input: {
        backgroundColor: '#fff',
        marginLeft: 10,
        marginRight: 10,
        height: 35,
    },
    style_view_commit: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#63B8FF',
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

});
export default  Login;
