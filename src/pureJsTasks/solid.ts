// S

// O

// L
class Database {
  connect() {}
  readData() {}
}

class SqlDatabase extends Database {
  connect(): void {}
  readData(): void {}
  joinTables(): void {}
}

class Firebase extends Database {
  connect(): void {}
  readData(): void {}
  joinIndex() {}
}

// I
interface Common {
  sum: () => number;
  fetchData: () => Promise<void>;
}

interface CommonSecond extends Common {
  logInfo: () => void;
}

class First implements CommonSecond {
  sum() {
    return 5;
  }

  logInfo() {}

  fetchData() {
    return Promise.resolve();
  }
}

class Second implements Common {
  sum() {
    return 5;
  }

  fetchData() {
    return Promise.resolve();
  }
}

// D
interface MusicApi {
  fetchData: () => void;
}

class YandexMusicApi implements MusicApi {
  fetchData() {
    console.log('fetch yandex music');
  }
}

class VKMusicApi implements MusicApi {
  fetchData() {
    console.log('get vk music');
  }
}

class SpotifyMusicApi implements MusicApi {
  fetchData() {
    console.log('get spotify music');
  }
}

class MusicClient implements MusicApi {
  api: MusicApi;

  constructor(api: MusicApi) {
    this.api = api;
  }

  fetchData() {
    this.api.fetchData();
  }
}

const fetchMusic = () => {
  const musicClient = new MusicClient(new YandexMusicApi());
};
