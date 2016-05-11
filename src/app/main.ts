import 'rxjs/Rx';
import {bootstrap}         from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

// add these symbols to override the `LocationStrategy`
import {provide, enableProdMode}           from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { ROUTER_PROVIDERS }     from '@angular/router';

import {AppComponent}      from './app.component';

// enableProdMode()

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
])
.catch(err => console.error(err));
