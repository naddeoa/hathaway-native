import { AppRegistry, View } from 'react-native';
import * as React from 'react';
import { Switchable, Program, Model, RootView, ViewProps } from 'hathaway-core';

export function start<M extends Model, Msg extends Switchable>(name: string, program: Program<M, Msg>) {
  const Component: React.SFC<ViewProps<M, Msg, {}>> = function () {
    return (
      <View>
        {React.createElement(RootView, { program })}
      </View>
    );
  };

  AppRegistry.registerComponent(name, () => Component);
}