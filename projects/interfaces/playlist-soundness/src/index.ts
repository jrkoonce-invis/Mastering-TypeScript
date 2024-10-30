// Write your unrollPlaylist function and types here! ✨
// You'll need to export the function so the tests can run it.

interface Artists {
	[name: string]: string[];
}

interface PlaylistObject {
	artists: Artists;
	songs: string[];
	time: number;
}

interface Album {}

interface Song {
	name: string;
}

type MusicItem = Song | Album | Playlist;

export function unrollPlaylist(item: MusicItem[]): PlaylistObject | void {}
