<p><button class="btn btn-primary btn-lg" id="functionButton" onclick="triggerParticleFunction()">Move that flag!</button><script type="text/javascript">

    function triggerParticleFunction() {

        var deviceID = "38001b001147353130373838";
        var accessToken = "55124b34fd82a5e272dc8772438e81e14213710e";
        var moveItFunctionName = "moveit";

        var http = new XMLHttpRequest();
        var url = "https://api.spark.io/v1/devices/" + deviceID + "/" + moveItFunctionName + "/" + "?access_token=" + accessToken;
        http.open("POST", url, true);

        http.send();
    }
    </script></p>
