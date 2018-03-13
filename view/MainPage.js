import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    FlatList,
} from 'react-native';
// var REQUEST_URL = 'http://busintime.id:6001/';
const REQUEST_URL = 'https://api.github.com/search/repositories?q=javascript&sort=stars';
class MainPage extends Component{
  constructor(props){
    super(props);
    this.state = {
     sourceData:[],
     refreshing: false, //初始化不刷新
     text: '',//跳转的行
     isLoading: true,
      error: false,//网络请求状态
      errorInfo: "",
   };
  }
  static navigationOptions = ({navigation,screenProps}) =>({
    headerTitle:navigation.state.params.key,
    hearderBackTitle:null,
    headerStyle:styles.headerStyle,
    headerTitleStyle:styles.headerTitleStyle,
  });
  //网络请求
    fetchData() {
        //这个是js的访问网络的方法
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                let data = responseData.items;
                let dataBlob = [];
                let i = 0;
                data.map(function (item) {
                    dataBlob.push({
                        key: i,
                        value: item,
                    })
                    i++;
                });
                this.setState({
                    //复制数据源
                    sourceData: dataBlob,
                    isLoading: false,
                });
                data = null;
                dataBlob = null;
            })
            .catch((error) => {
                this.setState({
                    error: true,
                    errorInfo: error
                })
            })
            .done();
    }
    componentDidMount() {
           //请求数据
           this.fetchData();
       }

  _header = ()=>{
    return (
       <Text style={{fontWeight: 'bold', fontSize: 12}}>最新文章</Text>
     );
  }
  _footer = () =>{
    return (
    <Text style={{fontSize: 14, alignSelf: 'center'}}>到底啦，没有啦！</Text>
  );
  }
  _divide = () =>{
    return (
    <View style={{height: 1, backgroundColor: 'skyblue'}}/>
   );
  }
  //指定唯一的key值
  _keyUnique = (item,index)=>index;

  itemClick(item, index) {
   alert('点击了第' + index + 'xiang');
 }
  _renderItem = (item)=>{
    return (
            <View>
                <Text style={styles.title}>name: {item.name} </Text>
                <Text style={styles.content}>description: {item.description}</Text>
            </View>
        );
  }

  scrollToEnd = () =>{
    this._flatList.scrollToEnd();
  }

  render(){
    return (
      <View style = {styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end',backgroundColor: '#4398ff'}}>
           <Button title="跳转到底部" onPress={this.scrollToEnd}/>
        </View>
        <FlatList
        ref={(flatList) => this._flatList = flatList}
        data = {this.state.sourceData}
        // ListHeaderComponent = {this._header}
        ListFooterCpmponent = {this._footer}
        ItemSeparatorComponent = {this._divide}
        keyExtractor={this._keyUnique}
        //指定item的高度
        getItemLayout={(data, index) => ( {length: 84, offset: (44 + 1) * index, index} )}
        renderItem={this._renderItem}
       />
      {/* <TouchableOpacity style = {styles.button}
      activeOpacity = {0.5}
      onPress = {() =>{
        this.props.navigation.navigate('Login')
      }}>
      <Text style={{color: 'white'}}>带参数跳转至Login页面</Text>
      </TouchableOpacity> */}

      </View>
    );
  }
}

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          paddingTop:12,
          flexDirection:'column',
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
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
      title: {
        fontSize: 15,
        color: 'blue',
    },
    content: {
        fontSize: 15,
        color: 'black',
    }
  });
export default  MainPage;
