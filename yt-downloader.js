javascript:(function(){
  const videoId = window.location.search.split('v=')[1];
  const downloadUrl = `https://www.youtube.com/get_video_info?video_id=${videoId}`;
  fetch(downloadUrl).then(response => response.text()).then(data => {
    const downloadUrls = decodeURIComponent(data).split('&').filter(param => param.startsWith('url_encoded_fmt_stream_map=')).map(param => param.split('=')[1]);
    const urls = downloadUrls.flatMap(downloadUrl => {
      return decodeURIComponent(downloadUrl).split(',').map(param => param.split('&').reduce((obj, item) => {
        const parts = item.split('=');
        obj[parts[0]] = parts[1];
        return obj;
      }, {}));
    }).filter(data => data.type.includes('video/mp4')).map(data => data.url);
    if (urls.length > 0) {
      const button = document.createElement('a');
      button.innerText = 'Download Video';
      button.href = urls[0];
      button.style.display = 'block';
      button.style.marginTop = '10px';
      button.style.padding = '10px';
      button.style.border = 'none';
      button.style.background = '#333';
      button.style.color = '#fff';
      button.style.textDecoration = 'none';
      button.download = `video-${videoId}.mp4`;
      document.querySelector('.ytp-right-controls').appendChild(button);
    }
  });
})();
