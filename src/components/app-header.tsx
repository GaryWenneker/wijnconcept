import { Component, Prop, h } from '@stencil/core';
import { IUser, TSignOut } from '../api/auth';

@Component({
  tag: 'app-header',
})
export class Header {
  @Prop() user?: IUser;
  @Prop() signOut: TSignOut;

  render() {
    // const { user } = this;
    return (
      <nav class="o-page-header" id="myHeader">
        <div class="m-page-wrap">
          <div class="o-header-bottom__inner-wrap">
            <div class="m-flex-columns__col o-header-bottom__col">
              <ul class="m-primary-navigation">
                <li class="m-primary-navigation__item ">
                  <a href="#">Hoe werkt het?</a>
                </li>
                <li class="m-primary-navigation__item ">
                  <a href="#">Voordelen</a>
                </li>
                <li class="m-primary-navigation__item ">
                  LOGO
                </li>
                <li class="m-primary-navigation__item ">
                  <a href="#">Onze wijnhuizen</a>
                </li>
                <li class="m-primary-navigation__item ">
                  <a href="#">FAQ</a>
                </li>
              </ul>

            </div>
            <div class="m-flex-columns__col o-header-bottom__col">
              <div class="o-header-bottom__account__button">Mijn account</div>
            </div>
          </div>
        </div>

      </nav>
    );
  }
}
