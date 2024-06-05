document.getElementById('share-facebook').addEventListener('click', function() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(document.querySelector('main h2').innerText);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, 'facebook-share-dialog', 'width=800,height=600');
    return false;
});

document.getElementById('share-twitter').addEventListener('click', function() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(document.querySelector('main h2').innerText);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, 'twitter-share-dialog', 'width=800,height=600');
    return false;
});
