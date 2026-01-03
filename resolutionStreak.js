function resolutionStreak(days) {
    let streak = 0, dayFailed=0,onlyone=true;
    for (let i = 0; i < days.length; i++) {
        let currentDay = days[i];
        let currentStreak = currentDay[0];
        let currentResolution = currentDay[1];
        let currentProgress = currentDay[2];
        if (currentStreak >= 10000 && currentResolution <= 120 && currentProgress >= 5) {
            streak++;
        }
        else {
            if(onlyone)
            {
                dayFailed=i+1;
                onlyone=false;
            }
        }
    }
    if (!onlyone)
        return `Resolution failed on day ${dayFailed}: ${streak} day streak.`;
    return `Resolution on track: ${streak} day streak.`;
}

resolutionStreak([[10500, 75, 15], [11000, 90, 10], [10650, 100, 9]])
resolutionStreak([[10000, 120, 5], [10950, 121, 11]])
resolutionStreak([[15000, 110, 8], [12300, 60, 13], [10100, 120, 4], [9000, 125, 4]])
resolutionStreak([[11600, 76, 13], [12556, 64, 26], [10404, 32, 59], [9999, 44, 124], [7508, 23, 167], [10900, 80, 0]])
resolutionStreak([[10500, 75, 15], [11000, 90, 10], [10650, 100, 9], [10200, 60, 10], [10678, 87, 9], [12431, 67, 13], [10444, 107, 19], [10111, 95, 5], [10000, 120, 7], [11980, 101, 8]])