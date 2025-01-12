function solve(input) {
    
    class Song {
        constructor(name, time) {
            this.name = name;
            this.time = time;
        }

        print() {
            console.log(this.name);
        }
    }

    const songs = {};
    const count = input.shift();
    const allSongs = [];

    for (let i = 0; i < count; i++) {
        const[typeList, name, time] = input.shift().split('_');
        
        if(!songs[typeList]) {
            songs[typeList] = [];
        }

        songs[typeList].push(new Song(name, time));
        const newSong = new Song(name, time);
        allSongs.push(newSong);
    }

    const typeList = input.shift();
    if(typeList === 'all') {
        allSongs.forEach(song => song.print());
    } else {
        songs[typeList].forEach(song => song.print());
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);