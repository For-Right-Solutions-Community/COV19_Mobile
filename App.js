import React from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    Alert,
} from 'react-native';
import Wizard from './components/wizard';
import Step1 from "./components/step/Step1";
import Step2 from "./components/step/Step2";
import Step3 from "./components/step/Step3";
import Step4 from "./components/step/Step4";
import Step5 from "./components/step/Step5";
import Step6 from "./components/step/Step6";
import Step7 from "./components/step/Step7";
const sections = [
    <Step1/>,
    <Step2/>,
    <Step3/>,
    <Step4/>,
    <Step5/>,
    <Step6/>,
    <Step7/>
];

export default function App() {
    return (
        <View style={styles.container}>
            <Wizard onEnd={() => console.log('end')}>
                {
                    sections.map((section, index) => (
                        <Wizard.Step key={index}>
                            <View style={styles.innerContainer}>
                                    {section}
                            </View>
                        </Wizard.Step>
                    ))
                }
            </Wizard>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
