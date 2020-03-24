# react-native-wizard
A simple wizard for React Native

## example
![Image of Example](https://user-images.githubusercontent.com/5220867/72733432-d327e700-3bd2-11ea-8d5b-b8a5a6a03f7e.gif)

## how to use
```
import Wizard from './components/wizard';

 <Wizard onEnd={() => console.log('end')} 
    onNext={screen => console.log(screen)} 
    onPrev={screen => console.log(screen)}>
    <Wizard.Step>
       <Text>Step 1</Text>
    </Wizard.Step>
    <Wizard.Step>
       <Text>Step 1</Text> 
    </Wizard.Step>
</Wizard>
```

## props

| Props        | Description                         | Type          |
| ------------ | ----------------------------------- | ------------- |
| onEnd        | Trigger when click on finish button | void |
| onNext       | Trigger when click on next button   | int  |
| onPrev       | Trigger when click on prev button   | int  |
