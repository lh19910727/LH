angular.module('directives',[])
.directive("errorTip",function($compile){
            return {
                restrict:"A",
                require:"ngModel",
                link:function($scope,$element,$attrs,$ngModel){
                    //创建子scope
                    var subScope = $scope.$new(),
                    //错误标签的字符串,有错误的时候，显示错误内容
                    //tip = '<span class="error" ng-if="hasError()">{{errors(). | json}}</span>';
                        tip = '<ul style="margin-top:30px;" ng-if="hasError()" ng-repeat="(errorKey,errorValue) in errors()">' +
				              			'<span class="error" ng-if="errorValue">{{errorKey | errorFilter}}</span>' +
				           		'</ul>';
                    //脏，而且无效，当然属于错误了
                    $scope.hasError = function(){
                        return $ngModel.$invalid && $ngModel.$dirty;
                    }
                    //放回ngModel的错误内容,其实就是一个对象{email:true,xxx:true,xxxx:trie}
                    $scope.errors = function(){
                        return $ngModel.$error;
                    }
                    //编译错误的指令，放到输入框后面
                    $element.after($compile(tip)(subScope));
                }
            }
        });