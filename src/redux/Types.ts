export interface RootObject {
  properties?: Properties;
  tracks:     Track[];
}

export interface InitialState {
  currentSongs: Track[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: Track;
  genreListId: string;
}

export interface Properties {
}

export interface Track {
  artists: Artist[];
  highlightsurls?: Highlightsurls;
  hub?: Hub;
  images: Images;
  key: string;
  layout?: string;
  properties?: Properties;
  share?: Share;
  subtitle: string;
  title: string;
  type?: TrackType;
  url: string;
  genres?: SongGenres;
  myshazam?:  Myshazam;
  sections: Section[];
  urlparams?: Urlparams;
}

export interface Artist {
  adamid: string;
  alias?:  string;
  id:     string;
}

export interface Highlightsurls {
  artisthighlightsurl?: string;
  trackhighlighturl?:   string;
}

export interface Hub {
  actions?:    Action[];
  displayname: string;
  explicit:    boolean;
  image:       string;
  options:     Option[];
  type:        string;
  providers?: Provider[]
}

export interface Action {
  id?:  string;
  name?: string;
  type?: string;
  uri?: string;
  share?: Share
}

export interface Option {
  actions: Action[];
  beacondata: Beacondata;
  caption: string;
  colouroverflowimage: boolean;
  image: string;
  listcaption: string;
  overflowimage: string;
  providername: string;
  type: string;
}

export interface Beacondata {
  providername: string;
  type: string;
}

export interface Images {
  background?: string;
  coverart?:   string;
  coverarthq?: string;
  joecolor?:   string;
}

export interface Share {
  avatar?:  string;
  href:     string;
  html:     string;
  image?:   string;
  snapchat: string;
  subject:  string;
  text:     string;
  twitter:  string;
}

export enum TrackType {
  Music = "MUSIC",
}

export interface SongGenres {
  primary: string;
}

export interface Provider {
  actions: Action[];
  caption: string;
  images:  ProviderImages;
  type:    string;
}

export interface ProviderImages {
  default:  string;
  overflow: string;
}

export interface Myshazam {
  apple: Apple;
}

export interface Apple {
  actions: Action[];
}

export interface Section {
  metadata?:   Metadatum[];
  metapages?:  Metapage[];
  tabname:     string;
  type: string;
  text: []
  youtubeurl?: Youtubeurl;
}

export interface Metadatum {
  ext:  string;
  title: string;
}

export interface Metapage {
  caption: string;
  image:   string;
}

export interface Youtubeurl {
  actions: Action[];
  caption: string;
  image:   Image;
}

export interface Image {
  dimensions: Dimensions;
  url:        string;
}

export interface Dimensions {
  height: number;
  width:  number;
}

export interface Urlparams {
  "{trackartist}": string;
  "{tracktitle}":  string;
}





export interface ArtistObject {
  data: ArtistDatum[];
 }
 
 export interface ArtistDatum {
  attributes:    Attributes;
  id:            string;
  relationships?: Relationships;
  type:          string;
 }
 
 export interface Attributes {
  albumName:                 string;
  artistName:                string;
  artwork:                   Artwork;
  audioLocale:               string;
  audioTraits:               AudioTrait[];
  composerName:              string;
  contentRating?:            string;
  discNumber:                number;
  durationInMillis:          number;
  genreNames:                string[];
  hasLyrics:                 boolean;
  hasTimeSyncedLyrics:       boolean;
  isAppleDigitalMaster:      boolean;
  isMasteredForItunes:       boolean;
  isVocalAttenuationAllowed: boolean;
  isrc:                      string;
  name:                      string;
  playParams:                PlayParams;
  previews:                  Preview[];
  releaseDate:               Date;
  trackNumber:               number;
  url:                       string;
 }
 
 export interface Artwork {
  bgColor:    string;
  hasP3:      boolean;
  height:     number;
  textColor1: string;
  textColor2: string;
  textColor3: string;
  textColor4: string;
  url:        string;
  width:      number;
 }
 

export enum AudioTrait {
  Lossless = "lossless",
  LossyStereo = "lossy-stereo",
 }

 export interface EditorialNotes {
  name:     string;
  short:    string;
  standard: string;
 }
 
 export interface Relationships {
  albums: Albums;
 }
 
 export interface Albums {
  data: AlbumsDatum[];
 }
 

export interface PlayParams {
  id:   string;
  kind: string;
 }

 export interface AlbumsDatum {
  id:   string;
  type: Type;
 }
 
 export enum Type {
  Albums = "albums",
 }
 
 export interface Preview {
  url: string;
 }
 

 export interface SearchObject {
  artists: Artists;
  tracks:  Tracks;
 }
 
 export interface Artists {
  hits: ArtistsHit[];
 }
 
 export interface ArtistsHit {
  artist: HitArtist;
 }
 
 export interface HitArtist {
  adamid:   string;
  avatar:   string;
  name:     string;
  verified: boolean;
  weburl:   string;
 }
 
 export interface Tracks {
  hits: TracksHit[];
 }
 
 export interface TracksHit {
  snippet?: string;
  track:    Track;
 }