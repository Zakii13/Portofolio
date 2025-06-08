document.addEventListener("DOMContentLoaded", function() {
    const videoWrappers = document.querySelectorAll(".video-wrapper");

    videoWrappers.forEach(wrapper => {
        wrapper.addEventListener("click", function() {
            if (this.classList.contains("playing")) return;

            const videoId = this.getAttribute("data-video-id");
            const iframe = document.createElement("iframe");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoId + "?autoplay=1&rel=0&showinfo=0&modestbranding=1");
            iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
            iframe.setAttribute("allowfullscreen", "true");

            this.appendChild(iframe);
            this.classList.add("playing");
        });
    });
});


// This script enables YouTube video playback in a custom video wrapper.
// When a user clicks on the video wrapper, it creates an iframe with the YouTube video and starts playback.