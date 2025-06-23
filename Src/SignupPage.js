import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from './constants/colors';
import Fonts from './constants/fonts';

const SignupPage = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require('./assets/carpet.webp')}
          style={styles.topImage}
        />

        <View style={styles.formContainer}>
          <Text style={styles.helloText}>Hello</Text>
          <Text style={styles.createText}>
            CREATE AN <Text style={styles.accountText}>ACCOUNT</Text>
          </Text>

          <View style={styles.fieldWrapper}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Jone Jacob"
              placeholderTextColor={Colors.textGrey}
            />
          </View>

          <View style={styles.fieldWrapper}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="jonejacob@gmail.com"
              keyboardType="email-address"
              placeholderTextColor={Colors.textGrey}
            />
          </View>

          <View style={styles.fieldWrapper}>
            <Text style={styles.label}>Mobile Number</Text>
            <TextInput
              style={styles.input}
              placeholder="+91 - 6549874665"
              keyboardType="phone-pad"
              placeholderTextColor={Colors.textGrey}
            />
          </View>

          <View style={styles.fieldWrapper}>
            <Text style={styles.label}>New Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="********"
                secureTextEntry={!passwordVisible}
                placeholderTextColor={Colors.textGrey}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <Icon
                  name={passwordVisible ?  'eye' :'eye-off'}
                  size={20}
                  color={Colors.grey}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.fieldWrapper}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="********"
                secureTextEntry={!confirmPasswordVisible}
                placeholderTextColor={Colors.textGrey}
              />
              <TouchableOpacity
                onPress={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
              >
                <Icon
                  name={confirmPasswordVisible ? 'eye' : 'eye-off' }
                  size={20}
                  color={Colors.grey}
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerText}>REGISTER</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            Already have an account ?<Text style={styles.loginLink} onPress={() => navigation.navigate('SignupPage')}>Login</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    paddingBottom: 20,
    backgroundColor: Colors.white,
    
  },
  topImage: {
    width: '100%',
    height: 180,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    resizeMode: 'cover',
  },
  formContainer: {
    padding: 20,
     borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  backgroundColor: Colors.white, 
  marginTop: -30,
  },
  helloText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.regular,
    color: Colors.black,
    marginBottom: 5,
  },
  createText: {
    fontSize: Fonts.size.large,
    fontFamily: Fonts.bold,
    color: Colors.black,
    marginBottom: 20,
  },
  accountText: {
    color: Colors.primary,
  },
  fieldWrapper: {
    marginBottom: 15,
  },
  label: {
    fontSize: Fonts.size.small,
    color: Colors.black,
    fontFamily: Fonts.regular,
    marginBottom: 6,
  },
  input: {
    backgroundColor: Colors.white2,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.small2,
    color: Colors.black,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white2,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  passwordInput: {
    flex: 1,
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.small2,
    color: Colors.black,
  },
  registerButton: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  registerText: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: Fonts.size.small2,
  },
  loginText: {
    marginTop: 15,
    textAlign: 'center',
    color: Colors.grey,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.regular,
  },
  loginLink: {
    color: Colors.primary,
  },
});
