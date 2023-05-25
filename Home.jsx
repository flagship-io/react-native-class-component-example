import {
  EventCategory,
  Flagship,
  HitType,
  useFsFlag,
} from '@flagship.io/react-native-sdk';
import React from 'react';
import {Button, Text} from 'react-native';

// the static method `getVisitor` can be called anywhere even outside of components if FlagshipProvider has already started
function anyFunction() {
  const flag = Flagship.getVisitor().getFlag('my-other-flag', 'defaultValue');
  console.log('my-other-flag', flag.getValue());
}

class Home extends React.Component {
  clickButton() {
    // You can get visitor instance anytime via the static method `getVisitor` of Flagship class
    const flag = Flagship.getVisitor().getFlag('my_flag', 'defaultValue');
    console.log('my-flag-value:', flag.getValue());
  }
  sendHit() {
    // Send a hit
    Flagship.getVisitor().sendHit({
      type: HitType.EVENT,
      action: 'click',
      category: EventCategory.ACTION_TRACKING,
    });
  }
  render() {
    return (
      <>
        {/* Use the value of my_flag   */}
        <Text> My flag value: {this.props.myFlagValue} </Text>
        <Button title="Click button" onPress={this.clickButton} />
        <Button title="Send hit" onPress={this.sendHit} />
      </>
    );
  }
}

// use a HOC to get flags through hooks
function withFsHooksHOC(Component) {
  return props => {
    const myFlag = useFsFlag('my_flag', 'defaultValue'); // Get my_flag flag
    // const myOtherFlag = useFsFlag('my_other_flag', 'defaultValue');
    return <Component myFlagValue={myFlag.getValue()} {...props} />; // Inject the value of my_flag via myFlagValue props
  };
}

// Wrap the home component in the HOC
export default withFsHooksHOC(Home);
