Como usar?



<form role="form"  name="myForm">
    <div class="form-group has-feedback" ng-class="{'has-success':myForm.rut.$error.rutValido,'has-error':!myForm.rut.$error.rutValido}">
        <label  >INGRESE RUT</label>
        <input type="text" class="form-control" ng-rut name="rut" ng-model="rut">
        <span class="glyphicon   form-control-feedback" ng-class="{'glyphicon-ok':myForm.rut.$error.rutValido,'glyphicon-remove':!myForm.rut.$error.rutValido}"></span>
    </div>


</form>

