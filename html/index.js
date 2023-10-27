const play = () => {
  const video = document.getElementById('video'), vendoUrl = window.URL || window.webkitURL;
  if(navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video: true})
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

const stopWebcam = () => {
  const stream = video.srcObject;
  const tracks = stream.getTracks();
  tracks.forEach(track => {
    track.stop();
  })
  video.srcObject = null;
}