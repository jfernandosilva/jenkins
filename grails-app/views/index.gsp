<!doctype html>
<html lang="en" class="no-js">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Welcome to Grails</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <asset:stylesheet src="application.css" />

</head>

<body ng-app="jenkins">

    <div class="navbar navbar-default navbar-static-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" ng-click="navExpanded = !navExpanded">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/#">
                    <i class="fa grails-icon">
                    </i> Grails
                </a>
            </div>
        </div>
    </div>

    <div class="container">
        <div ui-view>XD</div>
    </div>

    <asset:javascript src="/jenkins/jenkins.js" />
</body>

</html>
