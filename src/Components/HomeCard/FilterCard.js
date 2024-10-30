// Import libraries
import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Icon, RadioButton, useTheme } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import Slider from 'rn-range-slider';
import AgeThumb from '../AgeSlider/AgeThumb';
import AgeRail from '../AgeSlider/AgeRail';
import AgeRailSelected from '../AgeSlider/AgeRailSelected';
import AgeLabel from '../AgeSlider/AgeLabel';
import AgeNotch from '../AgeSlider/AgeNotch';

// Create a component
const FilterCard = ({ setModalVisible }) => {
    const colors = useTheme();
    const [selectedCaste, setSelectedCaste] = useState(null);
    const [sliderValues, setSliderValues] = useState({ min: 18, max: 100 });
    const [rangeDisabled, setRangeDisabled] = useState(false);
    const [low, setLow] = useState(18);
    const [high, setHigh] = useState(100);
    const [min, setMin] = useState(18);
    const [max, setMax] = useState(100);
    const [floatingLabel, setFloatingLabel] = useState(false);

    const renderThumb = useCallback(() => <AgeThumb />, []);
    const renderRail = useCallback(() => <AgeRail />, []);
    const renderRailSelected = useCallback(() => <AgeRailSelected />, []);
    const renderLabel = useCallback(value => <AgeLabel text={value} />, []);
    const renderNotch = useCallback(() => <AgeNotch />, []);

    const handleValueChange = useCallback((lowValue, highValue) => {
        setLow(lowValue);
        setHigh(highValue);
    }, []);

    const toggleRangeEnabled = useCallback(
        () => setRangeDisabled(!rangeDisabled),
        [rangeDisabled]
    );

    const setMinTo50 = useCallback(() => setMin(50), []);
    const setMinTo0 = useCallback(() => setMin(0), []);
    const setMaxTo100 = useCallback(() => setMax(100), []);
    const setMaxTo500 = useCallback(() => setMax(500), []);
    const toggleFloatingLabel = useCallback(
        () => setFloatingLabel(!floatingLabel),
        [floatingLabel]
    );
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
               
                <View style={styles.caste_view}>
                    <Text style={{ ...styles.caste_txt, color: colors.primaryFontColor }}>Age</Text>
                    <Text style={{ ...styles.agerange_txt, color: colors.primaryFontColor }}>18Years</Text>
                </View>
                <View style={styles.sliderContainer}>
                    <Slider
                        lider
                        style={styles.slider}
                        min={min}
                        max={max}
                        low={low}
                        high={high}
                        step={1}
                        disableRange={rangeDisabled}
                        floatingLabel={floatingLabel}
                        renderThumb={renderThumb}
                        renderRail={renderRail}
                        renderRailSelected={renderRailSelected}
                        renderLabel={renderLabel}
                        renderNotch={renderNotch}
                        onValueChanged={handleValueChange}
                    />
                </View>
                <View style={styles.caste_view}>
                    <Text style={{ ...styles.caste_txt, color: colors.primaryFontColor }}>Height</Text>
                    <Text style={{ ...styles.agerange_txt, color: colors.primaryFontColor }}>185 cm</Text>
                </View>
                <View style={styles.sliderContainer}>
                    <Slider
                        lider
                        style={styles.slider}
                        min={min}
                        max={max}
                        low={low}
                        high={high}
                        step={1}
                        disableRange={rangeDisabled}
                        floatingLabel={floatingLabel}
                        renderThumb={renderThumb}
                        renderRail={renderRail}
                        renderRailSelected={renderRailSelected}
                        renderLabel={renderLabel}
                        renderNotch={renderNotch}
                        onValueChanged={handleValueChange}
                    />
                </View>

              

            </ScrollView>
        </View>
    );
};

// Define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: moderateScale(15),
        paddingBottom:moderateScale(15)
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
        marginTop: moderateScale(2),
        backgroundColor:'#fff'
    },
    slider: {
        marginBottom: moderateScale(0),
        marginTop: moderateScale(-43)
    }
});

// Make this component available to the app
export default FilterCard;
