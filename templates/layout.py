<!DOCTYPE html>
<html lang="{{meta.lang}}">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale = 1.0, maximum-scale = 1.0, user-scalable = no">
    <title>{{meta.title}}</title>
    <meta name="description" content="{{meta.description}}">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="{{static.css}}main.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="{{static.js}}chaffle.js"></script>
</head>
<body>
<div class="page_wrapper" style="opacity:0">
{% block main %}
{% endblock %}
</div>
{% include "includes/loader.py" %}
{% include "includes/footerJs.py" %}
</body>
</html>