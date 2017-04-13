import {Slim} from "slim-js";
import {tag, useShadow, template} from "slim-js/Decorators";

@tag('slim-app')
@useShadow(true)
@template(`
<h1 bind>Hello, [[myName]]</h1>
`)
export default class extends Slim {

    myName: string;

    onBeforeCreated() {
        this.myName = "slim.js";
    }
}
