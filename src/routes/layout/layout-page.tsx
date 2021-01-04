import { Component, Prop, State, h } from '@stencil/core';

import { IUser } from '../../api/auth';

@Component({
  tag: 'layout-page',
})
export class LayoutPage {
  @Prop() user?: IUser;

  @State() activeTag?: string;

  setTag = (tag?: string) => {
    this.activeTag = tag;
  };

  componentDidLoad() {
    document.title = 'Layout Page - WijnConcept Title';
  }

  render() {
    return (
      <main class="layout-page">
        <section class="m-section">
          <div class="m-grid">
            <div class="m-grid__M12">Wijn
              {/* <div class="banner">
          <div class="container">
            <h1 class="logo-font">WijnConcept</h1>
            <p>Zuipen tot je erbij neervalt.</p>
          </div>
        </div> */}
              <div class="container pagea">
                <div class="row">
                  {/* <tabbed-feed class="col-md-9" user={this.user} clearTag={this.setTag} activeTag={this.activeTag} possibleTabs={this.user ? ['global', 'feed'] : ['global']} />
            <home-tags class="col-md-3" setTag={this.setTag} /> */}

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
