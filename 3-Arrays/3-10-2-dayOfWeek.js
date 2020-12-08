function dayOfWeek(num) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (num >= 1 && num <= 7) {
        console.log(days[num - 1]);
    } else {
        console.log('Invalid day!');
    }
}
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
dayOfWeek(33);
dayOfWeek(-3);
// 100/100