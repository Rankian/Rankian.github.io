import {Component, OnInit, OnDestroy} from '@angular/core';
import {IconsComp} from '../icons/icons.comp';
import {SocialMediaComp} from '../social-media/social-media.comp';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  providers: [],
  directives: [IconsComp, SocialMediaComp],
  pipes: []
})

export class HomeCmp implements OnInit, OnDestroy {

  ngOnInit() {
    $('.description').typed({
      strings: [
        '重庆壹点科技（集团）有限公司'
      ],
      backDelay: 300,
      typeSpeed: 30
    });
  }

  ngOnDestroy() { }

}
