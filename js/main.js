<!DOCTYPE>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="lib/bootstrap.css">
    <style>
    .red {
        background: #a30;
    }
    
    .error {
        color: #a10;
    }
    /*p.error{
		display: none;
	}*/
    
    input.error {
        border: 1px solid #a10;
    }
    
    .wrapper {
        width: 200px;
        margin: 30px auto;
    }
    </style>
</head>

<body ng-app="myApp" ng-controller="SignUpController">
    <div class="wrapper">
        <h2>注册</h2>
        <form name="signUpForm" ng-submit="submitForm()">
            <div class="form-group">
                <label>用户名：</label>
                <pre>合法：{{signUpForm.username.$valid}}</pre>
                <pre>{{userdata.username}}</pre>
                <input name="username" type="text" class="form-control" ng-model="userdata.username" ng-minlength="4" ng-maxlength="32" required>
                <p class="error" ng-if="(signUpForm.username.$error.minlength || signUpForm.username.$error.maxlength) && signUpForm.username.$touched">用户名长度应在4至32位之间</p>
                <p class="error" ng-if="signUpForm.username.$error.required&& signUpForm.username.$touched">用户名为空</p>
            </div>
            <div class="form-group">
                <label>密码：</label>
                <pre>合法：{{signUpForm.password.$valid}}</pre>
                <pre>{{userdata.password}}</pre>
                <input name="password" type="password" class="form-control" ng-model="userdata.password" ng-minlength="6" ng-maxlength="255" required>
                <p class="error" ng-if="signUpForm.password.$error.required
                && signUpForm.password.$touched">密码不能为空</p>
                <p class="error" ng-if="(signUpForm.password.$error.minlength || signUpForm.password.$error.maxlength)&&signUpForm.password.$touched">密码长度应在6到255之间</p>
            </div>
            <div class="form-group">
                <label>确认密码：</label>
                <pre>合法：{{signUpForm.password2.$valid}}</pre>
                <pre>{{userdata.password2}}</pre>
                <input name="password2" type="password" class="form-control" ng-model="userdata.password2" required compare = "userdata.password">
                <p class="error" ng-if = "signUpForm.password2.$error.compare 
                && signUpForm.password2.$touched">两次密码输入不一致</p>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">注册</button>
            </div>
        </form>
    </div>
    <script src="lib/angular.js"></script>
    <script src="js/main.js"></script>
</body>

</html>
