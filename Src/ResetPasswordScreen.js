import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Colors from './constants/colors';
import Fonts from './constants/fonts';

const ResetPasswordScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={Colors.gradientBlack} style={styles.gradient}>
        <TouchableOpacity onPress={() => navigation.goBack('NewPassword')} style={styles.backBtn}>
          <Icon name="arrow-back" size={24} color={Colors.white} />
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.container}>
        <Text style={styles.title}>NEW PASSWORD</Text>
        <Text style={styles.subtitle}>Create a new password and try to login</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="New Password"
            placeholderTextColor={Colors.textGrey}
            style={styles.input}
            secureTextEntry={!showNewPassword}
            value={newPassword}
            onChangeText={setNewPassword}
            maxLength={6}
          />
          <TouchableOpacity
            onPress={() => setShowNewPassword(!showNewPassword)}
            style={styles.eyeIcon}
          >
            <Icon name={showNewPassword ? 'eye' : 'eye-off'} size={20} color={Colors.grey} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={Colors.textGrey}
            style={styles.input}
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            maxLength={6}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.eyeIcon}
          >
            <Icon name={showConfirmPassword ? 'eye' : 'eye-off'} size={20} color={Colors.grey} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupPage')}>
          <Text style={styles.buttonText}>RESET PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  gradient: {
    height: 60,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 0,
  },
  backBtn: {
    marginTop: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  title: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.bold,
    marginBottom: 8,
    color: Colors.black,
  },
  subtitle: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.regular,
    color: Colors.subtitleGrey,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    color: Colors.black,
    fontFamily: Fonts.regular,
  },
  eyeIcon: {
    padding: 5,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontFamily: Fonts.regular,
  },
});

export default ResetPasswordScreen;
