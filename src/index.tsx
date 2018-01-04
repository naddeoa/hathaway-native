// import { AppRegistry, View } from 'react-native';
import * as React from 'react';
import { Switchable, Program, Model, RootView, ViewProps } from 'reelm-core';

export default "a";

// export type Model = {};
// export type Switchable = {};
// export type Program<A, B> = {a: A, b: B};
// export type ViewProps<A, B, C> = {a: A, b: B, c: C};
// class RootView extends React.Component<{program: Program<{}, {}>}>{
// }

export function start<M extends Model, Msg extends Switchable>(name: string, program: Program<M, Msg>) {
  const Component: React.SFC<ViewProps<M, Msg, {}>> = function () {
    return (
      <div>
        {React.createElement(RootView, { program })}
      </div>
    );
  };

  // AppRegistry.registerComponent(name, () => Component);
}
