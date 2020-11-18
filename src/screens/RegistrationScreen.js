import  React , {useState} from 'react';
import {StyleSheet, View, ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import { TextInput  } from 'react-native-paper';
// import { Icon } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
const RegistrationScreen = (props) => {
  const [text, setText] = useState('');
   const [showPassword, setShowPassword] = useState(true)
  return (
    <View style={{ flex: 1,backgroundColor:'#fff'  }}>
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
          <Text style={styles.title}>Sign up to Continue</Text>

          <View style={styles.fieldView}>
          
         
            <View style={{}}>
                <TextInput
                    // selectionColor='#ccee'
                    underlineColor="transparent"
                    style={{ backgroundColor: '#fff',}}
                    mode="outlined"
                    outlineColor="#204482"
               
                    label="First Name"
                    theme={{backgroundColor:'#fff', colors: { primary: '#204482',underlineColor:'transparent',}}}
                    // value={text}
                    // direction ='ltr'
                    // onChangeText={text => setText(text)}
                    // left={<TextInput.Icon name={() => <Icon name={'user-o'} size={20} />} />}
               
                />
              <View style={{marginVertical:12}}/>  
              <TextInput
                    // selectionColor='#ccee'
                    underlineColor="transparent"
                    style={{ backgroundColor: '#fff',}}
                    mode="outlined"
                    outlineColor="#204482"
               
                    label="Last Name"
                    theme={{backgroundColor:'#fff', colors: { primary: '#204482',underlineColor:'transparent',}}}
                    // value={text}
                    // direction ='ltr'
                    // onChangeText={text => setText(text)}
                    // left={<TextInput.Icon name={() => <Icon name={'user-o'} size={20} />} />}
                  
                />
             <View style={{marginVertical:12}}/>  
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
                    // left={<TextInput.Icon name={() => <Icon name={'user-o'} size={20} />} />}
                />
            </View>
           
            <TouchableOpacity style={styles.signInButton} onPress={() => {props.navigation.navigate('ProfileScreen')}}>
              {

                <Text style={styles.signInText}>Continue</Text>
              }
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
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height:120,
        width:120
    },
    fieldView: {
        marginTop: 40,
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
        marginLeft: 20,
        textAlign:'left',
        fontWeight: "bold",
        color:'#000'
    },
    subTitle: {
        fontSize: 30,
        textAlign: 'left',
        marginTop:7,
        color:'#204482',
        paddingHorizontal:20,
        letterSpacing:2,
        fontWeight: 'bold',
        
    },
    signInButton: {
        height: 45,
        marginTop: '20%',
        backgroundColor:'#204482',
        justifyContent: 'center',
        borderRadius: 5,

    },
    signInText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        // fontWeight:'bold',
        letterSpacing:1,
        textTransform:'uppercase',
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

export default RegistrationScreen;