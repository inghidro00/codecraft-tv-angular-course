import {Component} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDinamic} from "@angular/platform-browser-dynamic";

@Component({
  selector: 'Joke',
  template:` <h1>What did the cheese say when it looked in the mirror?</h1>
  <p>Halloumi (Hello Me)</p>
`
})
class JokeComponent {



}

@Ngmodule({
  imports:[BrowserModule],
  declarations: [JokeComponent],
  boostrap:[JokeComponent]
})
class Appmodule{

}

platformBrowserDinamic().boostrapModule(Appmodule);