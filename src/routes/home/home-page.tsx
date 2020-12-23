import { Component, Prop, State, h } from '@stencil/core';

import { IUser } from '../../api/auth';

@Component({
  tag: 'home-page',
})
export class HomePage {
  @Prop() user?: IUser;

  @State() activeTag?: string;

  setTag = (tag?: string) => {
    this.activeTag = tag;
  };

  componentDidLoad() {
    document.title = 'WijnConcept Title';
  }

  render() {
    return (
      <main class="home-page">
        {/* <div class="banner">
          <div class="container">
            <h1 class="logo-font">WijnConcept</h1>
            <p>Zuipen tot je erbij neervalt.</p>
          </div>
        </div> */}
        <div class="container page">
          <div class="row">
            {/* <tabbed-feed class="col-md-9" user={this.user} clearTag={this.setTag} activeTag={this.activeTag} possibleTabs={this.user ? ['global', 'feed'] : ['global']} />
            <home-tags class="col-md-3" setTag={this.setTag} /> */}
            <gl-background-video
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/V7hI1imKeijyy0rxl/videoblocks-napa-valley-vineyard-at-sunset-tracking-shot_smosefatg__80c8c1c56e847d27868b023963dc160a__P360.mp4"
              poster="/assets/images/homepage.jpg" class="o-video">
            </gl-background-video>
          </div>
        </div>
      </main>
    );
  }
}
