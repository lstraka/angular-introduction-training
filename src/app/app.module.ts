import { FeatureModule } from './feature/feature.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { FirstChildComponent } from './my-first/first-child/first-child.component';
import { DataBindingComponent } from './day2Components/data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './day2Components/structural-directives/structural-directives.component';
import { SayHelloDirective } from './say-hello.directive';
import { EvenNumbersPipe } from './even-numbers.pipe';
import { LifeCycleHooksComponent } from './day2Components/life-cycle-hooks/life-cycle-hooks.component';
import { UsersComponent } from './day2Components/users/users.component';
import { UserDetailComponent } from './day2Components/user-detail/user-detail.component';
import { UserStatsComponent } from './day2Components/user-stats/user-stats.component';
import { UserProfileComponent } from './day2Components/user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { NgTemplateExampleComponent } from './ng-template-example/ng-template-example.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    FirstChildComponent,
    DataBindingComponent,
    StructuralDirectivesComponent,
    SayHelloDirective,
    EvenNumbersPipe,
    LifeCycleHooksComponent,
    UsersComponent,
    UserDetailComponent,
    UserStatsComponent,
    UserProfileComponent,
    NgTemplateExampleComponent,
    PostsComponent,
    PostDetailComponent,

  ],
  imports: [
    BrowserModule,
    FeatureModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    AppComponent
  ]
})
export class AppModule { }
