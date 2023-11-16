function shortenUrl() {
    var originalUrl = document.getElementById("originalUrl").value;

    // Simple validation
    if (originalUrl.trim() === "") {
        alert("Please enter a valid URL");
        return;
    }

    // Replace this with your actual URL shortening logic
    var shortenedUrl = "https://short.url/abcd123";

    document.getElementById("shortenedUrl").innerText = "Shortened URL: " + shortenedUrl;
}
