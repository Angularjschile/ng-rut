# ngRut directive


# Requirements

- AngularJS
- JQuery

# Usage

We use [bower](http://twitter.github.com/bower/) for dependency management.  Add

    dependencies: {
        "ng-rut": "*"
    }

To your `bower.json` file. Then run

    bower install

Add the date module as a dependency to your application module:

    var myAppModule = angular.module('MyApp', ['ng-rut'])

Apply the directive to your form elements:


    <input  ng-rut   ng-model="rut">

Validate in Form:

     <form role="form"  name="myForm">
         <div class="form-group has-feedback" ng-class="{'has-success':myForm.rut.$error.rutValido,'has-error':!myForm.rut.$error.rutValido}">
             <label  >INGRESE RUT</label>
             <input type="text" class="form-control" ng-rut name="rut" ng-model="rut">
             <span class="glyphicon   form-control-feedback" ng-class="{'glyphicon-ok':myForm.rut.$error.rutValido,'glyphicon-remove':!myForm.rut.$error.rutValido}"></span>
         </div>


     </form>

More see Demo:

    demo/index.html

