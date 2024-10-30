// import libraries
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Pressable, Image, Dimensions } from 'react-native';
import Header from '../../../Components/Header/Header';
import { AppButton, AppTextInput, Icon, Picker, useTheme, Text } from 'react-native-basic-elements';
import { FONTS } from '../../../Constants/Fonts';
import { moderateScale } from '../../../Constants/PixelRatio';
import StepIndicator from 'react-native-step-indicator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MultiSelectPicker from '../../../ui/MultiSelectPicker';
import SingleSelectPicker from '../../../ui/SingleSelectPicker';
import NavigationService from '../../../Services/Navigation';
import { useRoute } from '@react-navigation/native';
import AuthService from '../../../Services/Auth';
import SinglePicker from '../../../ui/SinglePicker';
import Toast from "react-native-simple-toast";

const { height, width } = Dimensions.get('screen')
// create a component
const ProfessionalInfo = ({ navigation }) => {
  const colors = useTheme();
  const route = useRoute()
  const getPersonalData = route.params.personalData
  console.log('getdatddddddddddddddddddddddddddddddd8888888884111111111+++++++++++++++', getPersonalData);
  const [liveIn, setLiveIn] = useState('');




  const orderStatusData = [
    { name: 'Personal Info' },
    { name: 'Professional Info' },
    { name: 'Other info' },
  ];
  const [position, setPosition] = useState(1);
  const stepIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 1,
    currentStepStrokeWidth: 2,
    stepStrokeCurrentColor: '#1f421d',
    stepStrokeWidth: 1,
    stepStrokeFinishedColor: '#1f421d',
    stepStrokeUnFinishedColor: '#028e00',
    separatorFinishedColor: '#1f421d',
    separatorUnFinishedColor: '#028e00',
    stepIndicatorFinishedColor: '#1f421d',
    stepIndicatorUnFinishedColor: '#028e00',
    stepIndicatorCurrentColor: '#1f421d',
    stepIndicatorLabelFontSize: 14,
    currentStepIndicatorLabelFontSize: 14,
    stepIndicatorLabelCurrentColor: '#FFFFFF',
    stepIndicatorLabelFinishedColor: '#FFFFFF',
    stepIndicatorLabelUnFinishedColor: '#FFFFFF',
    labelColor: '#FFFFFF',
    labelSize: 9,
    currentStepLabelColor: '#1f421d',
    labelAlign: 'center',
    labelFontFamily: FONTS.Inter.medium,
  };
  const [currentPage, setCurrentPage] = useState(0);
  const onStepPress = (position) => {
    setCurrentPage(position);
  };

  useEffect(() => {
    getEducationData()
  }, [])

  useEffect(() => {
    getLanguageData(),
      getOcupationData()
  }, [])

  useEffect(() => {
    getOcupationData()
  }, [])

  useEffect(() => {
    getStatusData()
  }, [])


  const [Educationdata, setEducationData] = useState([])
  const [educationId, setEducatonId] = useState(null);

  console.log('EducationdataEducationdataEducationdata', Educationdata);


  const getEducationData = () => {
    AuthService.getEducationList()
      .then((res) => {
        // console.log('ressectorrrrrrrrrrrrrr====================', res);
        if (res && res.status == true) {
          setEducationData(res.data)
        }
      })
      .catch((err) => {
        console.log('secterr', err);

      })
  }

  const handleSelectEducation = (item) => {
    setEducatonId(item.id);
  };

  const [Languagedata, setLanguageData] = useState([])
  const [LanguageId, setLanguageId] = useState([]);

  const getLanguageData = () => {
    AuthService.getLanguagesList()
      .then((res) => {
        console.log('ressectorrrrrrrrrrrrrr====================', res);
        if (res && res.status == true) {
          setLanguageData(res.data)
        }
      })
      .catch((err) => {
        console.log('secterr', err);

      })
  }

  const handleSelectLanguages = (id) => {
    setLanguageId(id)
  };
  console.log('LanguageIdLanguageId========================', LanguageId);


  const [Ocupationdata, setOcupationData] = useState([])
  const [OcupationId, setOcupationId] = useState(null);

  console.log('OcupationIdOcupationIdOcupationIdOcupationId', OcupationId);


  const getOcupationData = () => {
    AuthService.getOccupationList()
      .then((res) => {
        // console.log('ressectorrrrrrrrrrrrrr====================', res);
        if (res && res.status == true) {
          setOcupationData(res.data)
        }
      })
      .catch((err) => {
        console.log('secterr', err);

      })
  }

  const handleSelectOcupation = (item) => {
    setOcupationId(item.id);
  };


  const [StatusData, setStatusData] = useState([])
  const [StatusId, setStatusId] = useState(null);

  console.log('OcupationIdOcupationIdOcupationIdOcupationId', OcupationId);


  const getStatusData = () => {
    AuthService.getStatusList()
      .then((res) => {
        // console.log('ressectorrrrrrrrrrrrrr====================', res);
        if (res && res.status == true) {
          setStatusData(res.data)
        }
      })
      .catch((err) => {
        console.log('secterr', err);

      })
  }

  const handleSelectStatus = (item) => {
    setStatusId(item.id);
  };


  const getProfesoanlInfo = () => {
    let hasError = false;
    if (educationId === '') {
      Toast.show('Please Select Education');
      hasError = true;
      return false;
    }
    if (LanguageId === '') {
      Toast.show("Please Select Language's");
      hasError = true;
      return false;
    }
    if (OcupationId === '') {
      Toast.show("Please Select Ocupation");
      hasError = true;
      return false;
    }
    if (liveIn === '') {
      Toast.show("Please Select Lives In Place");
      hasError = true;
      return false;
    }
    if (StatusId === '') {
      Toast.show("Please Select Meritial Status");
      hasError = true;
      return false;
    }
   
    if (hasError) return;
    let data = {
      "Education": educationId,
      "languages": LanguageId,
      "ocupation": OcupationId,
      "liveIn": liveIn,
      "Status": StatusId,
     
    }
    const newData ={...getPersonalData,...data}    
    NavigationService.navigate('OtherInfo', { OtherInfoData: newData })  
  }


  return (
    <View style={styles.container}>
      <Header title='Profile' />
      <View style={{ marginTop: moderateScale(15) }}>
        <StepIndicator
          stepCount={3}
          customStyles={stepIndicatorStyles}
          onPress={onStepPress}
          renderLabel={({ label, currentPosition }) => (
            <View style={styles.labelContainer}>
              <Text style={[styles.labeltxt, { color: colors.secondaryFontColor }]}>
                {orderStatusData[Number(label)].name}
              </Text>
            </View>
          )}
          currentPosition={position}
          labels={orderStatusData.map((item, ind) => ind.toString())}
        />
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>

        <View style={{ marginHorizontal: moderateScale(15), marginTop: moderateScale(15) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <View style={styles.img_circle}>
            {/* <Image
                  source={ImageData.length > 0 ? { uri: ImageData[0]?.url } :
                    require('../../../assets/images/user.png')}
                  style={styles.user_img} /> */}
              <Image source={require('../../../assets/images/user.png')} style={styles.user_img} />
            </View>

            {/* <Text style={{ ...styles.user_name, color: colors.secondaryFontColor }}>{getPersonalData}</Text> */}
          </View>


          <Text style={{ ...styles.input_title, marginTop: 10, color: colors.secondaryFontColor }}>Education</Text>
          <SingleSelectPicker
            data={Educationdata}
            placeholder="Choose Education"
            onSelectItem={handleSelectEducation}
          />

          <Text style={{ ...styles.input_title, marginTop: 10, color: colors.secondaryFontColor }}>Language</Text>
          <MultiSelectPicker
            data={Languagedata}
            placeholder="Choose Languages"
            onSelectItem={handleSelectLanguages}
          />


          <Text style={{ ...styles.input_title, marginTop: 10, color: colors.secondaryFontColor }}>Ocupation</Text>
          {Ocupationdata && Ocupationdata.length > 0 ? (
            <SingleSelectPicker
              data={Ocupationdata}
              placeholder="Choose Occupation"
              onSelectItem={handleSelectOcupation}
            />
          ) : (
            <Text>No data found</Text>
          )}


          <View style={styles.inputbox_view}>
            <View>
              <Text style={{ ...styles.input_title, color: colors.secondaryFontColor }}>Lives In</Text>
              <AppTextInput
                inputContainerStyle={{ ...styles.inputcontainer_sty }}
                inputStyle={{ ...styles.text_input, color: colors.secondaryFontColor }}
                value={liveIn}
                onChangeText={(val)=>setLiveIn(val)}
              />
            </View>
            <View>
              <Text style={{ ...styles.input_title, color: colors.secondaryFontColor }}>Status</Text>
              <SinglePicker data={StatusData}
                placeholder="Select Status"
                onSelectItem={handleSelectStatus}
              />
            </View>

          </View>


          <View style={{ ...styles.inputbox_view, marginBottom:moderateScale(30), marginTop: moderateScale(30) }}>

            <Pressable
              onPress={() => NavigationService.navigate('PresonalInfo')}
              style={{ ...styles.Previousbutton_sty, borderColor: colors.buttonColor }}>
              <Text style={{ ...styles.buttn_txt, color: colors.buttonColor }}>Previous</Text>
            </Pressable>
            <AppButton
              textStyle={styles.buttn_txt}
              style={styles.button_sty}
              title="Next"
              gradientStart={{ x: 0.3, y: 1 }}
              gradientEnd={{ x: 1, y: 1 }}
              gradient={true}
              gradientColors={['rgba(30,68,28,255)', 'rgba(2,142,0,255)']}
              onPress={() =>getProfesoanlInfo() }
            />

          </View>
        </View>

      </KeyboardAwareScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelContainer: {
    alignItems: 'center',
  },
  labeltxt: {
    fontFamily: FONTS.Inter.semibold,
    fontSize: moderateScale(11),
    marginTop: moderateScale(7)
  },
  user_name: {
    fontFamily: FONTS.Inter.bold,
    fontSize: moderateScale(14),
    marginLeft: moderateScale(10),
  },
  inputbox_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(15),
    
  },
  input_title: {
    fontSize: moderateScale(12),
    fontFamily: FONTS.Inter.semibold,
  },
  inputcontainer_sty: {
    alignSelf: 'center',
    height: moderateScale(45),
    borderRadius: moderateScale(5),
    borderWidth: 1,
    paddingLeft: moderateScale(7),
    width: moderateScale(150),
  },
  img_circle: {
    height: moderateScale(80),
    width: moderateScale(80),
    borderWidth: 1,
    borderColor: '#666',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(40),
  },
  user_img: {
    height: moderateScale(70),
    width: moderateScale(70),
    resizeMode: 'contain',
  },
  edit_img: {
    height: moderateScale(30),
    width: moderateScale(30),
    tintColor: 'rgba(30,68,28,255)',
    position: 'absolute',
    bottom: 0,
    left: moderateScale(50),
  },
  picker_sty: {
    height: moderateScale(45),
    width: moderateScale(150),
    borderRadius: moderateScale(5),
  },
  phoneinput_view: {
    height: moderateScale(45),
    borderRadius: moderateScale(5),
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: moderateScale(150),
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(7)
  },
  buttn_txt: {
    fontFamily: FONTS.Inter.medium,
    fontSize: moderateScale(13)
  },
  button_sty: {
    height: moderateScale(40),
    width: moderateScale(150),
    borderRadius: moderateScale(7),
    marginHorizontal: 0
  },
  Previousbutton_sty: {
    height: moderateScale(40),
    width: moderateScale(150),
    borderRadius: moderateScale(7),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

});

// make this component available to the app
export default ProfessionalInfo;
