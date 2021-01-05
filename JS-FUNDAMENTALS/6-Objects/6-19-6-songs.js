function songs(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    
    let totalSongs = arr.shift();
    let type = arr.pop();
    let songs = [];
    
    for(let i = 0; i < totalSongs; i++) {
        let tokens = arr[i].split('_');
        let [typeList, name, time] = tokens;
        let song = new Song(typeList, name, time);
        songs.push(song);       
    }
    
    if (type === 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.typeList === type);
        filtered.forEach((i) => console.log(i.name));
    }
}
/* function songs(arr) {
    let totalSongs = arr.shift();
    let type = arr.pop();
    for(let song = 0; song < totalSongs; song++) {
        let tokens = arr[song].split('_');
        let [typeList, name, time] = tokens;
        
        if (typeList === type || type === 'all') {
            console.log(name);
        } 
    }
} */

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);// DownTown    Kiss    Smooth Criminal
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']); // Andalouse
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']); // Replay    Photoshop

/* 
Define a class Song, which holds the following information about songs: typeList, name and time.

You will receive the input as an array.

The first element n will be the number of songs. 
Next n elements will be the songs data in the following format: "{typeList}_{name}_{time}", 
and the the last element will be Type List / "all".

Print only the names of the songs which are from that Type List / All songs. 
*/