<link rel="stylesheet" href="inspiration.css"/>
<div class="inspiration-view">
<?php
		// Supply a user id and an access token
		$userid = "15139071";
		$accessToken = "15139071.ab103e5.64f2e2e1997d495bb3b676e32dcecb65";

		// Gets our data
		function fetchData($url){
		     $ch = curl_init();
		     curl_setopt($ch, CURLOPT_URL, $url);
		     curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		     curl_setopt($ch, CURLOPT_TIMEOUT, 20);
		     $result = curl_exec($ch);
		     curl_close($ch); 
		     return $result;
		}

		// Pulls and parses data.
		$result = fetchData("https://api.instagram.com/v1/users/{$userid}/media/recent/?access_token={$accessToken}");
		$result = json_decode($result);
	?>


	<?php foreach ($result->data as $post): ?>
		<!-- Renders images. @Options (thumbnail,low_resoulution, high_resolution) -->
		<a class="group" rel="group1" href="<?= $post->images->standard_resolution->url ?>">
			<img src="<?= $post->images->thumbnail->url ?>"></a>
	<?php endforeach ?>
</div>