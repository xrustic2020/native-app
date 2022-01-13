import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../../../assets/constants/styles';
import LeftIcon from '../../../../images/icons/chevron-circle-left-solid.svg';
import RightIcon from '../../../../images/icons/chevron-circle-right-solid.svg';
import InfinityIcon from '../../../../images/icons/sync-alt-solid.svg';
import StopedIcon from '../../../../images/icons/stop-circle-solid.svg';
import ResetIcon from '../../../../images/icons/times-circle-solid.svg';

const iconProps = {
  width: 34,
  height: 34,
  fill: colors.BLUE,
};

const ICONS = {
  right: <RightIcon {...iconProps} />,
  left: <LeftIcon {...iconProps} />,
  infinity: <InfinityIcon {...iconProps} />,
  stop: <StopedIcon {...iconProps} />,
  reset: <ResetIcon {...iconProps} />,
} as const;

const styles = StyleSheet.create({
  indent: {
    marginBottom: 10,
  },
});

interface IProps {
  action: () => void;
  iconId: 'right' | 'left' | 'infinity' | 'stop' | 'reset';
}

const AnimNavigateItem = ({action, iconId}: IProps) => {
  return (
    <TouchableOpacity onPress={action} style={styles.indent}>
      {ICONS[iconId]}
    </TouchableOpacity>
  );
};

export default AnimNavigateItem;
