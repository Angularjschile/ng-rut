/**
 * Created by Administrador on 26/08/14.
 */
angular.module('ng-rut', [])
    .directive('ngRut', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elem, attr, ctrl) {
                var Fn={
                    validaRut : function (rutCompleto) {
                        if (!/^[0-9]+-[0-9kK]{1}$/.test( rutCompleto )) return false;
                        var tmp = rutCompleto.split('-');

                        return (Fn.dv(tmp[0])) == tmp[1].toLowerCase();
                    },
                    dv : function(T){
                        var M=0,S=1;
                        for(;T;T=Math.floor(T/10))
                            S=(S+T%10*(9-M++%6))%11;
                        return S?S-1:'k';
                    }
            };
                scope.$watch(attr.ngModel, function(value) {
                    if (value=='') return;

                    if (!Fn.validaRut(value)) {
                        ctrl.$rutValido=false;
                        ctrl.$setValidity('rutValido',true);

                    } else  ctrl.$setValidity('rutValido',false);
                });


            }
        }
    })
