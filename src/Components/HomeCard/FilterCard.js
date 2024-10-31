// Import libraries
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Icon, RadioButton, useTheme } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import RangeSlider from '../../ui/RangeSlider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeService from '../../Services/HomeServises';

// Create a component
const FilterCardddd = ({ setModalVisible }) => {
    const colors = useTheme();
    const MIN_DEFAULT_AGE = 18;
    const MAX_DEFAULT_AGE = 70;
    const [minValue, setMinValue] = useState(MIN_DEFAULT_AGE);
    const [maxValue, setMaxValue] = useState(MAX_DEFAULT_AGE);

    const MIN_DEFAULT_HEIGHT = 122;
    const MAX_DEFAULT_HEIGHT = 240;
    const [minValueHeight, setMinValueHeight] = useState(MIN_DEFAULT_HEIGHT);
    const [maxValueHeight, setMaxValueHeight] = useState(MAX_DEFAULT_HEIGHT);

    const [selectedCaste, setSelectedCaste] = useState(null);

    const matritalStatus = ['Not Marriage', '1st Marriage', '2nd Marriage', '3rd Marriage'];
    const education = ['MBBA', 'BCA', 'BA', 'MTECH'];
    const ocupation = ['Teacher', 'Doctor', 'Engineer', 'Business'];

    function toFeet(n) {
        var realFeet = (n * 0.3937) / 12;
        var feet = Math.floor(realFeet);
        var inches = Math.round((realFeet - feet) * 12);
        return feet + 'ft-' + inches + 'inch';
      }
      const [castData, setCastData] = useState([
        {
          id: 1,
          name: 'General'
        },
        {
          id: 2,
          name: 'SC'
        },
        {
          id: 2,
          name: 'ST'
        },
        {
          id: 4,
          name: 'OBC'
        },
      ])

      const [Ocupationdata, setOcupationData] = useState([])
      const [OcupationId, setOcupationId] = useState(null);
    
      console.log('OcupationIdOcupationIdOcupationIdOcupationId', OcupationId);
    
      useEffect(()=>{
        getOcupationData()
      },[])
    
      const getOcupationData = () => {
        HomeService.getOccupationList()
          .then((res) => {
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
    

      useEffect(()=>{
        getStatusData()
      },[])
    
      const getStatusData = () => {
        HomeService.getStatusList()
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

      const [Educationdata, setEducationData] = useState([])
      const [educationId, setEducatonId] = useState(null);
    
      useEffect(()=>{
        getEducationData()
      },[])
    
    
      const getEducationData = () => {
        HomeService.getEducationList()
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



    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.caste_view}>
                        <Text style={{ ...styles.caste_txt, color: colors.primaryFontColor }}>Cast</Text>
                    </View>
                    {castData.map((caste, index) => (
                        <View style={styles.caste_list_view} key={index}>
                            <RadioButton
                                selected={selectedCaste === caste}
                                onChange={() => setSelectedCaste(caste)}
                                size={18}
                                containerStyle={{ borderWidth: 1 }}
                                activeColor={colors.primaryFontColor}
                            />
                            <Text style={{ ...styles.caste_title, color: colors.primaryFontColor }}>{caste.name}</Text>
                        </View>
                    ))}
                    <View style={styles.caste_view}>
                        <Text style={{ ...styles.caste_txt, color: colors.primaryFontColor }}>Age</Text>
                        <Text style={{ ...styles.agerange_txt, color: colors.primaryFontColor }}>({minValue})-({maxValue})Years</Text>
                    </View>
                    <View style={styles.sliderContainer}>
                        <RangeSlider
                            sliderWidth={260}
                            min={MIN_DEFAULT_AGE}
                            max={MAX_DEFAULT_AGE}
                            step={1}
                            onValueChange={(range) => {
                                setMinValue(range.min);
                                setMaxValue(range.max);
                            }}
                        />
                    </View>
                    <View style={styles.caste_view}>
                        <Text style={{ ...styles.caste_txt, color: colors.primaryFontColor }}>Height</Text>
                        <Text style={{ ...styles.agerange_txt, color: colors.primaryFontColor }}>({toFeet(minValueHeight)})-({toFeet(maxValueHeight)})</Text>
                    </View>
                    <View style={styles.sliderContainer}>
                        <RangeSlider
                            sliderWidth={260}
                            min={MIN_DEFAULT_HEIGHT}
                            max={MAX_DEFAULT_HEIGHT}
                            step={1}
                            onValueChange={(range) => {
                                setMinValueHeight(range.min);
                                setMaxValueHeight(range.max);
                            }}
                        />
                    </View>

                    <View style={styles.caste_view}>
                        <Text style={{ ...styles.caste_txt, color: colors.primaryFontColor }}>Matrital Status</Text>
                    </View>
                    {StatusData.map((item, index) => (
                        <View style={styles.caste_list_view} key={index}>
                            <RadioButton
                                selected={selectedCaste === item.id}
                                onChange={() => setSelectedCaste(item.id)}
                                size={18}
                                containerStyle={{ borderWidth: 1 }}
                                activeColor={colors.primaryFontColor}
                            />
                            <Text style={{ ...styles.caste_title, color: colors.primaryFontColor }}>{item.name}</Text>
                        </View>
                    ))}

                    <View style={styles.caste_view}>
                        <Text style={{ ...styles.caste_txt, color: colors.primaryFontColor }}>Education</Text>
                    </View>
                    {Educationdata.map((item, index) => (
                        <View style={styles.caste_list_view} key={index}>
                            <RadioButton
                                selected={selectedCaste === item.id}
                                onChange={() => setSelectedCaste(item.id)}
                                size={18}
                                containerStyle={{ borderWidth: 1 }}
                                activeColor={colors.primaryFontColor}
                            />
                            <Text style={{ ...styles.caste_title, color: colors.primaryFontColor }}>{item.name}</Text>
                        </View>
                    ))}

                    <View style={styles.caste_view}>
                        <Text style={{ ...styles.caste_txt, color: colors.primaryFontColor }}>Ocupation</Text>
                    </View>
                    {Ocupationdata.map((item, index) => (
                        <View style={styles.caste_list_view} key={index}>
                            <RadioButton
                                selected={selectedCaste === item.id}
                                onChange={() => setSelectedCaste(item.id)}
                                size={18}
                                containerStyle={{ borderWidth: 1 }}
                                activeColor={colors.primaryFontColor}
                            />
                            <Text style={{ ...styles.caste_title, color: colors.primaryFontColor }}>{item.name}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </GestureHandlerRootView>
    );
};

// Define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: moderateScale(15),
        paddingBottom: moderateScale(15)
    },
    caste_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: moderateScale(20),
    },
    caste_txt: {
        fontFamily: FONTS.Inter.semibold,
        fontSize: moderateScale(14)
    },
    caste_list_view: {
        flexDirection: 'row',
        marginTop: moderateScale(13)
    },
    caste_title: {
        marginLeft: moderateScale(10),
        fontFamily: FONTS.Inter.regular,
        fontSize: moderateScale(12)
    },
    agerange_txt: {
        fontFamily: FONTS.Inter.regular,
        fontSize: moderateScale(12)
    },
    sliderContainer: {
        marginTop: moderateScale(15),
    },
    slider: {
        marginBottom: moderateScale(0),
        marginTop: moderateScale(-43)
    }
});

// Make this component available to the app
export default FilterCardddd;
