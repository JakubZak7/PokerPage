function incrementPageViews() {
    let views = localStorage.getItem('pageViews') || 0;
    views++;
    localStorage.setItem('pageViews', views);
    let users = localStorage.getItem('uniqueUsers');
    if (!users) {
        users = 1;
        localStorage.setItem('uniqueUsers', users);
    }
}
function countClick() {
    let clicks = localStorage.getItem('fbClicks') || 0;
    clicks++;
    localStorage.setItem('fbClicks', clicks);
}
function showStats() {
    let views = localStorage.getItem('pageViews') || 0;
    let users = localStorage.getItem('uniqueUsers') || 0;
    let fbClicks = localStorage.getItem('fbClicks') || 0;
    let earnings = fbClicks * 10;
    document.getElementById('uniqueUsers').innerText = users;
    document.getElementById('pageViews').innerText = views;
    document.getElementById('fbClicks').innerText = fbClicks;
    document.getElementById('earnings').innerText = earnings + ' zł';
    const ctx = document.getElementById('viewsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Unikalni użytkownicy', 'Wejścia', 'Kliknięcia Facebook'],
            datasets: [{
                label: 'Statystyki',
                data: [users, views, fbClicks],
                backgroundColor: ['#4CAF50', '#2196F3', '#FFC107']
            }]
        },
        options: { responsive: true }
    });
}

function clearStats() {
    localStorage.clear();
    alert('Statystyki wyzerowane!');
    location.reload();
}
