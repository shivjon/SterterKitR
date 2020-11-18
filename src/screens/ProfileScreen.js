import  React , {useState} from 'react';
import {StyleSheet, View, ScrollView, Text, KeyboardAvoidingView, TouchableOpacity,TouchableHighlight, Image, StatusBar, TextInput, Modal } from 'react-native';
// import { TextInput  } from 'react-native-paper';
// import { Icon } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
const ProfileScreen = (props) => {
  const [text, setText] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [focus, setFocus] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [photo, setPhoto] = useState('')

  const chooseFile = async () => {

    // var options = {
    //     title: 'Select Image',

    //     storageOptions: {
    //         skipBackup: true,
    //         path: 'images',
    //     },
    // };
    // ImagePicker.showImagePicker(options, response => {
    //     if (response.didCancel) {
    //         console.log('User cancelled image picker');
    //     } else if (response.error) {
    //         console.log('ImagePicker Error: ', response.error);
    //     } else {
    //         let source = response;
    //        // setLogophoto(source.uri);
    //         console.log('source', source.uri);
    //         getBase64(source);
    //     }
    // });

    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
     console.log('Response = ', response.uri);
     setPhoto(response.uri)
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        // alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', response.uri);
      }
    });
}

const launchCamera = () => {
  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.launchCamera(options, (response) => {
    console.log('Response = ', response.uri);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      // alert(response.customButton);
    } else {
      const source = { uri: response.uri };
      // console.log('response', JSON.stringify(response));
      // this.setState({
      //   filePath: response,
      //   fileData: response.data,
      //   fileUri: response.uri
      // });
    }
  });

}


  return (
    <View style={{ flex: 1,backgroundColor:'#fff'  }}>
        {/* <StatusBar backgroundColor="#ccee"  translucent={false} visible={true}  /> */}
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
           <Text style={styles.modalText}>Choose</Text>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',marginVertical:20}}>
                <TouchableOpacity style={{marginHorizontal:40}} onPress={()=>{launchCamera()}}>
                <Icon name={'camera'} size={50} color={'#757575'} />
                <Text style={{textAlign:'center', letterSpacing:1,marginTop:10,fontSize:18}}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginHorizontal:40}} onPress={()=>{chooseFile()}}>
                <Icon name={'image'} size={50} color={'#757575'} />
                <Text  style={{textAlign:'center', letterSpacing:1,marginTop:10,fontSize:18}}>Gallery</Text>
                </TouchableOpacity>
            </View>
          <TouchableOpacity  style={{width:'100%'}}  onPress={() => {
                setModalVisible(!modalVisible);
              }}>
            <Text style={[styles.modalText,{textAlign:'right', paddingTop:10}]}>CANCEL</Text>
            </TouchableOpacity> 
            {/* <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight> */}
          </View>
        </View>
      </Modal>
    <KeyboardAvoidingView style={{ flex: 1,backgroundColor:'#fff'   }} >

      <ScrollView >
      <View style={styles.drawer}>
                    <TouchableOpacity onPress={()=>{setModalVisible(!modalVisible);}} style={styles.drawerIcon}>
                    <Icon name={'camera'} size={50} style={{ position: 'absolute', }} color={'#ebebeb'} />
                    { photo ?
                        <Image
                            source={{ uri: photo}}
                            resizeMode='cover'
                            style={{ width: 150, height: 150, borderRadius: 150 / 2 }}
                        />
                      : null }
                       <View style={{position:'absolute',right:'25%',bottom:'25%'}}>                         
                         <Icon name={'camera'} size={30} style={{ position: 'absolute', }} color={'#204482'} />
                       </View>

                    </TouchableOpacity>
                </View>
            <View style={{marginHorizontal:20,borderColor:focus ? '#204482' : '#000',borderWidth:2,borderRadius:5,marginVertical:50}}>
                <Text style={{color: focus ? '#204482' : '#000',  backgroundColor:'#fff',paddingHorizontal:10,marginTop:-10,width:155,marginHorizontal:10 }}>Tell people about you</Text>
                <TextInput
                     style={[{
                  backgroundColor: '#fff',height:120,textAlignVertical: "top",width:'100%',paddingHorizontal:10}]}
                    underlineColor="transparent"
                    mode="outlined"
                    // ref={()=>{}}
                    onFocus={()=> {setFocus(true)} }
                    onEndEditing={()=>{setFocus(false)}}
                    label="Tell people about you"
                    multiline={true}
                    numberOfLines={6}
                    theme={{ colors: { primary: '#204482',underlineColor:'transparent',}}}
                 
                    // onChangeText={text => setText(text)}
                    
                />

              
            </View>
            <TouchableOpacity style={styles.signInButton} onPress={() => {}}>
              {

                <Text style={styles.signInText}>SIGN UP</Text>
              }
            </TouchableOpacity>
    
      </ScrollView>
    </KeyboardAvoidingView>
  </View>
  );
};

const styles = StyleSheet.create({
    drawer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'15%'
        // height: 130
    },
    signInText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center'
  },
    signInButton: {
      height: 45,
      marginTop: '10%',
      backgroundColor:'#204482',
      justifyContent: 'center',
      borderRadius: 5,
      alignItems:'center',
      marginHorizontal:20,
  },
    drawerIcon: {
        width: 150,
        height: 150,
        // backgroundColor: '#ccee',
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:1
    },
    input: {
       
        justifyContent: 'flex-start',
        alignItems: "flex-start",
    
        // height:40,
        fontSize: 16,
        borderBottomWidth: 1,
      //  borderBottomColor: colors.greyLite
        // backgroundColor:"blue"
    },  
 centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 3,
  padding: 25,
  paddingBottom:10,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  width:'80%',
  // height:'40%',
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5
},
openButton: {
  backgroundColor: "#F194FF",
  borderRadius: 20,
  padding: 10,
  elevation: 2
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},
modalText: {
  marginBottom: 10,
  textAlign: "left",
  width:'100%',
  fontSize:20,
  color:'#204482',
  letterSpacing:1,
  
}
});

export default ProfileScreen;