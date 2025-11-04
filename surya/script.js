document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer Logic
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 7);

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById('countdown').innerHTML = "OFFER EXPIRED";
            return;
        }

        document.getElementById('days').textContent = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        document.getElementById('hours').textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        document.getElementById('minutes').textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        document.getElementById('seconds').textContent = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
    }, 1000);

    // Track Engagement (fires after 10s on page)
    setTimeout(function() {
        if (typeof fbq !== "undefined") {
            fbq('track', 'ViewContent', {
                page: document.title
            });
        } else {
            console.warn("Facebook Pixel not loaded.");
        }
    }, 10000);

    // Ensure button exists before adding event listener
    function trackButtonClick() {
        const joinBtn = document.getElementById('joinBtn');
        if (joinBtn) {
            joinBtn.addEventListener('click', function() {
                if (typeof fbq !== "undefined") {
                    fbq('track', 'Subscribe', {
                        button_text: joinBtn.innerText.trim(),
                        destination: "https://t.me/+pOwSoXjqFhU1MGZl"
                    });
                } else {
                    console.warn("Facebook Pixel not loaded.");
                }
                window.open("https://t.me/+pOwSoXjqFhU1MGZl", "_blank");
            });
        } else {
            console.warn("Join button not found.");
        }
    }

    // Wait for the button to load if not immediately available
    if (document.getElementById('joinBtn')) {
        trackButtonClick();
    } else {
        setTimeout(trackButtonClick, 2000);
    }
});