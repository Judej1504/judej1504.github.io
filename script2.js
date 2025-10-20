function data() {
	for (let i = 0; i < channels.length; i++) {
		fetch(`https://mixerno.space/api/youtube-channel-counter/user/${channels[i]}`)
			.then((res) => res.json())
			.then((data) => {
				subcounts[i] = data.counts[0].count
				viewcounts[i] = data.counts[3].count
			});
	}
}
