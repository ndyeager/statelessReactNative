// <Button onPress={() => this.setState({swipeToClose: !this.state.swipeToClose})} style={styles.btn}>Disable swipeToClose({this.state.swipeToClose ? "true" : "false"})</Button>
<View style={styles.container}>
  <StatusBar barStyle="dark-content" />
<Text style={styles.welcome}>Welcome User!</Text>
<View>
  <Image
    style={{width: 150, height: 150, borderRadius: 75}}
    source={{uri: this.state.profile_picture}}
  />
</View>
<Text style={styles.subtext}>Your token is: </Text>
<Text style={styles.instructions}>{this.state.token}</Text>
<TouchableHighlight
  style={{
    backgroundColor:'#e74c3c',
    justifyContent: 'center',
    alignItems:'center',
    height:40,
    width:380,
    borderRadius : 4
  }}
  onPress={this.onLogoutPressed.bind(this)}
  >
  <Text style={{color:'white'}}>Log Out</Text>
</TouchableHighlight>
</View>



class Overlay extends Component {
  render(){
    return(
      <View style={styles.background}>
        {this.props.children}
      </View>
    );
  }
}
