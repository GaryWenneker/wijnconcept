import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
import { LocationSegments, RouteRenderProps } from '@stencil/router';

let lastKey = '';
let lastEvent = '';
let props: RouteRenderProps;

@Component({
  tag: 'ip-stencil-route-listener',
})
export class IpStencilRouteListener {
  @Prop() props: RouteRenderProps | undefined;

  @Event()
  pageEnter: EventEmitter<LocationSegments>;
  @Event()
  pageLeave: EventEmitter<LocationSegments>;

  private localPageSegments: LocationSegments | null = null;

  private get currentPageLocation(): LocationSegments {
    return (this.props || props)?.history?.location;
  }

  private _callEvent(
    event: 'pageLeave' | 'pageEnter',
    location: LocationSegments
  ) {
    console.log('_callEvent', event, location);
    if (lastEvent === event && lastKey === location?.key) return;
    if (event === 'pageEnter' && location !== null) {
      this.pageEnter.emit(location);
    } else if (event === 'pageLeave' && location !== null) {
      this.pageLeave.emit(location);
    }
    lastEvent = event;
    lastKey = location?.key;
  }

  componentWillLoad() {
    console.log('componentWillLoad', this);
    if (!this.props) {
      return;
      // throw Error('Please add props to <ip-stencil-route-listener />!');
    }
    props = this.props;
    if (this.props.component === null || this.props.component === undefined) {
      this.props.component = 'ip-app-home';
    }
    this.localPageSegments = this.currentPageLocation;
    lastKey = this.currentPageLocation?.key;
  }

  componentDidLoad() {
    console.log('componentDidLoad', this);
    if (lastKey === this.currentPageLocation?.key) {
      this._callEvent('pageEnter', this.currentPageLocation);
    }
  }

  disconnectedCallback() {
    console.log('disconnectedCallback', this);
    if (lastKey !== this.currentPageLocation?.key) {
      this._callEvent('pageLeave', this.localPageSegments);
    }
  }

  componentWillUpdate() {
    console.log('componentWillUpdate', this);
    if (lastKey !== this.currentPageLocation?.key) {
      this._callEvent('pageLeave', this.localPageSegments);
    }
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this);
    if (lastKey !== this.currentPageLocation?.key) {
      this._callEvent('pageEnter', this.currentPageLocation);
      this.localPageSegments = this.currentPageLocation;
      lastKey = this.currentPageLocation?.key;
    }
  }

  render() {
    return this.props?.component ? <this.props.component {...this.props} /> : null;
  }
}
