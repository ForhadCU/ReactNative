import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Sound from 'react-native-sound';

export default App = () => {
  var count = 1;
  var clickCount = 0;
  var sound = new Sound(songs());

  const playSound = () => {
    if (clickCount % 2 == 0) {
      sound.play();
    } else sound.stop();

    clickCount++;
    // sound.play();
  };

  const pauseSound = () => {
    // sound.pause();
    sound.stop();
  };

  function songs() {
    if (count == 1) return 'mysong.mp3';
    else if (count == 2) return 'mysong.mp3';
    else return 'mysong1.mp3';
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => playSound()}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 30}}>
          Start
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => pauseSound()}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 30}}>
          Pause
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// import React, {useEffect} from 'react';
// import {Text, View, TouchableOpacity, Button} from 'react-native';
// import Sound from 'react-native-sound';

// const App = () => {
//   var hello = new Sound('mysong.mp3', Sound.MAIN_BUNDLE, (error) => {
//     if (error) {
//       console.log('failed to load the sound', error);
//       return;
//     }
//   });

//   function handlePress() {
//     hello.play((success) => {
//       if (!success) {
//         console.log('Sound did not play');
//       }
//     });
//   }

//   // const {movie} = this.props;
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <TouchableOpacity onPress={() => handlePress()}>
//         <View>
//           <Text>Start</Text>
//           {/* <Button title="Start" onPress={handlePress()} /> */}
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default App;
