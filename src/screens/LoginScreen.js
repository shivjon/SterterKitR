import  React , {useState} from 'react';
import {StyleSheet, View, ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, Image, StatusBar } from 'react-native';
import { TextInput  } from 'react-native-paper';
// import { Icon } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
const LoginScreen = (props) => {
  const [text, setText] = useState('');
   const [showPassword, setShowPassword] = useState(true)
  return (
    <View style={{ flex: 1,backgroundColor:'#fff'  }}>
        <StatusBar backgroundColor="#fff"   barStyle="dark-content"  />
    <KeyboardAvoidingView style={{ flex: 1,backgroundColor:'#fff'   }} >

      <ScrollView >
        <View style={styles.container}>
          {/* <LoadingModal isLoading={isLoading} /> */}
          <View style={styles.logoView}>
          <Image
          source={require('../assets/logo.png')}
            style={{
              height: 200,  width: 200, 
             marginLeft:-20,
              
            }}
          />
          </View>
          {/* <Text style={styles.subTitle}>Nblik</Text> */}
          <Text style={styles.title}>Login To Continue</Text>
          <View style={styles.fieldView}>
          
         
            <View style={{}}>
                <TextInput
                    // selectionColor='#ccee'
                    underlineColor="transparent"
                    style={{ backgroundColor: '#fff',}}
                    mode="outlined"
                    outlineColor="#204482"
               
                    label="Email"
                    theme={{backgroundColor:'#fff', colors: { primary: '#204482',underlineColor:'transparent',}}}
                    // value={text}
                    // direction ='ltr'
                    // onChangeText={text => setText(text)}
                    left={<TextInput.Icon name={() => <Icon name={'user-o'} size={20} />} />}
                    // left={{}
                    //     // <TextInput.Icon
                    //     //     name="planet"
                    //     // />
                    // }
                />
              <View style={{marginVertical:12}}/>  
            <TextInput
                    style={{ backgroundColor: '#fff',}}
                    underlineColor="transparent"
                    mode="outlined"
                    label="Password"
                    theme={{ colors: { primary: '#204482',underlineColor:'transparent',}}}
                    secureTextEntry={showPassword}
                    right={<TextInput.Icon name={() => <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} />} onPress={()=>{setShowPassword(!showPassword)}} />}
                    left={<TextInput.Icon name={() => <Icon name={'lock'} size={20} />} />}
                    // value={text}
                    // direction ='ltr'
                    // onChangeText={text => setText(text)}
                    
                />
          
            </View>
            {/* <View style={styles.textInput}> */}
              {/* <Image source={require('../../resources/images/lock.png')} />
              <TextInput style={styles.input} secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} placeholder="password" /> */}
            {/* </View> */}
            {/* <TouchableOpacity onPress={() => props.navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPassText}>Forgot Password ?</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.signInButton} onPress={() => props.navigation.navigate('ProfileScreen')}>
              {

                <Text style={styles.signInText}>LOGIN</Text>
              }
            </TouchableOpacity>
            {/* <Text style={[styles.title, { textAlign: 'center' }]}>----- OR -----</Text> */}
            <TouchableOpacity style={[styles.signInButton, { backgroundColor: '#fff',marginTop:20,borderWidth:.3, flexDirection:'row', alignItems:'center'}]} onPress={() => {props.navigation.navigate('RegistrationScreen')}} >
                
            <Icon style={{position:'absolute',left:10}} name="envelope-o" size={25} color="#204482" />
            <Text style={{textAlign:'center', color:'#204482'}} > SIGNUP WITH EMAIL </Text>
              {/* <Image style={{ height: 45, borderRadius: 10, width: Dimensions.get('window').width - 60 }} source={require('../../resources/images/fb_btn.png')} /> */}
            </TouchableOpacity>

         
            <TouchableOpacity style={[styles.signInButton, { backgroundColor: '#fff',marginTop:20,borderWidth:.3,flexDirection:'row', marginBottom:10, alignItems:'center'}]}  >
            <Image
          source={{uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png'}}
            style={{
              height: 25,  width: 25,  resizeMode: 'contain',
              position:'absolute',left:10
            }}
          />
                {/* <Icon style={{}} name="envelope-o" size={25} color="#204482" /> */}
                <Text style={{textAlign:'center', color:'#204482',}} > SIGNUP WITH GOOGLE </Text>
                  {/* <Image style={{ height: 45, borderRadius: 10, width: Dimensions.get('window').width - 60 }} source={require('../../resources/images/fb_btn.png')} /> */}
                </TouchableOpacity>
    

          </View>
          {/* <TouchableOpacity onPress={() =>{}}>
            <Text style={[styles.forgotPassText, { textAlign: 'center', marginTop: 30, marginBottom: 20, fontWeight: 'bold' }]}>
              {`Don't have an account? - `}
              <Text style={{ }}>
                Sign Up
        </Text>
            </Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: '#fff'
    },
    logoView: {
        // marginTop: Platform.OS == 'android' ? 40 : 60, 
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height:100
    },
    fieldView: {
        marginTop: 30,
        marginHorizontal: 20
    },
    subFieldText: {
        fontSize: 16,
        marginTop: 10
    },
    textInput: {
        // height: 45,
        marginTop: 10,
        // borderRadius: 10,
        // borderColor: 'white',
        // backgroundColor: 'white',
        borderWidth: 1,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {marginLeft: 10, flex: 1, height: 40},
    title: {
        fontSize: 22,
        marginTop: 20,
        textAlign:'center',
        fontWeight:"100",
        color:'#000',
        fontWeight:'bold'
    },
    subTitle: {
        fontSize: 30,
        textAlign: 'center',
        marginTop:7,
        color:'#204482',
        letterSpacing:2,
        fontWeight: 'bold',
        
    },
    signInButton: {
        height: 45,
        marginTop: '30%',
        backgroundColor:'#204482',
        justifyContent: 'center',
        borderRadius: 5,

    },
    signInText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    forgotPasswordContainer: {flexDirection: 'row', marginHorizontal: 30, marginTop: 20, alignItems: 'center'},
    forgotPassText: { fontSize: 16, textAlign: 'right', marginTop: 20,},
    popUpView: {
        
        flex: 1,
        backgroundColor: 'black',
        borderWidth: 0,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowOpacity: Platform.OS === 'ios' ? 0.1 : .1,
        opacity: 0.5,
        justifyContent: 'center'
      }

});

export default LoginScreen;