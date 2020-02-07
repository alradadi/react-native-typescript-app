import React, { Component } from 'react';
import { EventSubscription, Navigation } from 'react-native-navigation';

export const NavContext = React.createContext({
  componentId: '',
  isVisible: false,
});

interface Props {
  componentId: string;
  children: React.ReactChild;
}

interface State {
  isVisible: boolean;
}

export class NavProvider extends Component<Props, State> {
  private navigationEventListener: EventSubscription | undefined = undefined;

  public state = {
    isVisible: false,
  };

  public componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  public componentDidAppear() {
    this.setState({ isVisible: true });
  }

  public componentDidDisappear() {
    this.setState({ isVisible: false });
  }

  public componentWillUnmount() {
    if (this.navigationEventListener) {
      this.navigationEventListener.remove();
    }
  }

  public render() {
    const { componentId, children } = this.props;
    return (
      <NavContext.Provider
        value={{ componentId, isVisible: this.state.isVisible }}>
        {children}
      </NavContext.Provider>
    );
  }
}
